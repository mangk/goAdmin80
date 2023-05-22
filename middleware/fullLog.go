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
		ctx.Set("__req__", map[string]interface{}{
			"body":     string(data),
			"rawQuery": ctx.Request.URL.RawQuery,
			"path":     ctx.Request.URL.Path,
		})
		ctx.Request.Body = io.NopCloser(bytes.NewBuffer(data))
		ctx.Next()
	}
}
