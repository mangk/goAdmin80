package core

import (
	"context"
	"fmt"
	"go.uber.org/zap"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
	"time"
)

func DB(name ...string) *gorm.DB {
	d := "default"
	if len(name) == 1 {
		d = name[0]
	}

	if db, ok := _core.dbList[d]; ok {
		return db
	}
	panic(fmt.Sprintf("[%s]数据库不存在", name))
	return nil
}

func (c *Core) initDB() {
	for name, dbCfg := range c.config.DB {
		cfg := gorm.Config{}
		cfg.Logger = NewZapLogger(c.log, logger.Error)
		cfg.NamingStrategy = schema.NamingStrategy{
			TablePrefix: dbCfg.Prefix,
			//SingularTable: true, // TODO 这里是否通过配置项目支持
		}
		db, err := gorm.Open(dbCfg.Dialector(), &cfg)
		if err != nil {
			panic(fmt.Sprintf("[%s]数据库初始化失败", name))
		}

		conn, _ := db.DB()
		// 设置空闲连接池中连接的最大数量
		conn.SetMaxIdleConns(dbCfg.MaxIdleConns)
		// 设置打开数据库连接的最大数量
		conn.SetMaxOpenConns(dbCfg.MaxOpenConns)
		// 设置了连接可复用的最大时间
		conn.SetConnMaxLifetime(time.Hour)
		c.dbList[name] = db
	}
}

type ZapLogger struct {
	zapLogger *zap.Logger
	logLevel  logger.LogLevel
}

func NewZapLogger(zapLogger *zap.Logger, logLevel logger.LogLevel) *ZapLogger {
	return &ZapLogger{
		zapLogger: zapLogger,
		logLevel:  logLevel,
	}
}

// Interface logger interface
//type Interface interface {
//	LogMode(LogLevel) Interface
//	Info(context.Context, string, ...interface{})
//	Warn(context.Context, string, ...interface{})
//	Error(context.Context, string, ...interface{})
//	Trace(ctx context.Context, begin time.Time, fc func() (sql string, rowsAffected int64), err error)
//}

func (l *ZapLogger) LogMode(level logger.LogLevel) logger.Interface {
	return &ZapLogger{
		zapLogger: l.zapLogger,
		logLevel:  level,
	}
}

func (l *ZapLogger) Info(context context.Context, msg string, data ...interface{}) {
	//if l.logLevel >= logger.Info {
	l.zapLogger.Info("SQL:"+msg, zap.Any("", data))
	//}
}

func (l *ZapLogger) Warn(context context.Context, msg string, data ...interface{}) {
	if l.logLevel >= logger.Warn {
		l.zapLogger.Warn("SQL:"+msg, zap.Any("", data))
	}
}

func (l *ZapLogger) Error(context context.Context, msg string, data ...interface{}) {
	if l.logLevel >= logger.Error {
		l.zapLogger.Error("SQL:"+msg, zap.Any("", data))
	}
}

func (l *ZapLogger) Trace(ctx context.Context, begin time.Time, fc func() (string, int64), err error) {
	if l.logLevel > logger.Silent {
		elapsed := time.Since(begin)
		sql, rows := fc()
		msg := fmt.Sprintf("%s | %d | %s", elapsed, rows, sql)

		if err != nil && err != gorm.ErrRecordNotFound {
			l.zapLogger.Error(msg, zap.Error(err))
		} else {
			l.zapLogger.Debug("SQL", zap.String("sql", msg))
		}
	}
}

func (l *ZapLogger) Log(ctx context.Context, level logger.LogLevel, msg string, data ...interface{}) {
	if l.logLevel >= level {
		switch level {
		case logger.Info:
			l.zapLogger.Info(fmt.Sprintf(msg, data...))
		case logger.Warn:
			l.zapLogger.Warn(fmt.Sprintf(msg, data...))
		case logger.Error:
			l.zapLogger.Error(fmt.Sprintf(msg, data...))
		default:
			l.zapLogger.Debug(fmt.Sprintf(msg, data...))
		}
	}
}

func (l *ZapLogger) String() string {
	return "ZapLogger"
}
