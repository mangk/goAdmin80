package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
)

func CasbinUpdate(ctx *gin.Context) {
	var cmr struct {
		AuthorityId int                `json:"authorityId"` // 权限id
		CasbinInfos []model.CasbinInfo `json:"casbinInfos"`
	}

	if err := ctx.ShouldBindJSON(&cmr); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := utils.Verify(cmr, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err := model.Casbin{}.UpdateCasbin(cmr.AuthorityId, cmr.CasbinInfos)
	if err != nil {
		core.Log().Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", ctx)
		return
	}
	response.OkWithMessage("更新成功", ctx)
}

func CasbinGetPolicyPathByAuthorityId(ctx *gin.Context) {
	var casbin struct {
		AuthorityId int                `json:"authorityId"` // 权限id
		CasbinInfos []model.CasbinInfo `json:"casbinInfos"`
	}
	err := ctx.ShouldBindJSON(&casbin)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = utils.Verify(casbin, utils.AuthorityIdVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	paths := model.Casbin{}.GetPolicyPathByAuthorityId(casbin.AuthorityId)
	response.OkWithDetailed(paths, "获取成功", ctx)
}
