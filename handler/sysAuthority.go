package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/log"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
)

func AuthorityPage(c *gin.Context) {
	var pageInfo request.PageInfo

	if err := c.ShouldBindJSON(&pageInfo); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := utils.Verify(pageInfo, utils.PageInfoVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	list, total, err := model.SysAuthority{}.GetAuthorityInfoList(pageInfo)
	if err != nil {
		log.Log().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败"+err.Error(), c)
		return
	}
	response.OkWithDetailed(response.PageResult{
		List:     list,
		Total:    total,
		Page:     pageInfo.Page,
		PageSize: pageInfo.PageSize,
	}, "获取成功", c)
}

func AuthorityCreate(ctx *gin.Context) {
	var authority model.SysAuthority

	if err := ctx.ShouldBindJSON(&authority); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(authority, utils.AuthorityVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if authBack, err := (model.SysAuthority{}).CreateAuthority(authority); err != nil {
		log.Log().Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败"+err.Error(), ctx)
	} else {
		// TODO 这里关注一下创建角色时的默认值
		//_ = model.SysMenu{}.AddMenuAuthority(defaultMenu(), authority.AuthorityId)
		_ = model.Casbin{}.UpdateCasbin(authority.AuthorityId, defaultCasbin())
		response.OkWithDetailed(authBack, "创建成功", ctx)
	}
}

func AuthorityDelete(ctx *gin.Context) {
	var authority model.SysAuthority
	if err := ctx.ShouldBindJSON(&authority); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(authority, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := (model.SysAuthority{}).DeleteAuthority(&authority); err != nil { // 删除角色之前需要判断是否有用户正在使用此角色
		log.Log().Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败"+err.Error(), ctx)
		return
	}
	response.OkWithMessage("删除成功", ctx)
}

func AuthorityUpdate(ctx *gin.Context) {
	var auth model.SysAuthority

	if err := ctx.ShouldBindJSON(&auth); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := utils.Verify(auth, utils.AuthorityVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	authority, err := model.SysAuthority{}.UpdateAuthority(auth)
	if err != nil {
		log.Log().Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败"+err.Error(), ctx)
		return
	}
	response.OkWithDetailed(authority, "更新成功", ctx)
}

func AuthoritySetData(c *gin.Context) {
	var auth model.SysAuthority

	if err := c.ShouldBindJSON(&auth); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}

	if err := utils.Verify(auth, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err := model.SysAuthority{}.SetDataAuthority(auth)
	if err != nil {
		log.Log().Error("设置失败!", zap.Error(err))
		response.FailWithMessage("设置失败"+err.Error(), c)
		return
	}
	response.OkWithMessage("设置成功", c)
}

func defaultCasbin() []model.CasbinInfo {
	return []model.CasbinInfo{
		{Path: "/menu/getMenu", Method: "POST"},
		{Path: "/jwt/jsonInBlacklist", Method: "POST"},
		{Path: "/base/login", Method: "POST"},
		{Path: "/user/admin_register", Method: "POST"},
		{Path: "/user/changePassword", Method: "POST"},
		{Path: "/user/setUserAuthority", Method: "POST"},
		{Path: "/user/setUserInfo", Method: "PUT"},
		{Path: "/user/getUserInfo", Method: "GET"},
	}
}
