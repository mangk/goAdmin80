package log

import (
	"fmt"
	"github.com/google/uuid"
	rotatelogs "github.com/lestrrat-go/file-rotatelogs"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/core"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"log"
	"os"
	"path"
	"time"
)

var _log *zap.Logger

func init() {
	core.ModuleAdd(Log{})
}

type Log struct {
	trace string
}

func (l *Log) Info(msg string) {
	_log.Info("[" + l.trace + "]" + msg)
}

func (l *Log) Infof(format string, a ...any) {
	a = append([]any{l.trace}, a...)
	_log.Info(fmt.Sprintf("[%s]"+format, a...))
}

func (l *Log) Warn(msg string) {
	_log.Warn("[" + l.trace + "]" + msg)
}

func (l *Log) Warnf(format string, a ...any) {
	a = append([]any{l.trace}, a...)
	_log.Warn(fmt.Sprintf("[%s]"+format, a...))
}

func (l *Log) Error(msg string) {
	_log.Error("[" + l.trace + "]" + msg)
}

func (l *Log) Errorf(format string, a ...any) {
	a = append([]any{l.trace}, a...)
	_log.Error(fmt.Sprintf("[%s]"+format, a...))
}

func (l *Log) Debug(msg string) {
	_log.Debug("[" + l.trace + "]" + msg)
}

func (l *Log) Debugf(format string, a ...any) {
	a = append([]any{l.trace}, a...)
	_log.Debug(fmt.Sprintf("[%s]"+format, a...))
}

func (l Log) Init() uint8 {
	var (
		writer    []zapcore.WriteSyncer // 日志输出位置
		encoder   zapcore.Encoder       // 日志格式化
		encodeCfg zapcore.EncoderConfig // 日志格式化配置
		level     zapcore.Level         // 日志等级
		opt       []zap.Option
	)

	level = config.LogCfg().TransportLevel()

	encodeCfg = zapcore.EncoderConfig{
		TimeKey:       "_time",
		LevelKey:      "_level",
		NameKey:       "_logger",
		CallerKey:     "_caller",
		StacktraceKey: "_stack",
		FunctionKey:   zapcore.OmitKey,
		MessageKey:    "msg",
		LineEnding:    zapcore.DefaultLineEnding,
		EncodeLevel:   config.LogCfg().ZapEncodeLevel(),
		EncodeTime: func(t time.Time, encoder zapcore.PrimitiveArrayEncoder) {
			encoder.AppendString(t.Format("2006-01-02 15:04:05.00000"))
		},
		EncodeCaller: zapcore.ShortCallerEncoder,
	}

	if config.LogCfg().Format == "json" {
		encoder = zapcore.NewJSONEncoder(encodeCfg)
	} else {
		encoder = zapcore.NewConsoleEncoder(encodeCfg)
	}

	for _, s := range config.LogCfg().Output {
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

	if config.LogCfg().Prefix != "" {
		opt = append(opt, zap.Fields(zap.String("_prefix", config.LogCfg().Prefix)))
	}
	opt = append(opt, zap.WithCaller(true))

	_log = zap.New(zapcore.NewCore(encoder, zapcore.NewMultiWriteSyncer(writer...), level), opt...)
	zap.ReplaceGlobals(_log)

	log.SetOutput(NewZapLoggerAdapter(_log, "_sys"))

	return core.ModuleLog
}

func ZapLog() *zap.Logger {
	return _log
}

func Info(msg string) {
	_log.Info(msg)
}

func Infof(format string, a ...any) {
	_log.Info(fmt.Sprintf(format, a...))
}

func Warn(msg string) {
	_log.Warn(msg)
}

func Warnf(format string, a ...any) {
	_log.Warn(fmt.Sprintf(format, a...))
}

func Error(msg string) {
	_log.Error(msg)
}

func Errorf(format string, a ...any) {
	_log.Error(fmt.Sprintf(format, a...))
}

func Debug(msg string) {
	_log.Debug(msg)
}

func Debugf(format string, a ...any) {
	_log.Debug(fmt.Sprintf(format, a...))
}

func Trace(trace ...string) *Log {
	var t string
	if len(trace) != 0 {
		t = trace[0]
	} else {
		t = uuid.New().String()
	}

	return &Log{trace: t}
}

func getLogfileWriter(dirName string) *rotatelogs.RotateLogs {
	fileWriter, err := rotatelogs.New(
		path.Join(dirName, "%Y-%m-%d.log"),
		rotatelogs.WithClock(rotatelogs.Local),
		rotatelogs.WithMaxAge(time.Duration(config.LogCfg().MaxAge)*24*time.Hour), // 日志留存时间
		rotatelogs.WithRotationTime(time.Hour*24),
	)
	if err != nil {
		panic("设置日志输出错误:" + err.Error())
	}
	return fileWriter
}

type ZapLoggerAdapter struct {
	name   string
	logger *zap.Logger
}

func NewZapLoggerAdapter(logger *zap.Logger, name string) *ZapLoggerAdapter {
	return &ZapLoggerAdapter{
		name:   name,
		logger: logger,
	}
}

func (a *ZapLoggerAdapter) Write(p []byte) (n int, err error) {
	// TODO 通过 a.name 区分日志类型
	a.logger.WithOptions(zap.WithCaller(false)).With(zap.Namespace(a.name)).Info("", zap.String("log", string(p)))
	return len(p), nil
}

func (a *ZapLoggerAdapter) Printf(message string, data ...interface{}) {
	// TODO 通过 a.name 区分日志类型
	_log.WithOptions(zap.WithCaller(false)).With(zap.Namespace(a.name)).Info("", zap.String("message", message), zap.Any("data", data))
}

func (a *ZapLoggerAdapter) Info(msg string, keysAndValues ...interface{}) {
	a.logger.WithOptions(zap.WithCaller(false)).With(zap.Namespace(a.name)).Info("", zap.String("message", msg), zap.Any("data", keysAndValues))
}

func (a *ZapLoggerAdapter) Error(err error, msg string, keysAndValues ...interface{}) {
	a.logger.WithOptions(zap.WithCaller(false)).With(zap.Namespace(a.name)).Error("", zap.String("message", msg), zap.Any("data", keysAndValues), zap.Error(err))
}
