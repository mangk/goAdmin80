package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/model"
	"strconv"
)

func CasbinHandler() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		waitUse, _ := model.GetClaims(ctx)
		//获取请求的PATH
		obj := ctx.Request.URL.Path
		// 获取请求方法
		act := ctx.Request.Method

		e := model.Casbin{}.Casbin() // 判断策略中是否存在
		var success bool
		for _, aId := range waitUse.AuthorityId {
			sub := strconv.Itoa(aId)
			success, _ = e.Enforce(sub, obj, act)
			if success {
				ctx.Next()
				return
			}
		}
		response.FailWithDetailed(gin.H{}, "权限不足", ctx)
		ctx.Abort()
		return
	}
}
