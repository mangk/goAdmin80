package handler

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/cache"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/log"
	"github.com/mojocn/base64Captcha"
	"go.uber.org/zap"
	"time"
)

var store = NewDefaultRedisStore()

func Captcha(ctx *gin.Context) {
	cfg := config.CaptchaCfg()

	// 判断验证码是否开启
	key := ctx.ClientIP()
	v, ok := cache.Cache().Get(key)

	if !ok {
		cache.Cache().Set(key, 1, time.Second*time.Duration(cfg.OpenCaptchaTimeOut))
	}

	var oc bool
	if cfg.OpenCaptcha == 0 || cfg.OpenCaptcha < interfaceToInt(v) {
		oc = true
	}
	driver := base64Captcha.NewDriverDigit(cfg.ImgHeight, cfg.ImgWidth, cfg.KeyLong, 0.7, 80)
	cp := base64Captcha.NewCaptcha(driver, store.UseWithCtx(ctx))
	id, b64s, _, err := cp.Generate()
	if err != nil {
		log.ZapLog().Error("验证码获取失败!", zap.Error(err))
		response.FailWithMessage("验证码获取失败", ctx)
		return
	}
	response.OkWithDetailed(map[string]interface{}{
		"captchaId":     id,
		"picPath":       b64s,
		"captchaLength": cfg.KeyLong,
		"openCaptcha":   oc,
	}, "验证码获取成功", ctx)
}

func interfaceToInt(v interface{}) (i int) {
	switch v := v.(type) {
	case int:
		i = v
	default:
		i = 0
	}
	return
}

func NewDefaultRedisStore() *RedisStore {
	return &RedisStore{
		Expiration: time.Second * 180,
		PreKey:     "CAPTCHA_",
	}
}

type RedisStore struct {
	Expiration time.Duration
	PreKey     string
	Context    context.Context
}

func (rs *RedisStore) UseWithCtx(ctx context.Context) base64Captcha.Store {
	rs.Context = ctx
	return rs
}

func (rs *RedisStore) Set(id string, value string) error {
	err := cache.Redis().Set(rs.Context, rs.PreKey+id, value, rs.Expiration).Err()
	if err != nil {
		log.ZapLog().Error("RedisStoreSetError!", zap.Error(err))
	}
	return err
}

func (rs *RedisStore) Get(key string, clear bool) string {
	val, err := cache.Redis().Get(rs.Context, key).Result()
	if err != nil {
		log.ZapLog().Error("RedisStoreGetError!", zap.Error(err))
		return ""
	}
	if clear {
		err := cache.Redis().Del(rs.Context, key).Err()
		if err != nil {
			log.ZapLog().Error("RedisStoreClearError!", zap.Error(err))
			return ""
		}
	}
	return val
}

func (rs *RedisStore) Verify(id, answer string, clear bool) bool {
	key := rs.PreKey + id
	v := rs.Get(key, clear)
	return v == answer
}
