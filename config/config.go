package config

import (
	"fmt"
	"github.com/spf13/viper"
)

var _config *Config

type Config struct {
	Server  Server           `json:"server,omitempty" yaml:"server,omitempty"`
	CORS    CORS             `json:"cors,omitempty" yaml:"cors,omitempty"`
	Jwt     Jwt              `json:"jwt,omitempty" yaml:"jwt,omitempty"`
	Captcha Captcha          `json:"captcha,omitempty" yaml:"captcha,omitempty"`
	Log     Log              `json:"log,omitempty" yaml:"log,omitempty"`
	DB      map[string]DB    `json:"db,omitempty" yaml:"db,omitempty"`
	Cache   map[string]Cache `json:"cache,omitempty" yaml:"cache,omitempty"`
	File    map[string]File  `json:"file,omitempty" yaml:"file,omitempty"`
}

func Init(cfgFilePath ...string) {
	_config = &Config{}

	var configPath string
	if len(cfgFilePath) == 0 {
		configPath = "./config.yaml"
	} else {
		configPath = cfgFilePath[0]
	}
	v := viper.New()
	v.SetConfigFile(configPath)
	v.SetConfigType("yaml")
	if err := v.ReadInConfig(); err != nil {
		panic(fmt.Errorf("读取 %s 配置文件错误:	\n", configPath, err))
	}
	if err := v.Unmarshal(_config); err != nil {
		panic(fmt.Errorf("解析 %s.yaml 配置文件错误:	\n", configPath, err))
	}

}

func ServerCfg() Server {
	return _config.Server
}
func CORSCfg() CORS {
	return _config.CORS
}
func JwtCfg() Jwt {
	return _config.Jwt
}
func CaptchaCfg() Captcha {
	return _config.Captcha
}
func LogCfg() Log {
	return _config.Log
}
func DBCfg() map[string]DB {
	return _config.DB
}
func CacheCfg() map[string]Cache {
	return _config.Cache
}
func FileCfg() map[string]File {
	return _config.File
}
