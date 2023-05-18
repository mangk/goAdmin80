package config

import (
	"go.uber.org/zap/zapcore"
	"strings"
)

type Zap struct {
	Prefix      string   `json:"prefix" yaml:"prefix"`           // 日志前缀
	MaxAge      int      `json:"maxAge" yaml:"maxAge"`           // 日志留存时间
	Level       string   `json:"level" yaml:"level"`             // 级别 debug/info/warn/error/dpanic/panic/fatal
	Format      string   `json:"format" yaml:"format"`           // 输出形式 json/console
	EncodeLevel uint8    `json:"encodeLevel" yaml:"encodeLevel"` // 编码形式
	Output      []string `json:"output" yaml:"output"`           // 输出形式 console(stdout)/youDirName/TODO 对接日志接收器
}

func (z Zap) ZapEncodeLevel() zapcore.LevelEncoder {
	switch {
	case z.EncodeLevel == 0: // 小写编码器(默认)
		return zapcore.LowercaseLevelEncoder
	case z.EncodeLevel == 1: // 小写编码器带颜色
		return zapcore.LowercaseColorLevelEncoder
	case z.EncodeLevel == 2: // 大写编码器
		return zapcore.CapitalLevelEncoder
	case z.EncodeLevel == 3: // 大写编码器带颜色
		return zapcore.CapitalColorLevelEncoder
	default:
		return zapcore.LowercaseLevelEncoder
	}
}

func (z Zap) TransportLevel() zapcore.Level {
	z.Level = strings.ToLower(z.Level)
	switch z.Level {
	case "debug":
		return zapcore.DebugLevel
	case "info":
		return zapcore.InfoLevel
	case "warn":
		return zapcore.WarnLevel
	case "error":
		return zapcore.WarnLevel
	case "dpanic":
		return zapcore.DPanicLevel
	case "panic":
		return zapcore.PanicLevel
	case "fatal":
		return zapcore.FatalLevel
	default:
		return zapcore.DebugLevel
	}
}
