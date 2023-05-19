package core

import (
	rotatelogs "github.com/lestrrat-go/file-rotatelogs"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"log"
	"os"
	"path"
	"time"
)

func Log() *zap.Logger {
	return _core.log
}

func (c *Core) initLog() {
	var (
		writer    []zapcore.WriteSyncer // 日志输出位置
		encoder   zapcore.Encoder       // 日志格式化
		encodeCfg zapcore.EncoderConfig // 日志格式化配置
		level     zapcore.Level         // 日志等级
		opt       []zap.Option
	)

	level = Config().Zap.TransportLevel()

	encodeCfg = zapcore.EncoderConfig{
		TimeKey:       "_time",
		LevelKey:      "_level",
		NameKey:       "_logger",
		CallerKey:     "_caller",
		StacktraceKey: "_stack",
		FunctionKey:   zapcore.OmitKey,
		MessageKey:    "msg",
		LineEnding:    zapcore.DefaultLineEnding,
		EncodeLevel:   Config().Zap.ZapEncodeLevel(),
		EncodeTime: func(t time.Time, encoder zapcore.PrimitiveArrayEncoder) {
			encoder.AppendString(t.Format("2006-01-02 15:04:05.00000"))
		},
		EncodeCaller: zapcore.ShortCallerEncoder,
	}

	if Config().Zap.Format == "json" {
		encoder = zapcore.NewJSONEncoder(encodeCfg)
	} else {
		encoder = zapcore.NewConsoleEncoder(encodeCfg)
	}

	for _, s := range Config().Zap.Output {
		switch s {
		case "console":
			writer = append(writer, zapcore.AddSync(os.Stdout))
		default:
			writer = append(writer, zapcore.AddSync(getLogfileWriter(s)))
		}
	}

	if len(writer) == 0 {
		writer = append(writer, zapcore.AddSync(os.Stdout))
	}

	if Config().Zap.Prefix != "" {
		opt = append(opt, zap.Fields(zap.String("_prefix", Config().Zap.Prefix)))
	}
	opt = append(opt, zap.WithCaller(true))

	c.log = zap.New(zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(writer...), level), opt...)
	zap.ReplaceGlobals(c.log)

	log.SetOutput(NewZapLoggerAdapter(c.log))
}

func getLogfileWriter(dirName string) *rotatelogs.RotateLogs {
	fileWriter, err := rotatelogs.New(
		path.Join(dirName, "%Y-%m-%d.log"),
		rotatelogs.WithClock(rotatelogs.Local),
		rotatelogs.WithMaxAge(time.Duration(Config().Zap.MaxAge)*24*time.Hour), // 日志留存时间
		rotatelogs.WithRotationTime(time.Hour*24),
	)
	if err != nil {
		panic("设置日志输出错误:" + err.Error())
	}
	return fileWriter
}

type ZapLoggerAdapter struct {
	logger *zap.Logger
}

// NewZapLoggerAdapter 创建一个Zap日志适配器
func NewZapLoggerAdapter(logger *zap.Logger) *ZapLoggerAdapter {
	return &ZapLoggerAdapter{
		logger: logger,
	}
}

// Write 实现io.Writer接口的Write方法，用于将日志消息写入Zap日志库
func (a *ZapLoggerAdapter) Write(p []byte) (n int, err error) {
	// 将日志消息写入Zap日志库
	a.logger.WithOptions(zap.WithCaller(false)).With(zap.Namespace("_sys")).Info("", zap.String("log", string(p)))
	return len(p), nil
}
