package response

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"go.uber.org/zap"
	"net/http"
)

type Response struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
	Msg  string      `json:"msg"`
}

const (
	ERROR   = -1
	SUCCESS = 0
)

func Result(httpCode, systemCode int, data interface{}, msg string, c *gin.Context) {
	// 开始时间
	resp := Response{
		systemCode,
		data,
		msg,
	}
	c.JSON(httpCode, resp)
	if trace, has := c.Get("_trace"); has {
		req, _ := c.Get("__req__")
		core.Log().WithOptions(zap.WithCaller(false)).With(zap.Namespace("_trace")).Info("", zap.String("method", c.Request.Method), zap.Any("req", req), zap.Any("resp", resp), zap.Any("id", trace))
	}
}

func Ok(c *gin.Context) {
	Result(http.StatusOK, SUCCESS, map[string]interface{}{}, "操作成功", c)
}

func OkWithMessage(message string, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, map[string]interface{}{}, message, c)
}

func OkWithData(data interface{}, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, data, "查询成功", c)
}

func OkWithDetailed(data interface{}, message string, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, data, message, c)
}

func Fail(c *gin.Context, httpCode ...int) {
	hc := http.StatusOK
	if len(httpCode) == 1 {
		hc = httpCode[0]
	}
	Result(hc, ERROR, map[string]interface{}{}, "操作失败", c)
}

func FailWithMessage(message string, c *gin.Context, httpCode ...int) {
	hc := http.StatusOK
	if len(httpCode) == 1 {
		hc = httpCode[0]
	}
	Result(hc, ERROR, map[string]interface{}{}, message, c)
}

func FailWithDetailed(data interface{}, message string, c *gin.Context, httpCode ...int) {
	hc := http.StatusOK
	if len(httpCode) == 1 {
		hc = httpCode[0]
	}
	Result(hc, ERROR, data, message, c)
}

type PageResult struct {
	List     interface{} `json:"list"`
	Total    int64       `json:"total"`
	Page     int         `json:"page"`
	PageSize int         `json:"pageSize"`
}
