package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/response"
)

func SysInfo(ctx *gin.Context) {
	data := gin.H{}
	data["sysName"] = core.Config().System.Name
	response.OkWithData(data, ctx)
}
