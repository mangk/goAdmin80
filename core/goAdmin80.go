package core

import (
	"fmt"
	"github.com/fvbock/endless"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/config"
	"log"
)

const (
	ModuleDB uint8 = iota + 1
	ModuleCache
	ModuleLog
	ModuleAdmin
	ModuleFront
)

// 系统实例
var _g80 *GoAdmin80

type GoAdmin80 struct {
	httpClient                                                              *gin.Engine
	initialized, moduleDB, moduleCache, moduleLog, moduleAdmin, moduleFront bool
}

func New(configPath string) *GoAdmin80 {
	if _g80 == nil {
		config.Init(configPath)

		switch config.ServerCfg().Env {
		case "debug", "test":
			gin.SetMode(gin.DebugMode)
		default:
			gin.SetMode(gin.ReleaseMode)
		}

		// TODO 日志适配器能不能后置使用
		//adapter := NewZapLoggerAdapter(_core.log, "_gin")
		//gin.DefaultWriter = adapter
		//gin.DefaultErrorWriter = adapter
		ginClient := gin.New()
		ginClient.Use(gin.Logger(), gin.Recovery())

		_g80 = &GoAdmin80{httpClient: ginClient}
	}

	// 等待模块初始化队列内都完成
	if modulesInitChannel != nil {
		close(modulesInitChannel)
		for true {
			v, ok := <-modulesInitChannel
			if !ok {
				break
			}
			switch v.Init() {
			case ModuleDB:
				_g80.moduleDB = true
			case ModuleCache:
				_g80.moduleCache = true
			case ModuleLog:
				_g80.moduleLog = true
			case ModuleFront:
				_g80.moduleFront = true
			case ModuleAdmin:
				_g80.moduleAdmin = true
			default:
			}
		}
	}

	return _g80
}

func HttpEngine() *gin.Engine {
	return _g80.httpClient
}

func (g *GoAdmin80) ListenAndServer() {
	// TODO 判断是否从 endless 启动
	if err := endless.ListenAndServe(fmt.Sprintf("%s:%d", config.ServerCfg().Host, config.ServerCfg().Port), _g80.httpClient); err != nil {
		log.Fatalf("Project START error: %+v", err)
	}
	log.Printf("Project EXIT!")
}

// ---------------------------------------------------------------------------------------------------------------------
// 用来储存等待初始化的系统模块
var modulesInitChannel chan Module

type Module interface {
	Init() uint8 // 模块初始化方法
}

func ModuleAdd(module Module) {
	if modulesInitChannel == nil {
		modulesInitChannel = make(chan Module, 100)
	}
	modulesInitChannel <- module
}