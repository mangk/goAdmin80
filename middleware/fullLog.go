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
		ctx.Set("__req__", map[string]interface{}{
			"body":     string(data),
			"rawQuery": ctx.Request.URL.RawQuery,
			"path":     ctx.Request.URL.Path,
		})
		ctx.Set("__uuid__", uuid.New().String())
		ctx.Request.Body = io.NopCloser(bytes.NewBuffer(data))
		ctx.Next()
	}
}
