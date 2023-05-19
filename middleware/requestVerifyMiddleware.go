package middleware

import (
	"errors"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/response"
	"io"
	"strings"
)

const RK = "_goAdmin80Request_"

func RequestVerifyMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		req := request.CRUDRequest{}
		if err := ctx.ShouldBindJSON(&req); err != nil {
			if !errors.Is(err, io.EOF) {
				response.FailWithDetailed(err.Error(), "请求出错", ctx)
				ctx.Abort()
				return
			}
		}
		if req.Page == 0 {
			req.Page = 1
		}
		if req.PageSize == 0 {
			req.PageSize = 20
		}
		if req.PageSize > 1000 {
			req.PageSize = 1000
		}
		if req.Id != "" {
			for _, v := range strings.Split(req.Id, ",") {
				if strings.Index(v, ",") != -1 {
					response.FailWithMessage("读取数据 ID 错误", ctx)
				}
				if v != "" {
					req.Ids = append(req.Ids, v)
				}
			}
		}
		// TODO 增加 Verify
		ctx.Set(RK, req)
		ctx.Next()
	}
}
