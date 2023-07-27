package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/log"
	"github.com/mangk/goAdmin80/model"
	"go.uber.org/zap"
)

func JwtJsonInBlacklist(ctx *gin.Context) {
	token := ctx.Request.Header.Get("Authorization")
	token = token[7:]

	jwt := model.SysJwtBlacklist{Jwt: token}
	err := model.Jwt{}.JsonInBlacklist(jwt)
	if err != nil {
		log.Log().Error("jwt作废失败!", zap.Error(err))
		response.FailWithMessage("jwt作废失败", ctx)
		return
	}
	response.OkWithMessage("jwt作废成功", ctx)
}
