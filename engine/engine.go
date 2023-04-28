package engine

import (
	"bytes"
	"errors"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/front"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/model"
	"html/template"
	"io"
	"math"
	"strings"
	"sync"
	"time"
)

const (
	EQ  uint8 = iota + 1 // =
	Li                   // LIKE
	In                   // IN
	Gt                   // >
	Lt                   // <
	Ge                   // >=
	Le                   // <=
	Tst                  // > AND <
	Est                  // >= AND <
	Tse                  // > AND <=
	Ese                  // >= AND <=
	Fs                   // FIND_IN_SET

	requestKey = "_goAdmin80Request_"
)

type Field struct {
	Name             string        // 展示名
	Column           string        // 字段名
	Type             string        // 字段类型
	ElType           string        // 对应前端 Element 类型
	SortAble         bool          // 是否排序字段
	SearchAble       uint8         // 搜索字段类型
	Translate        func() string // 字段翻译函数 TODO 功能实现
	Hide             bool          // 是否对外展示
	EditAble         bool          // 是否可更新
	DefaultValueFunc func() string // 数据创建时的默认值
}

type Engine struct {
	ap         string // absolute path
	opt        Options
	mutex      sync.Mutex
	field      []Field
	middleware []gin.HandlerFunc
	userFunc   map[string]gin.HandlerFunc
}

type Options struct {
	DbName        string // 指定数据库连接
	TableName     string // 指定表名
	PK            string // 指定主键字段
	SoftDelete    string // 指定软删除字段
	HideCreateBtn bool   // 隐藏创建按钮
	HideDeleteBtn bool   // 隐藏删除按钮
	HideEditBtn   bool   // 隐藏编辑按钮
}

func NewEngine(absolutePath string, opt Options) *Engine {
	if opt.DbName == "" {
		opt.DbName = "default"
	}
	if opt.PK == "" {
		opt.PK = "id"
	}

	e := &Engine{
		ap:         strings.Trim(absolutePath, "/"),
		mutex:      sync.Mutex{},
		field:      nil,
		middleware: []gin.HandlerFunc{},
		userFunc:   make(map[string]gin.HandlerFunc),
		opt:        opt,
	}
	return e
}

func (e *Engine) AddMiddleware(m ...gin.HandlerFunc) *Engine {
	e.middleware = append(e.middleware, m...)
	return e
}

func (e *Engine) AddField(filed ...Field) *Engine {
	e.field = append(e.field, filed...)
	return e
}

func (e *Engine) Register() {
	g := core.HttpEngine()
	for _, handlerFunc := range e.middleware {
		g.Use(handlerFunc)
	}

	// 注册模版
	e.register("tmp", "GET", e.tmp)

	// 注册系统方法 TODO 系统默认鉴权 middleware 的加入
	for _, key := range []string{"p|POST", "r|POST", "c|POST", "u|PATCH", "d|DELETE"} {
		st := strings.Split(key, "|")
		var f []gin.HandlerFunc
		if _, ok := e.userFunc[key]; ok {
			f = []gin.HandlerFunc{e.userFunc[key]}
			delete(e.userFunc, key)
		} else {
			switch st[0] {
			case "p":
				f = []gin.HandlerFunc{e.PageRequestVerifyMiddleware(), e.page}
			case "r":
				f = []gin.HandlerFunc{e.PageRequestVerifyMiddleware(), e.getById}
			case "c":
				f = []gin.HandlerFunc{e.PageRequestVerifyMiddleware(), e.create}
			case "u":
				f = []gin.HandlerFunc{e.PageRequestVerifyMiddleware(), e.updateById}
			case "d":
				f = []gin.HandlerFunc{e.PageRequestVerifyMiddleware(), e.delete}
			}
		}
		e.register(st[0], st[1], f...)
	}

	// 注册用户自定义方法
	for key, f := range e.userFunc {
		st := strings.Split(key, "|")
		e.register(st[0], st[1], f)
	}
}

func (e *Engine) RegisterGetHandler(relativePath string, handlerFunc gin.HandlerFunc) *Engine {
	relativePath = strings.Trim(relativePath, "/")
	key := fmt.Sprintf("%s|%s", relativePath, "GET")
	if _, ok := e.userFunc[key]; ok {
		core.Log().Error("Unsupported methods")
		panic("path as registered")
	}
	e.userFunc[key] = handlerFunc
	return e
}

func (e *Engine) RegisterPostHandler(relativePath string, handlerFunc gin.HandlerFunc) *Engine {
	relativePath = strings.Trim(relativePath, "/")
	key := fmt.Sprintf("%s|%s", relativePath, "POST")
	if _, ok := e.userFunc[key]; ok {
		core.Log().Error("Unsupported methods")
		panic("path as registered")
	}
	e.userFunc[key] = handlerFunc
	return e
}

func (e *Engine) RegisterPatchHandler(relativePath string, handlerFunc gin.HandlerFunc) *Engine {
	relativePath = strings.Trim(relativePath, "/")
	key := fmt.Sprintf("%s|%s", relativePath, "PATCH")
	if _, ok := e.userFunc[key]; ok {
		core.Log().Error("Unsupported methods")
		panic("path as registered")
	}
	e.userFunc[key] = handlerFunc
	return e
}

func (e *Engine) RegisterDeleteHandler(relativePath string, handlerFunc gin.HandlerFunc) *Engine {
	relativePath = strings.Trim(relativePath, "/")
	key := fmt.Sprintf("%s|%s", relativePath, "DELETE")
	if _, ok := e.userFunc[key]; ok {
		core.Log().Error("Unsupported methods")
		panic("path as registered")
	}
	e.userFunc[key] = handlerFunc
	return e
}

func (e *Engine) register(relativePath, method string, handlerFunc ...gin.HandlerFunc) {
	g := core.HttpEngine()
	switch method {
	case "POST":
		g.POST(e.ap+"/"+relativePath, handlerFunc...)
	case "GET":
		g.GET(e.ap+"/"+relativePath, handlerFunc...)
	case "PATCH":
		g.PATCH(e.ap+"/"+relativePath, handlerFunc...)
	case "DELETE":
		g.DELETE(e.ap+"/"+relativePath, handlerFunc...)
	default:
		core.Log().Error("Unsupported methods")
		panic("Unsupported methods")
	}
}

func (e *Engine) tmp(ctx *gin.Context) {
	var buf bytes.Buffer
	data := map[string]interface{}{
		"pk":            e.opt.PK,
		"field":         e.field,
		"ap":            "/" + e.ap,
		"createBtnHide": e.opt.HideCreateBtn,
		"deleteBtnHide": e.opt.HideDeleteBtn,
		"editBtnHide":   e.opt.HideEditBtn,
	}

	t, _ := template.New("convert").Delims("{[{", "}]}").Parse(front.Convert)
	_ = t.Execute(&buf, data)
	ctx.String(200, "%s", buf.String())
}

func (e *Engine) page(ctx *gin.Context) {
	req := ctx.MustGet(requestKey).(request.CRUDRequest)

	var count int64
	var data interface{}
	var err error
	query := core.DB(e.opt.DbName).Table(e.opt.TableName)

	// 构建查询条件
	// TODO 这里循环次数增加会导致where条件增加，是否加一个限制
	for _, condition := range req.Query {
		for _, field := range e.field {
			if condition.Column == field.Column {
				switch field.SearchAble {
				case EQ:
					query = query.Where(fmt.Sprintf("%s = ?", condition.Column), condition.Value)
				case Li:
					query = query.Where(fmt.Sprintf("%s like ?", condition.Column), "%"+condition.Value+"%")
				case In:
					query = query.Where(fmt.Sprintf("%s in ?", condition.Column), strings.Split(condition.Value, ",")) // TODO 这里要不要限制 in 的数据量大小
				case Gt:
					query = query.Where(fmt.Sprintf("%s > ?", condition.Column), condition.Value)
				case Lt:
					query = query.Where(fmt.Sprintf("%s < ?", condition.Column), condition.Value)
				case Ge:
					query = query.Where(fmt.Sprintf("%s >= ?", condition.Column), condition.Value)
				case Le:
					query = query.Where(fmt.Sprintf("%s <= ?", condition.Column), condition.Value)
				case Tst:
					query = query.Where(fmt.Sprintf("%s > ?", condition.Column), condition.Value).Where(fmt.Sprintf("%s < ?", condition.Column), condition.Value)
				case Est:
					query = query.Where(fmt.Sprintf("%s >= ?", condition.Column), condition.Value).Where(fmt.Sprintf("%s < ?", condition.Column), condition.Value)
				case Tse:
					query = query.Where(fmt.Sprintf("%s > ?", condition.Column), condition.Value).Where(fmt.Sprintf("%s <= ?", condition.Column), condition.Value)
				case Ese:
					query = query.Where(fmt.Sprintf("%s >= ?", condition.Column), condition.Value).Where(fmt.Sprintf("%s <= ?", condition.Column), condition.Value)
				case Fs:
				default:
				}
			}
		}
	}

	if e.opt.SoftDelete != "" {
		query = query.Where(fmt.Sprintf("%s IS NULL", e.opt.SoftDelete))
	}

	err = query.Count(&count).Error
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据库查询错误", ctx)
		return
	}
	if count > 0 {
		query = query.Select(e.selectColumns()).Limit(req.PageSize).Offset((req.Page - 1) * req.PageSize)
		data, err = model.Find(query)
		if err != nil {
			response.FailWithDetailed(err.Error(), "数据库查询错误", ctx)
			return
		}
	}

	response.OkWithDetailed(response.CRUDResponse{
		Count:     count,
		Page:      req.Page,
		PageSize:  req.PageSize,
		PageCount: int(math.Ceil(float64(count) / float64(req.PageSize))),
		List:      data,
	}, "success", ctx)
}

func (e *Engine) getById(ctx *gin.Context) {
	req := ctx.MustGet(requestKey).(request.CRUDRequest)
	if len(req.Ids) == 0 {
		response.FailWithMessage("未提交数据查询 ID", ctx)
		return
	}

	data, err := e.queryById(req.Ids[0])
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据查询错误", ctx)
		return
	}
	if data == nil {
		response.FailWithMessage("未找到数据", ctx)
		return
	}

	response.OkWithDetailed(data, "ok", ctx)
}

func (e *Engine) updateById(ctx *gin.Context) {
	req := ctx.MustGet(requestKey).(request.CRUDRequest)
	if len(req.Ids) == 0 {
		response.FailWithMessage("未提交数据查询 ID", ctx)
		return
	}

	data, err := e.queryById(req.Ids[0])
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据查询错误", ctx)
		return
	}
	if data == nil {
		response.FailWithMessage("未找到数据", ctx)
		return
	}

	update := make(map[string]interface{})
	for _, condition := range req.Query {
		for _, field := range e.field {
			if condition.Column == field.Column && field.EditAble && condition.Value != "" {
				update[condition.Column] = condition.Value
			}
		}
	}

	err = core.DB(e.opt.DbName).Table(e.opt.TableName).Where(fmt.Sprintf("%s = ?", e.opt.PK), req.Ids[0]).Updates(update).Error
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据更新错误", ctx)
	}

	response.OkWithDetailed(req.Ids[0], "ok", ctx)
}

func (e *Engine) create(ctx *gin.Context) {
	req := ctx.MustGet(requestKey).(request.CRUDRequest)

	create := make(map[string]interface{})
	for _, condition := range req.Query {
		for _, field := range e.field {
			if condition.Column == field.Column {
				var v interface{}
				if condition.Value == "" {
					if field.DefaultValueFunc == nil {
						goto WITHOUT_DEFAULT
					}
					v = field.DefaultValueFunc()
				} else {
					v = condition.Value
				}
				create[condition.Column] = v
			}
		WITHOUT_DEFAULT:
		}
	}
	err := core.DB(e.opt.DbName).Table(e.opt.TableName).Create(create).Error
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据创建错误", ctx)
		return
	}

	response.OkWithDetailed("req.Ids[0]", "ok", ctx)
}

func (e *Engine) delete(ctx *gin.Context) {
	req := ctx.MustGet(requestKey).(request.CRUDRequest)
	if len(req.Ids) == 0 {
		response.FailWithMessage("未提交数据查询 ID", ctx)
		return
	}

	query := core.DB(e.opt.DbName).Table(e.opt.TableName).Where(fmt.Sprintf("%s in ?", e.opt.PK), req.Ids)
	var err error
	if e.opt.SoftDelete != "" {
		err = query.Updates(map[string]interface{}{e.opt.SoftDelete: time.Now().Format("2006-01-02 15:05:05")}).Error
	} else {
		err = query.Delete(nil).Error
	}
	if err != nil {
		response.FailWithDetailed(err.Error(), "数据删除错误", ctx)
	}

	response.OkWithDetailed(req.Ids, "ok", ctx)
}

func (e *Engine) PageRequestVerifyMiddleware() gin.HandlerFunc {
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
		ctx.Set(requestKey, req)
		ctx.Next()
	}
}

func (e *Engine) selectColumns() string {
	var selectColumns []string
	for _, field := range e.field {
		if !field.Hide && field.Column != e.opt.SoftDelete {
			selectColumns = append(selectColumns, field.Column)
		}
	}
	return strings.Join(selectColumns, ",")
}

func (e *Engine) queryById(id string) (map[string]interface{}, error) {
	query := core.DB(e.opt.DbName).Table(e.opt.TableName).Select(e.selectColumns()).Where(fmt.Sprintf("%s = ?", e.opt.PK), id)
	if e.opt.SoftDelete != "" {
		query = query.Where(fmt.Sprintf("%s IS NULL", e.opt.SoftDelete))
	}

	data, err := model.Find(query.Limit(1))

	if err != nil {
		return nil, err
	}
	if len(data) == 0 {
		return nil, nil
	}
	return data[0], nil
}
