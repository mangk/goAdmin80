package middleware

import (
	"bytes"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"io"
)

func FullHttpLog() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		data, _ := ctx.GetRawData()
		ctx.Set("_trace", uuid.New().String())
		ctx.Set("_req", map[string]interface{}{
			"_body":     string(data),
			"_rawQuery": ctx.Request.URL.RawQuery,
			"_path":     ctx.Request.URL.Path,
		})
		ctx.Request.Body = io.NopCloser(bytes.NewBuffer(data))
		ctx.Next()
	}
}
