package middleware

import (
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 我们这里jwt鉴权取头部信息 x-token 登录时回返回token信息 这里前端需要把token存储到cookie或者本地localStorage中 不过需要跟后端协商过期时间 可以约定刷新令牌或者重新登录
		token := c.Request.Header.Get("Authorization")
		if token == "" {
			response.FailWithDetailed(gin.H{"reload": true}, "未登录或非法访问", c, 401)
			c.Abort()
			return
		}

		token = token[7:]

		if (model.SysJwtBlacklist{}.IsBlack(token)) {
			response.FailWithDetailed(gin.H{"reload": true}, "您的帐户异地登陆或令牌失效", c, 401)
			c.Abort()
			return
		}
		j := model.NewJWT(core.Config().JWT.SigningKey)
		// parseToken 解析token包含的信息
		claims, err := j.ParseToken(token)
		if err != nil {
			if err == model.TokenExpired {
				response.FailWithDetailed(gin.H{"reload": true}, "授权已过期", c, 401)
				c.Abort()
				return
			}
			response.FailWithDetailed(gin.H{"reload": true}, err.Error(), c, 401)
			c.Abort()
			return
		}

		// 已登录用户被管理员禁用 需要使该用户的jwt失效 此处比较消耗性能 如果需要 请自行打开
		// 用户被删除的逻辑 需要优化 此处比较消耗性能 如果需要 请自行打开

		//if user, err := userService.FindUserByUuid(claims.UUID.String()); err != nil || user.Enable == 2 {
		//	_ = jwtService.JwtJsonInBlacklist(system.JwtBlacklist{Jwt: token})
		//	response.FailWithDetailed(gin.H{"reload": true}, err.Error(), c)
		//	c.Abort()
		//}

		// TODO 这里是 token 续期？
		if claims.ExpiresAt-time.Now().Unix() < claims.BufferTime {
			dr, _ := utils.ParseDuration(core.Config().JWT.ExpiresTime)
			claims.ExpiresAt = time.Now().Add(dr).Unix()
			newToken, _ := j.CreateTokenByOldToken(token, *claims)
			newClaims, _ := j.ParseToken(newToken)
			c.Header("new-token", newToken)
			c.Header("new-expires-at", strconv.FormatInt(newClaims.ExpiresAt, 10))
			if core.Config().System.UseMultipoint {
				RedisJwtToken, err := j.GetRedisJWT(newClaims.Username)
				if err != nil {
					core.Log().Error("get redis jwt failed", zap.Error(err))
				} else { // 当之前的取成功时才进行拉黑操作
					_ = j.JsonInBlacklist(model.SysJwtBlacklist{Jwt: RedisJwtToken})
				}
				// 无论如何都要记录当前的活跃状态
				_ = j.SetRedisJWT(newToken, newClaims.Username)
			}
		}
		c.Set("claims", claims)
		c.Next()
	}
}
