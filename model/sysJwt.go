package model

import (
	"context"
	"errors"
	"github.com/golang-jwt/jwt/v4"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
	"time"
)

type SysJwtBlacklist struct {
	MODEL
	Jwt string `gorm:"type:text;comment:jwt"`
}

func (s SysJwtBlacklist) IsBlack(jwt string) bool {
	// TODO 加上缓存
	core.DB().Where("jwt = ?", jwt).First(&s)
	if s.Jwt == "" {
		return false
	}
	return true
}

type Jwt struct {
	SigningKey []byte
}

var (
	TokenExpired     = errors.New("Token is expired")
	TokenNotValidYet = errors.New("Token not active yet")
	TokenMalformed   = errors.New("That's not even a token")
	TokenInvalid     = errors.New("Couldn't handle this token:")
)

func NewJWT(signingKey string) *Jwt {
	return &Jwt{[]byte(core.Config().JWT.SigningKey)}
}

func (j *Jwt) CreateClaims(baseClaims BaseClaims) CustomClaims {
	bf, _ := utils.ParseDuration(core.Config().JWT.BufferTime)
	ep, _ := utils.ParseDuration(core.Config().JWT.ExpiresTime)
	claims := CustomClaims{
		BaseClaims: baseClaims,
		BufferTime: int64(bf / time.Second), // 缓冲时间1天 缓冲时间内会获得新的token刷新令牌 此时一个用户会存在两个有效令牌 但是前端只留一个 另一个会丢失
		StandardClaims: jwt.StandardClaims{
			NotBefore: time.Now().Unix() - 1000,  // 签名生效时间
			ExpiresAt: time.Now().Add(ep).Unix(), // 过期时间 7天  配置文件
			Issuer:    core.Config().JWT.Issuer,  // 签名的发行者
		},
	}
	return claims
}

func (j *Jwt) CreateToken(claims CustomClaims) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(j.SigningKey)
}

func (j *Jwt) CreateTokenByOldToken(oldToken string, claims CustomClaims) (string, error) {
	// TODO 这里是在向那里查询，可以改成redis吗？
	//v, err, _ := global.GVA_Concurrency_Control.Do("JWT:"+oldToken, func() (interface{}, error) {
	//	return j.CreateToken(claims)
	//})
	//return v.(string), err
	return j.CreateToken(claims)
}

// 解析 token
func (j *Jwt) ParseToken(tokenString string) (*CustomClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (i interface{}, e error) {
		return j.SigningKey, nil
	})
	if err != nil {
		if ve, ok := err.(*jwt.ValidationError); ok {
			if ve.Errors&jwt.ValidationErrorMalformed != 0 {
				return nil, TokenMalformed
			} else if ve.Errors&jwt.ValidationErrorExpired != 0 {
				// Token is expired
				return nil, TokenExpired
			} else if ve.Errors&jwt.ValidationErrorNotValidYet != 0 {
				return nil, TokenNotValidYet
			} else {
				return nil, TokenInvalid
			}
		}
	}
	if token != nil {
		if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
			return claims, nil
		}
		return nil, TokenInvalid

	} else {
		return nil, TokenInvalid
	}
}

// 拉黑 jwt
func (j Jwt) JsonInBlacklist(jwtList SysJwtBlacklist) (err error) {
	err = core.DB().Create(&jwtList).Error
	if err != nil {
		return
	}
	core.Cache().SetDefault(jwtList.Jwt, struct{}{})
	return
}

// 判断 jwt 是否在黑名单内部
func (j *Jwt) IsBlacklist(jwt string) bool {
	// TODO 这里设置的作用
	//_, ok := global.BlackCache.Get(jwt)
	return false
	// err := global.GVA_DB.Where("jwt = ?", jwt).First(&system.JwtBlacklist{}).Error
	// isNotFound := errors.Is(err, gorm.ErrRecordNotFound)
	// return !isNotFound
}

func (j *Jwt) GetRedisJWT(userName string) (redisJWT string, err error) {
	redisJWT, err = core.Redis().Get(context.Background(), userName).Result()
	return redisJWT, err
}

func (j *Jwt) SetRedisJWT(jwt string, userName string) (err error) {
	// 此处过期时间等于jwt过期时间
	dr, err := utils.ParseDuration(core.Config().JWT.ExpiresTime)
	if err != nil {
		return err
	}
	timer := dr
	err = core.Redis().Set(context.Background(), userName, jwt, timer).Err()
	return err
}

func LoadAll() {
	var data []string
	err := core.DB().Model(&SysJwtBlacklist{}).Select("jwt").Find(&data).Error
	if err != nil {
		core.Log().Error("加载数据库jwt黑名单失败!", zap.Error(err))
		return
	}
	for i := 0; i < len(data); i++ {
		// TODO 这里设置的作用
		core.Cache().SetDefault(data[i], struct{}{})
	} // jwt黑名单 加入 BlackCache 中
}
