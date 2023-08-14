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

func OperationRecordCreate(ctx *gin.Context) {
	var sysOperationRecord model.SysOperationRecord
	err := ctx.ShouldBindJSON(&sysOperationRecord)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = sysOperationRecord.Create()
	if err != nil {
		log.ZapLog().Error("创建失败!", zap.Error(err))
		response.FailWithMessage("创建失败", ctx)
		return
	}
	response.OkWithMessage("创建成功", ctx)
}

func OperationRecordDelete(ctx *gin.Context) {
	var IDS struct {
		Ids []int `json:"ids" form:"ids"`
	}
	err := ctx.ShouldBindJSON(&IDS)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = model.SysOperationRecord{}.DeleteSysOperationRecordByIds(IDS.Ids)
	if err != nil {
		log.ZapLog().Error("批量删除失败!", zap.Error(err))
		response.FailWithMessage("批量删除失败", ctx)
		return
	}
	response.OkWithMessage("批量删除成功", ctx)
}

func OperationRecordGetById(ctx *gin.Context) {
	var sysOperationRecord model.SysOperationRecord
	err := ctx.ShouldBindQuery(&sysOperationRecord)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = utils.Verify(sysOperationRecord, utils.IdVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	reSysOperationRecord, err := sysOperationRecord.GetSysOperationRecord(sysOperationRecord.ID)
	if err != nil {
		log.ZapLog().Error("查询失败!", zap.Error(err))
		response.FailWithMessage("查询失败", ctx)
		return
	}
	response.OkWithDetailed(gin.H{"reSysOperationRecord": reSysOperationRecord}, "查询成功", ctx)
}

func OperationRecordPage(ctx *gin.Context) {
	var pageInfo struct {
		model.SysOperationRecord
		request.PageInfo
	}

	err := ctx.ShouldBindQuery(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	list, total, err := model.SysOperationRecord{}.GetSysOperationRecordInfoList(pageInfo)
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
