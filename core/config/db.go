package config

import (
	"gorm.io/driver/mysql"
	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

type DB struct {
	Driver       string `json:"driver" yaml:"driver"`
	Path         string `json:"path" yaml:"path"`                      // 服务器地址:端口
	Port         string `json:"port" yaml:"port"`                      //:端口
	Config       string `json:"config" yaml:"config"`                  // 高级配置
	Dbname       string `json:"dbname" yaml:"dbname"`                  // 数据库名
	Username     string `json:"username" yaml:"username"`              // 数据库用户名
	Password     string `json:"password" yaml:"password"`              // 数据库密码
	Prefix       string `json:"prefix" yaml:"prefix"`                  //全局表前缀，单独定义TableName则不生效
	Singular     bool   `json:"singular" yaml:"singular"`              //是否开启全局禁用复数，true表示开启
	Engine       string `json:"engine" yaml:"engine" default:"InnoDB"` //数据库引擎，默认InnoDB
	MaxIdleConns int    `json:"maxIdleConns" yaml:"maxIdleConns"`      // 空闲中的最大连接数
	MaxOpenConns int    `json:"maxOpenConns" yaml:"maxOpenConns"`      // 打开到数据库的最大连接数
	LogMode      string `json:"logMode" yaml:"logMode"`                // 是否开启Gorm全局日志
	LogZap       bool   `json:"logZap" yaml:"logZap"`                  // 是否通过zap写入日志文件
}

func (g *DB) Dialector() gorm.Dialector {
	switch g.Driver {
	case "mysql":
		return mysql.Open(g.Username + ":" + g.Password + "@tcp(" + g.Path + ":" + g.Port + ")/" + g.Dbname + "?" + g.Config)
	case "mssql":
		return sqlserver.Open("sqlserver://" + g.Username + ":" + g.Password + "@" + g.Path + ":" + g.Port + "?database=" + g.Dbname + "&encrypt=disable")
	//case "oracle":
	//	return "oracle://" + g.Username + ":" + g.Password + "@" + g.Path + ":" + g.Port + "/" + g.Dbname + "?" + g.Config
	case "pgsql":
		return postgres.Open("host=" + g.Path + " user=" + g.Username + " password=" + g.Password + " dbname=" + g.Dbname + " port=" + g.Port + " " + g.Config)
	}
	panic("undefined db driver")
}
