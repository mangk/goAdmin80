package core

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
	"time"
)

func DB(driver ...string) *gorm.DB {
	d := "default"
	if len(driver) == 1 {
		d = driver[0]
	}

	if db, ok := _core.dbList[d]; ok {
		return db
	}
	fmt.Printf("db driver not found")
	return nil
}

func (c *Core) initMysql() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True",
		Config().Mysql.GeneralDB.Username,
		Config().Mysql.GeneralDB.Password,
		Config().Mysql.GeneralDB.Path,
		Config().Mysql.GeneralDB.Port,
		Config().Mysql.GeneralDB.Dbname,
	)

	cfg := gorm.Config{}
	switch Config().System.Env {
	case "debug", "test":
		cfg.Logger = logger.Default.LogMode(logger.Info)
	case "release":
		cfg.Logger = logger.Default.LogMode(logger.Warn)
	}
	cfg.NamingStrategy = schema.NamingStrategy{
		TablePrefix: Config().Mysql.Prefix,
		//SingularTable: true,
	}

	db, err := gorm.Open(mysql.Open(dsn), &cfg)
	if err != nil {
		panic("数据库初始化失败")
	}

	conn, _ := db.DB()
	// 设置空闲连接池中连接的最大数量
	conn.SetMaxIdleConns(10)
	// 设置打开数据库连接的最大数量
	conn.SetMaxOpenConns(50)
	// 设置了连接可复用的最大时间
	conn.SetConnMaxLifetime(time.Hour)
	c.dbList["default"] = db
}
