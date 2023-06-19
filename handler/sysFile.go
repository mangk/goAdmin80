package handler

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/handler/upload"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
	"io"
	"mime/multipart"
	"strconv"
	"strings"
)

func FileGetUploadLimit(ctx *gin.Context) {
	uploadCfg := core.Config().File
	resp := gin.H{}
	for driverName, cfg := range uploadCfg {
		resp[driverName] = gin.H{"name": cfg.Name, "limit": cfg.Limit * 1024, "driver": driverName}
	}
	response.OkWithData(resp, ctx)
}

func FileUpload(ctx *gin.Context) {
	var file model.SysFileUploadAndDownload
	noSave := ctx.DefaultQuery("noSave", "0")
	driver := ctx.DefaultQuery("driver", "default")
	_, header, err := ctx.Request.FormFile("file")
	if err != nil {
		core.Log().Error("接收文件失败!", zap.Error(err))
		response.FailWithMessage("接收文件失败", ctx)
		return
	}
	file, err = uploadFile(header, noSave, driver) // 文件上传后拿到文件路径
	if err != nil {
		core.Log().Error("修改数据库链接失败!", zap.Error(err))
		response.FailWithMessage("修改数据库链接失败", ctx)
		return
	}
	response.OkWithDetailed(file, "上传成功", ctx)
}

func FileList(ctx *gin.Context) {
	var pageInfo request.PageInfo
	err := ctx.ShouldBindJSON(&pageInfo)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	list, total, err := model.SysFileUploadAndDownload{}.GetFileRecordInfoList(pageInfo)
	if err != nil {
		core.Log().Error("获取失败!", zap.Error(err))
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

func FileDelete(c *gin.Context) {
	var file model.SysFileUploadAndDownload
	err := c.ShouldBindJSON(&file)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	if err := file.DeleteFile(file); err != nil {
		core.Log().Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", c)
		return
	}
	response.OkWithMessage("删除成功", c)
}

func FileEditName(ctx *gin.Context) {
	var file model.SysFileUploadAndDownload
	err := ctx.ShouldBindJSON(&file)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = file.EditFileName(file)
	if err != nil {
		core.Log().Error("编辑失败!", zap.Error(err))
		response.FailWithMessage("编辑失败", ctx)
		return
	}
	response.OkWithMessage("编辑成功", ctx)
}

func FileBreakpointContinue(ctx *gin.Context) {
	fileMd5 := ctx.Request.FormValue("fileMd5")
	fileName := ctx.Request.FormValue("fileName")
	chunkMd5 := ctx.Request.FormValue("chunkMd5")
	chunkNumber, _ := strconv.Atoi(ctx.Request.FormValue("chunkNumber"))
	chunkTotal, _ := strconv.Atoi(ctx.Request.FormValue("chunkTotal"))
	_, FileHeader, err := ctx.Request.FormFile("file")
	if err != nil {
		core.Log().Error("接收文件失败!", zap.Error(err))
		response.FailWithMessage("接收文件失败", ctx)
		return
	}
	f, err := FileHeader.Open()
	if err != nil {
		core.Log().Error("文件读取失败!", zap.Error(err))
		response.FailWithMessage("文件读取失败", ctx)
		return
	}
	defer func(f multipart.File) {
		err := f.Close()
		if err != nil {
			fmt.Println(err)
		}
	}(f)
	cen, _ := io.ReadAll(f)
	if !utils.CheckMd5(cen, chunkMd5) {
		core.Log().Error("检查md5失败!", zap.Error(err))
		response.FailWithMessage("检查md5失败", ctx)
		return
	}
	file, err := model.SysFileUploadAndDownload{}.FindOrCreateFile(fileMd5, fileName, chunkTotal)
	if err != nil {
		core.Log().Error("查找或创建记录失败!", zap.Error(err))
		response.FailWithMessage("查找或创建记录失败", ctx)
		return
	}
	pathC, err := utils.BreakPointContinue(cen, fileName, chunkNumber, chunkTotal, fileMd5)
	if err != nil {
		core.Log().Error("断点续传失败!", zap.Error(err))
		response.FailWithMessage("断点续传失败", ctx)
		return
	}

	if err = (model.SysFileUploadAndDownload{}).CreateFileChunk(file.ID, pathC, chunkNumber); err != nil {
		core.Log().Error("创建文件记录失败!", zap.Error(err))
		response.FailWithMessage("创建文件记录失败", ctx)
		return
	}
	response.OkWithMessage("切片创建成功", ctx)
}

func FileFind(c *gin.Context) {
	fileMd5 := c.Query("fileMd5")
	fileName := c.Query("fileName")
	chunkTotal, _ := strconv.Atoi(c.Query("chunkTotal"))
	file, err := model.SysFileUploadAndDownload{}.FindOrCreateFile(fileMd5, fileName, chunkTotal)
	if err != nil {
		core.Log().Error("查找失败!", zap.Error(err))
		response.FailWithMessage("查找失败", c)
	} else {
		response.OkWithDetailed(file, "查找成功", c)
	}
}

func FileBreakpointContinueFinish(ctx *gin.Context) {
	fileMd5 := ctx.Query("fileMd5")
	fileName := ctx.Query("fileName")
	filePath, err := utils.MakeFile(fileName, fileMd5)
	if err != nil {
		core.Log().Error("文件创建失败!", zap.Error(err))
		response.FailWithDetailed(filePath, "文件创建失败", ctx)
	} else {
		response.OkWithDetailed(filePath, "文件创建成功", ctx)
	}
}

func FileRemoveChunk(c *gin.Context) {
	var file model.ExaFile
	err := c.ShouldBindJSON(&file)
	if err != nil {
		response.FailWithMessage(err.Error(), c)
		return
	}
	err = utils.RemoveChunk(file.FileMd5)
	if err != nil {
		core.Log().Error("缓存切片删除失败!", zap.Error(err))
		return
	}
	err = model.SysFileUploadAndDownload{}.DeleteFileChunk(file.FileMd5, file.FilePath)
	if err != nil {
		core.Log().Error(err.Error(), zap.Error(err))
		response.FailWithMessage(err.Error(), c)
		return
	}
	response.OkWithMessage("缓存切片删除成功", c)
}

func uploadFile(header *multipart.FileHeader, noSave, driver string) (file model.SysFileUploadAndDownload, err error) {
	oss := upload.NewOss(driver)
	filePath, key, uploadErr := oss.UploadFile(header)
	if uploadErr != nil {
		panic(err)
	}
	if noSave == "0" {
		s := strings.Split(header.Filename, ".")
		f := model.SysFileUploadAndDownload{
			Url:  filePath,
			Name: header.Filename,
			Tag:  s[len(s)-1],
			Key:  key,
		}
		return f, model.SysFileUploadAndDownload{}.Upload(f)
	}
	return
}
