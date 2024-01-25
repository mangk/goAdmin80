package main

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/admin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/db"
	_ "github.com/mangk/goAdmin80/front"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/middleware/dbLog"
	"github.com/mangk/goAdmin80/middleware/log"
	"net/http"
)

func main() {
	g80 := core.New()

	router := core.HttpEngine() // 获取到 gin.Engine 注册路由的方式与 gin框架相同
	router.GET("example/a", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "%s", "hello goAdmin80")
	})
	router.GET("example/b", func(ctx *gin.Context) {
		response.OkWithData("hello world", ctx) // 通过定义 struct 返回接口响应
	})

	router.GET("example/c", dbLog.MiddlewareOperationRecord(), func(ctx *gin.Context) { // MiddlewareOperationRecord 中间件会记录用户请求参数与响应数据到 sys_operation_records 表
	})

	router.GET("example/d", log.MiddlewareOperationRecord(1), func(ctx *gin.Context) { // MiddlewareOperationRecord 中间件通过 flag 配置，记录请求与响应信息到日志
	})

	// 这里会生成针对 example_table 表的 crud 接口：
	// example/curd/p 模版
	//example/curd/r 数据列表读取
	//example/curd/c 数据创建
	//example/curd/u 数据更新
	//example/curd/d 数据删除
	admin.NewEngine("example/curd", admin.Options{TableName: "example_table", OrderBy: "id asc", HideDeleteBtn: true}).AddField([]admin.Field{
		{
			Name:   "ID",
			Column: "id",
		},
		{
			Name:   "表头筛选字段demo",
			Column: "search",
			ElOption: admin.ElOption{
				Type:       admin.ElementComponentSelect,
				SearchType: admin.WhereLike,
				Options: func() string {
					config := []struct {
						Key   string `gorm:"column:key"`
						Value string `gorm:"column:value"`
					}{}
					db.DB().Table("example_table").Find(&config)
					data := []map[string]string{}
					for _, cfg := range config {
						data = append(data, map[string]string{
							"k": cfg.Key,
							"v": cfg.Value,
						})
					}
					st, _ := json.Marshal(data)
					return string(st)
				},
			},
			EditAble: true,
		},
		{
			Name:   "普通字段",
			Column: "username",
		},
		{},
	}...).Register()

	g80.ListenAndServer()
}
