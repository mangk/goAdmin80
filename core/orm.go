package core

import (
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
		cfg := gorm.Config{
			Logger: logger.New(NewWriter(), logger.Config{
				SlowThreshold: 200 * time.Millisecond,
				LogLevel:      logger.Info,
				Colorful:      false,
			}),
			NamingStrategy: schema.NamingStrategy{
				TablePrefix: dbCfg.Prefix,
				//SingularTable: true, // TODO 这里是否通过配置项目支持
			},
			DisableAutomaticPing: true,
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

type Writer struct {
}

func NewWriter() *Writer {
	return &Writer{}
}

func (w *Writer) Printf(message string, data ...interface{}) {
	_core.log.WithOptions(zap.WithCaller(false)).Info("", zap.Any("_gorm", data))
}
