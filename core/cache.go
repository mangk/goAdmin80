package core

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/mangk/goAdmin80/utils"
	"github.com/songzhibin97/gkit/cache/local_cache"
)

func Redis(driver ...string) *redis.Client {
	d := "default"
	if len(driver) == 1 {
		d = driver[0]
	}

	if cache, ok := _core.redisList[d]; ok {
		return cache
	}
	Log().Panic(fmt.Sprintf("[%s]redis不存在", driver))

	return nil
}

func Cache() local_cache.Cache {
	return _core.blackCache
}

func (c *Core) initRedis() {
	for name, redisCfg := range c.config.Redis {
		client := redis.NewClient(&redis.Options{
			Addr:     redisCfg.Addr,
			Password: redisCfg.Password, // no password set
			DB:       redisCfg.DB,       // use default DB
		})
		_, err := client.Ping(context.Background()).Result()
		if err != nil {
			panic(fmt.Sprintf("[%s]Redis 初始化失败：%+v", name, err))
		}
		c.redisList[name] = client
	}
}

func (c *Core) initCache() {
	dr, err := utils.ParseDuration(Config().JWT.ExpiresTime)
	if err != nil {
		panic(err)
	}
	_, err = utils.ParseDuration(Config().JWT.BufferTime)
	if err != nil {
		panic(err)
	}
	c.blackCache = local_cache.NewCache(
		local_cache.SetDefaultExpire(dr),
	)
}
