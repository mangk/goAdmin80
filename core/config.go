package core

import (
	"fmt"
	"github.com/mangk/goAdmin80/core/config"
	"github.com/spf13/viper"
)

func (c *Core) initConfig(path ...string) {
	var configPath string
	if len(path) == 0 {
		// TODO 这里增加针对命令行参数配置文件路径的处理，并且优先级要高于代码中写死的配置
		configPath = "./config.yaml"
	} else {
		configPath = path[0]
	}
	v := viper.New()
	v.SetConfigFile(configPath)
	v.SetConfigType("yaml")
	if err := v.ReadInConfig(); err != nil {
		panic(fmt.Errorf("读取 %s 配置文件错误:	\n", configPath, err))
	}
	if err := v.Unmarshal(&c.config); err != nil {
		panic(fmt.Errorf("解析 %s.yaml 配置文件错误:	\n", configPath, err))
	}

	if c.config.System.FrontRouterPrefix == "" {
		c.config.System.FrontRouterPrefix = "_"
	}

	// TODO 这里是否做后台可以更改配置的功能
	//v.WatchConfig()
	//
	//v.OnConfigChange(func(e fsnotify.Event) {
	//	fmt.Println("config file changed:", e.Name)
	//	if err = v.Unmarshal(&global.GVA_CONFIG); err != nil {
	//		fmt.Println(err)
	//	}
	//})
	//if err = v.Unmarshal(&global.GVA_CONFIG); err != nil {
	//	fmt.Println(err)
	//}
}

func Config() config.Config {
	return _core.config
}

func CROSConfig() config.CORS {
	return _core.cors
}
