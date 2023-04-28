package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
)

func MenuAll(ctx *gin.Context) {
	var param struct {
		Tree       bool `json:"tree" form:"tree"` // 是否加载为树状结构
		LoadSystem bool `json:"loadSystem" form:"loadSstem"`
	}
	if err := ctx.ShouldBindJSON(&param); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	menuList, err := model.SysMenu{}.GetAllMenu(param.Tree, param.LoadSystem)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(response.PageResult{
		List:     menuList,
		Total:    -1,
		Page:     1,
		PageSize: -1,
	}, "获取成功", ctx)
}

func MenuGetTreeByAuthorityId(ctx *gin.Context) {
	menus, err := model.SysMenu{}.GetAllTreeMenuByAuthorityId(model.GetUserAuthorityId(ctx), true)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	if menus == nil {
		menus = []model.SysMenu{}
	}
	response.OkWithDetailed(menus, "获取成功", ctx)
}

func MenuByUser(ctx *gin.Context) {
	var param struct {
		Tree bool `json:"tree" form:"tree"` // 是否加载为树状结构
	}
	if err := ctx.ShouldBindJSON(&param); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	u, err := model.GetClaims(ctx)
	if err != nil {
		// TODO 错误处理
	}

	menus, err := model.SysMenu{}.GetMenuByUserId(u.BaseClaims.ID, param.Tree)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(menus, "获取成功", ctx)
}

func MenuByAuthority(ctx *gin.Context) {
	var param struct {
		AuthorityId int `json:"authorityId" form:"authorityId"` // 角色ID
	}
	if err := ctx.ShouldBindJSON(&param); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(param, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	menus, err := model.SysMenu{}.GetAllTreeMenuByAuthorityId([]int{param.AuthorityId}, false)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
		response.FailWithDetailed(menus, "获取失败", ctx)
		return
	}
	response.OkWithDetailed(menus, "获取成功", ctx)
}

func MenuById(ctx *gin.Context) {
	var idInfo struct {
		ID int `json:"id" form:"id"` // 主键ID
	}
	if err := ctx.ShouldBindJSON(&idInfo); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(idInfo, utils.IdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	menu, err := model.SysMenu{}.GetBaseMenuById(idInfo.ID)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(menu, "获取成功", ctx)
}

func MenuAdd(ctx *gin.Context) {
	var menu model.SysMenu
	if err := ctx.ShouldBindJSON(&menu); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(menu, utils.MenuVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(menu.Meta, utils.MenuMetaVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := (model.SysMenu{}).AddBaseMenu(menu); err != nil {
		core.Log().Error("添加失败!", zap.Error(err))
		response.FailWithMessage("添加失败", ctx)
		return
	}
	response.OkWithMessage("添加成功", ctx)
}

func MenuAddAuthority(ctx *gin.Context) {
	var authorityMenu struct {
		Menus       []model.SysMenu `json:"menus"`
		AuthorityId int             `json:"authorityId"` // 角色ID
	}
	if err := ctx.ShouldBindJSON(&authorityMenu); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(authorityMenu, utils.AuthorityIdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := (model.SysAuthorityMenu{}).SaveAuthority(authorityMenu.AuthorityId, authorityMenu.Menus); err != nil {
		core.Log().Error("添加失败!", zap.Error(err))
		response.FailWithMessage("添加失败", ctx)
	} else {
		response.OkWithMessage("添加成功", ctx)
	}
}

func MenuDelete(ctx *gin.Context) {
	var menu struct {
		ID int `json:"id" form:"id"` // 主键ID
	}
	if err := ctx.ShouldBindJSON(&menu); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(menu, utils.IdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := (model.SysMenu{}).DeleteBaseMenu(menu.ID); err != nil {
		core.Log().Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败:"+err.Error(), ctx)
		return
	}
	response.OkWithMessage("删除成功", ctx)
}

func MenuUpdate(ctx *gin.Context) {
	var menu model.SysMenu

	if err := ctx.ShouldBindJSON(&menu); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := utils.Verify(menu, utils.MenuVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := utils.Verify(menu.Meta, utils.MenuMetaVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := (model.SysMenu{}).UpdateBaseMenu(menu); err != nil {
		core.Log().Error("更新失败!", zap.Error(err))
		response.FailWithMessage("更新失败", ctx)
		return
	}
	response.OkWithMessage("更新成功", ctx)
}
