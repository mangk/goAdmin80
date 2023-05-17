package core

import (
	"fmt"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
	"github.com/mangk/goAdmin80/core/config"
	"github.com/songzhibin97/gkit/cache/local_cache"
	"github.com/spf13/viper"
	"go.uber.org/zap"
	"gorm.io/gorm"
	"log"
)

var _core *Core

type Core struct {
	config config.Config

	dbList    map[string]*gorm.DB
	redisList map[string]*redis.Client
	gin       *gin.Engine
	viper     *viper.Viper
	log       *zap.Logger

	blackCache local_cache.Cache

	// 跨域配置 TODO 这里是否有必要开放
	cors config.CORS `mapstructure:"cors" json:"cors" yaml:"cors"`
}

func New(path string) *Core {
	_core = &Core{
		dbList:    make(map[string]*gorm.DB),
		redisList: make(map[string]*redis.Client),
	}

	// 加载配置文件
	_core.initConfig(path)

	// 初始化日志
	_core.initLog()

	// 初始化数据库服务
	_core.initDB()

	// 初始化缓存服务
	_core.initRedis()

	// 初始化本地缓存服务
	_core.initCache()

	// 初始化 http 服务器
	switch Config().System.Env {
	case "debug", "test":
		gin.SetMode(gin.DebugMode)
	default:
		gin.SetMode(gin.ReleaseMode)
	}
	_core.gin = gin.New()
	_core.gin.Delims("{[{", "}]}")

	return _core
}

func HttpEngine() *gin.Engine {
	if _core == nil {
		panic("no instance")
	}
	return _core.gin
}

func (c *Core) ListenAndServe() {
	if err := endless.ListenAndServe(fmt.Sprintf("%s:%d", Config().System.Host, Config().System.Port), c.gin); err != nil {
		log.Fatalf("[Project start] error: %+v", err)
	}
	log.Println("Project EXIT!")
}
