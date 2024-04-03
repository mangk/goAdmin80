package db

import (
	"fmt"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/core"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"time"
)

var _dbList map[string]*gorm.DB

func init() {
	_dbList = make(map[string]*gorm.DB)
	core.ModuleAdd(d{})
}

type d struct {
}

func (d) Init() uint8 {
	for name, dbCfg := range config.DBCfg() {
		db, err := gorm.Open(dbCfg.Dialector(), &gorm.Config{
			// TODO 日志介入能不能放在初始化之后
			//Logger: logger.New(NewZapLoggerAdapter(c.log, "_gorm"), logger.Config{
			//	SlowThreshold: 200 * time.Millisecond,
			//	LogLevel:      logger.LogLevel(dbCfg.LogMode),
			//	Colorful:      false,
			//}),
			NamingStrategy: schema.NamingStrategy{
				TablePrefix:   dbCfg.Prefix,
				SingularTable: dbCfg.Singular,
			},
			DisableAutomaticPing: true,
		})

		if err != nil {
			panic(fmt.Sprintf("[%s]数据库初始化失败：%+v", name, err))
		}

		conn, _ := db.DB()
		// 设置空闲连接池中连接的最大数量
		conn.SetMaxIdleConns(dbCfg.MaxIdleConn)
		// 设置打开数据库连接的最大数量
		conn.SetMaxOpenConns(dbCfg.MaxOpenConn)
		// 设置了连接可复用的最大时间
		conn.SetConnMaxLifetime(time.Hour)
		_dbList[name] = db
	}

	return core.ModuleDB
}

func DB(name ...string) *gorm.DB {
	dbName := "default"
	if len(name) == 1 {
		dbName = name[0]
	}

	if db, ok := _dbList[dbName]; ok {
		return db
	}

	panic(fmt.Sprintf("[%s]数据库不存在", name))
}
