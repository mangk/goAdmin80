package core

import (
	"fmt"
	rotatelogs "github.com/lestrrat-go/file-rotatelogs"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"os"
	"path"
	"time"
)

func Log() *zap.Logger {
	return _core.log
}

func (c *Core) initLog() {

	if ok, _ := pathExists(Config().Zap.Director); !ok { // 判断是否有Director文件夹
		fmt.Printf("create %v directory\n", Config().Zap.Director)
		_ = os.Mkdir(Config().Zap.Director, os.ModePerm)
	}

	cores := mZap.GetZapCores()
	logger := zap.New(zapcore.NewTee(cores...))

	if Config().Zap.ShowLine {
		logger = logger.WithOptions(zap.AddCaller())
	}
	c.log = logger
	zap.ReplaceGlobals(c.log)
}

var mZap = new(_zap)

type _zap struct{}

// GetEncoder 获取 zapcore.Encoder
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) GetEncoder() zapcore.Encoder {
	if Config().Zap.Format == "json" {
		return zapcore.NewJSONEncoder(z.GetEncoderConfig())
	}
	return zapcore.NewConsoleEncoder(z.GetEncoderConfig())
}

// GetEncoderConfig 获取zapcore.EncoderConfig
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) GetEncoderConfig() zapcore.EncoderConfig {
	cfg2 := Config()
	return zapcore.EncoderConfig{
		MessageKey:     "message",
		LevelKey:       "level",
		TimeKey:        "time",
		NameKey:        "logger",
		CallerKey:      "caller",
		StacktraceKey:  Config().Zap.StacktraceKey,
		LineEnding:     zapcore.DefaultLineEnding,
		EncodeLevel:    cfg2.Zap.ZapEncodeLevel(),
		EncodeTime:     z.CustomTimeEncoder,
		EncodeDuration: zapcore.SecondsDurationEncoder,
		EncodeCaller:   zapcore.FullCallerEncoder,
	}
}

// GetEncoderCore 获取Encoder的 zapcore.Core
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) GetEncoderCore(l zapcore.Level, level zap.LevelEnablerFunc) zapcore.Core {
	writer, err := getWriteSyncer(l.String()) // 使用file-rotatelogs进行日志分割
	if err != nil {
		fmt.Printf("Get Write Syncer Failed err:%v", err.Error())
		return nil
	}

	return zapcore.NewCore(z.GetEncoder(), writer, level)
}

// CustomTimeEncoder 自定义日志输出时间格式
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) CustomTimeEncoder(t time.Time, encoder zapcore.PrimitiveArrayEncoder) {
	encoder.AppendString(Config().Zap.Prefix + t.Format("2006/01/02 - 15:04:05.000"))
}

// GetZapCores 根据配置文件的Level获取 []zapcore.Core
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) GetZapCores() []zapcore.Core {
	cores := make([]zapcore.Core, 0, 7)
	zap2 := Config().Zap
	for level := zap2.TransportLevel(); level <= zapcore.FatalLevel; level++ {
		cores = append(cores, z.GetEncoderCore(level, z.GetLevelPriority(level)))
	}
	return cores
}

// GetLevelPriority 根据 zapcore.Level 获取 zap.LevelEnablerFunc
// Author [SliverHorn](https://github.com/SliverHorn)
func (z *_zap) GetLevelPriority(level zapcore.Level) zap.LevelEnablerFunc {
	switch level {
	case zapcore.DebugLevel:
		return func(level zapcore.Level) bool { // 调试级别
			return level == zap.DebugLevel
		}
	case zapcore.InfoLevel:
		return func(level zapcore.Level) bool { // 日志级别
			return level == zap.InfoLevel
		}
	case zapcore.WarnLevel:
		return func(level zapcore.Level) bool { // 警告级别
			return level == zap.WarnLevel
		}
	case zapcore.ErrorLevel:
		return func(level zapcore.Level) bool { // 错误级别
			return level == zap.ErrorLevel
		}
	case zapcore.DPanicLevel:
		return func(level zapcore.Level) bool { // dpanic级别
			return level == zap.DPanicLevel
		}
	case zapcore.PanicLevel:
		return func(level zapcore.Level) bool { // panic级别
			return level == zap.PanicLevel
		}
	case zapcore.FatalLevel:
		return func(level zapcore.Level) bool { // 终止级别
			return level == zap.FatalLevel
		}
	default:
		return func(level zapcore.Level) bool { // 调试级别
			return level == zap.DebugLevel
		}
	}
}

func getWriteSyncer(level string) (zapcore.WriteSyncer, error) {
	fileWriter, err := rotatelogs.New(
		path.Join(Config().Zap.Director, "%Y-%m-%d", level+".log"),
		rotatelogs.WithClock(rotatelogs.Local),
		rotatelogs.WithMaxAge(time.Duration(Config().Zap.MaxAge)*24*time.Hour), // 日志留存时间
		rotatelogs.WithRotationTime(time.Hour*24),
	)
	if Config().Zap.LogInConsole {
		return zapcore.NewMultiWriteSyncer(zapcore.AddSync(os.Stdout), zapcore.AddSync(fileWriter)), err
	}
	return zapcore.AddSync(fileWriter), err
}
