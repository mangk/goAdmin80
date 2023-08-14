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

func ApiGetById(ctx *gin.Context) {
	var id struct {
		ID int `json:"id" form:"id"` // 主键ID
	}
	if err := ctx.ShouldBindJSON(&id); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if api, err := (model.SysApi{}).GetById(id.ID); err == nil {
		response.OkWithDetailed(api, "获取成功", ctx)
	} else {
		log.ZapLog().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
	}
}

func ApiCreate(ctx *gin.Context) {
	var api model.SysApi

	if err := ctx.ShouldBindJSON(&api); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(api, utils.ApiVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := api.Create(); err != nil {
		log.ZapLog().Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败!"+err.Error(), ctx)
		return
	}

	response.OkWithMessage("创建成功", ctx)
}

func ApiUpdate(ctx *gin.Context) {
	var api model.SysApi

	if err := ctx.ShouldBindJSON(&api); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(api, utils.ApiVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := api.Update(); err != nil {
		log.ZapLog().Error("修改失败!", zap.Error(err))
		response.FailWithMessage("修改失败!"+err.Error(), ctx)
		return
	}

	response.OkWithMessage("修改成功", ctx)
}

func ApiDeleteByIds(ctx *gin.Context) {
	var ids struct {
		Ids []int `json:"ids"`
	}

	if err := ctx.ShouldBindJSON(&ids); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(ids, utils.IdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	if err := (model.SysApi{}).Delete(ids.Ids); err != nil {
		log.ZapLog().Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败!"+err.Error(), ctx)
		return
	}

	response.OkWithMessage("删除成功", ctx)
}

func ApiAll(ctx *gin.Context) {
	records, err := model.SysApi{}.All()

	if err != nil {
		log.ZapLog().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(records, "获取成功", ctx)
}

func ApiPage(ctx *gin.Context) {
	var pageInfo struct {
		model.SysApi
		request.PageInfo
		OrderKey string `json:"orderKey"` // 排序
		Desc     bool   `json:"desc"`     // 排序方式:升序false(默认)|降序true
	}
	if err := ctx.ShouldBindJSON(&pageInfo); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(pageInfo.PageInfo, utils.PageInfoVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	list, total, err := model.SysApi{}.GetAPIInfoList(pageInfo.SysApi, pageInfo.PageInfo, pageInfo.OrderKey, pageInfo.Desc)
	if err != nil {
		log.ZapLog().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(response.PageResult{
		List:     list,
		Total:    total,
		Page:     pageInfo.Page,
		PageSize: pageInfo.PageSize,
	}, "获取成功", ctx)
}
