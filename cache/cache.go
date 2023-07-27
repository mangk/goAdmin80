package cache

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/utils"
	"github.com/songzhibin97/gkit/cache/local_cache"
)

var _blackCache local_cache.Cache
var _redisList map[string]*redis.Client

func init() {
	core.ModuleAdd(c{})
}

type c struct {
}

func (c c) Init() uint8 {
	// 初始化redis
	for name, redisCfg := range config.CacheCfg() {
		client := redis.NewClient(&redis.Options{
			Addr:     redisCfg.Addr,
			Password: redisCfg.Password, // no password set
			DB:       redisCfg.DB,       // use default DB
		})
		_, err := client.Ping(context.Background()).Result()
		if err != nil {
			panic(fmt.Sprintf("[%s]Redis 初始化失败：%+v", name, err))
		}
		_redisList[name] = client
	}

	// 初始化程序缓存
	dr, err := utils.ParseDuration(config.JwtCfg().ExpiresTime)
	if err != nil {
		panic(err)
	}
	_, err = utils.ParseDuration(config.JwtCfg().BufferTime)
	if err != nil {
		panic(err)
	}
	_blackCache = local_cache.NewCache(
		local_cache.SetDefaultExpire(dr),
	)
	return core.ModuleCache
}

func Redis(driver ...string) *redis.Client {
	d := "default"
	if len(driver) == 1 {
		d = driver[0]
	}

	if cache, ok := _redisList[d]; ok {
		return cache
	}
	panic(fmt.Sprintf("[%s]redis不存在", driver))

	return nil
}

func Cache() local_cache.Cache {
	return _blackCache
}
