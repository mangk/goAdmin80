package model

import (
	"errors"
	"github.com/casbin/casbin/v2"
	"github.com/casbin/casbin/v2/model"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v4"
	"github.com/mangk/goAdmin80/core"
	"go.uber.org/zap"
	"strconv"
	"sync"
	"time"

	uuid "github.com/satori/go.uuid"
)

type Casbin struct{}

// 更新 casbin 权限
func (c Casbin) UpdateCasbin(AuthorityID int, casbinInfos []CasbinInfo) error {
	authorityId := strconv.Itoa(AuthorityID)
	c.ClearCasbin(0, authorityId)
	rules := [][]string{}
	defaultRules := [][]string{ // 默认选中项目，关联 model/sysApi.go systemApi()
		{authorityId, "/_sys/menu/getByUserId", "POST"},
		{authorityId, "/_sys/jwt/jsonInBlacklist", "POST"},
		{authorityId, "/_sys/user/getUserInfo", "POST"},
		{authorityId, "/_sys/login", "POST"},
		{authorityId, "/_sys/captcha", "POST"},
		{authorityId, "/_sys/user/setSelfInfo", "PATCH"},
	}
	for _, v := range casbinInfos {
		var inDefault bool
		for _, rule := range defaultRules {
			if rule[1] == v.Path && rule[2] == v.Method {
				inDefault = true
			}
		}
		if !inDefault {
			rules = append(rules, []string{authorityId, v.Path, v.Method})
		}
	}
	rules = append(rules, defaultRules...)
	e := c.Casbin()
	success, _ := e.AddPolicies(rules)
	if !success {
		return errors.New("存在相同api,添加失败,请联系管理员")
	}
	err := e.LoadPolicy()
	if err != nil {
		return err
	}
	return nil
}

// API更新随动
func (c Casbin) UpdateCasbinApi(oldPath string, newPath string, oldMethod string, newMethod string) error {
	err := core.DB().Model(&gormadapter.CasbinRule{}).Where("v1 = ? AND v2 = ?", oldPath, oldMethod).Updates(map[string]interface{}{
		"v1": newPath,
		"v2": newMethod,
	}).Error
	err = c.Casbin().LoadPolicy()
	if err != nil {
		return err
	}
	return err
}

// 获取权限列表
func (c Casbin) GetPolicyPathByAuthorityId(AuthorityID int) (pathMaps []CasbinInfo) {
	e := c.Casbin()
	authorityId := strconv.Itoa(AuthorityID)
	list := e.GetFilteredPolicy(0, authorityId)
	for _, v := range list {
		pathMaps = append(pathMaps, CasbinInfo{
			Path:   v[1],
			Method: v[2],
		})
	}
	return pathMaps
}

// 清除匹配的权限
func (c Casbin) ClearCasbin(v int, p ...string) bool {
	e := c.Casbin()
	success, _ := e.RemoveFilteredPolicy(v, p...)
	return success
}

var (
	cachedEnforcer *casbin.SyncedEnforcer
	once           sync.Once
)

// 持久化到数据库  引入自定义规则
func (c Casbin) Casbin() *casbin.SyncedEnforcer {
	once.Do(func() {
		a, _ := gormadapter.NewAdapterByDB(core.DB())
		text := `
		[request_definition]
		r = sub, obj, act
		
		[policy_definition]
		p = sub, obj, act
		
		[role_definition]
		g = _, _
		
		[policy_effect]
		e = some(where (p.eft == allow))
		
		[matchers]
		m = r.sub == p.sub && keyMatch2(r.obj,p.obj) && r.act == p.act
		`
		m, err := model.NewModelFromString(text)
		if err != nil {
			core.Log().Error("字符串加载模型失败!", zap.Error(err))
			return
		}
		cachedEnforcer, _ = casbin.NewSyncedEnforcer(m, a)
		cachedEnforcer.StartAutoLoadPolicy(time.Minute * 5)
	})
	return cachedEnforcer
}

// Custom claims structure
type CustomClaims struct {
	BaseClaims
	BufferTime int64
	jwt.StandardClaims
}

type BaseClaims struct {
	UUID        uuid.UUID
	ID          int
	Username    string
	NickName    string
	AuthorityId []int
}

// Casbin info structure
type CasbinInfo struct {
	Path   string `json:"path"`   // 路径
	Method string `json:"method"` // 方法
}

// Casbin structure for input parameters
type CasbinInReceive struct {
	AuthorityId int          `json:"authorityId"` // 权限id
	CasbinInfos []CasbinInfo `json:"casbinInfos"`
}

func DefaultCasbin() []CasbinInfo {
	return []CasbinInfo{
		{Path: "/menu/getMenu", Method: "POST"},
		{Path: "/jwt/jsonInBlacklist", Method: "POST"},
		{Path: "/base/login", Method: "POST"},
		{Path: "/user/admin_register", Method: "POST"},
		{Path: "/user/changePassword", Method: "POST"},
		{Path: "/user/setUserAuthority", Method: "POST"},
		{Path: "/user/setUserInfo", Method: "PUT"},
		{Path: "/user/getUserInfo", Method: "GET"},
	}
}

func GetClaims(c *gin.Context) (*CustomClaims, error) {
	token := c.Request.Header.Get("Authorization")
	token = token[7:]
	j := NewJWT(core.Config().JWT.SigningKey)
	claims, err := j.ParseToken(token)
	if err != nil {
		core.Log().Error("从Gin的Context中获取从jwt解析信息失败, 请检查请求头是否存在x-token且claims是否为规定结构")
	}
	return claims, err
}

func GetUserID(c *gin.Context) int {
	if claims, exists := c.Get("claims"); !exists {
		if cl, err := GetClaims(c); err != nil {
			return 0
		} else {
			return cl.ID
		}
	} else {
		waitUse := claims.(*CustomClaims)
		return waitUse.ID
	}
}

func GetUserUuid(c *gin.Context) uuid.UUID {
	if claims, exists := c.Get("claims"); !exists {
		if cl, err := GetClaims(c); err != nil {
			return uuid.UUID{}
		} else {
			return cl.UUID
		}
	} else {
		waitUse := claims.(*CustomClaims)
		return waitUse.UUID
	}
}

func GetUserAuthorityId(c *gin.Context) []int {
	if claims, exists := c.Get("claims"); !exists {
		if cl, err := GetClaims(c); err != nil {
			return []int{}
		} else {
			return cl.AuthorityId
		}
	} else {
		waitUse := claims.(*CustomClaims)
		return waitUse.AuthorityId
	}
}

func GetUserInfo(c *gin.Context) *CustomClaims {
	if claims, exists := c.Get("claims"); !exists {
		if cl, err := GetClaims(c); err != nil {
			return nil
		} else {
			return cl
		}
	} else {
		waitUse := claims.(*CustomClaims)
		return waitUse
	}
}
