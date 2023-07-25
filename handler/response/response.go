package response

import (
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"go.uber.org/zap"
	"net/http"
	"time"
)

type Response struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
	Msg  string      `json:"msg"`
	T    int64       `json:"t"`
}

const (
	ERROR   = -1
	SUCCESS = 0
)

func Result(httpCode, systemCode int, data interface{}, msg string, c *gin.Context) {
	// 开始时间
	resp := Response{
		Code: systemCode,
		Data: data,
		Msg:  msg,
		T:    time.Now().Unix(),
	}
	c.JSON(httpCode, resp)
	if trace, has := c.Get("_trace"); has {
		req, _ := c.Get("_req")
		core.Log().WithOptions(zap.WithCaller(false)).With(zap.Namespace("_trace")).Info("", zap.String("_method", c.Request.Method), zap.Any("_req", req), zap.Any("_resp", resp), zap.Any("_id", trace))
	}
}

func Ok(c *gin.Context) {
	Result(http.StatusOK, SUCCESS, map[string]interface{}{}, "ok", c)
}

func OkWithMessage(message string, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, map[string]interface{}{}, message, c)
}

func OkWithData(data interface{}, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, data, "ok", c)
}

func OkWithDetailed(data interface{}, message string, c *gin.Context) {
	Result(http.StatusOK, SUCCESS, data, message, c)
}

func Fail(c *gin.Context, httpCode ...int) {
	hc := http.StatusOK
	if len(httpCode) == 1 {
		hc = httpCode[0]
	}
	Result(hc, ERROR, map[string]interface{}{}, "error", c)
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
