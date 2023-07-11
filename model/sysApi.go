package model

import (
	"errors"
	"fmt"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler/request"
	"gorm.io/gorm"
)

type SysApi struct {
	MODEL
	Path        string `json:"path" gorm:"comment:api路径"`             // api路径
	Description string `json:"description" gorm:"comment:api中文描述"`    // api中文描述
	ApiGroup    string `json:"apiGroup" gorm:"comment:api组"`          // api组
	Method      string `json:"method" gorm:"default:POST;comment:方法"` // 方法:创建POST(默认)|查看GET|更新PUT|删除DELETE
	Sys         bool   `json:"sys" gorm:"-"`
}

func (SysApi) TableName() string {
	return "sys_apis"
}

func (s SysApi) systemApi() []SysApi {
	return []SysApi{
		{MODEL: MODEL{ID: -1}, Method: "POST", Path: "/_sys/login", Description: "用户登录(默认必选)", ApiGroup: "鉴权", Sys: true},

		{MODEL: MODEL{ID: -2}, Method: "POST", Path: "/_sys/captcha", Description: "获取验证码(默认必选)", ApiGroup: "鉴权", Sys: true},

		{MODEL: MODEL{ID: -3}, Method: "POST", Path: "/_sys/api/all", Description: "获取所有api", ApiGroup: "api管理", Sys: true},
		{MODEL: MODEL{ID: -4}, Method: "POST", Path: "/_sys/api/page", Description: "分页获取Api列表", ApiGroup: "api管理", Sys: true},
		{MODEL: MODEL{ID: -5}, Method: "POST", Path: "/_sys/api/getById", Description: "获取单条Api消息", ApiGroup: "api管理", Sys: true},
		{MODEL: MODEL{ID: -6}, Method: "POST", Path: "/_sys/api", Description: "创建Api", ApiGroup: "api管理", Sys: true},
		{MODEL: MODEL{ID: -7}, Method: "PATCH", Path: "/_sys/api", Description: "更新api", ApiGroup: "api管理", Sys: true},
		{MODEL: MODEL{ID: -8}, Method: "DELETE", Path: "/_sys/api", Description: "删除Api", ApiGroup: "api管理", Sys: true},

		{MODEL: MODEL{ID: -9}, Method: "POST", Path: "/_sys/jwt/jsonInBlacklist", Description: "jwt加入黑名单(默认必选)", ApiGroup: "Jwt管理", Sys: true},

		{MODEL: MODEL{ID: -10}, Method: "POST", Path: "/_sys/user/page", Description: "分页获取用户列表", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -11}, Method: "POST", Path: "/_sys/user/getUserInfo", Description: "获取自身信息(默认必选)", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -12}, Method: "POST", Path: "/_sys/user/adminRegister", Description: "管理员注册账号", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -13}, Method: "PATCH", Path: "/_sys/user/changePassword", Description: "用户修改密码", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -14}, Method: "PATCH", Path: "/_sys/user/setUserAuthority", Description: "设置用户权限", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -15}, Method: "PATCH", Path: "/_sys/user/setUserInfo", Description: "设置用户信息", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -16}, Method: "PATCH", Path: "/_sys/user/setUserAuthorities", Description: "设置用户权限组", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -17}, Method: "PATCH", Path: "/_sys/user/resetPassword", Description: "重置密码", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -18}, Method: "DELETE", Path: "/_sys/user", Description: "删除用户", ApiGroup: "用户管理", Sys: true},
		{MODEL: MODEL{ID: -19}, Method: "PATCH", Path: "/_sys/user/setSelfInfo", Description: "设置自身信息(默认必选)", ApiGroup: "用户管理", Sys: true},

		{MODEL: MODEL{ID: -20}, Method: "POST", Path: "/_sys/menu/getAll", Description: "获取全部菜单", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -21}, Method: "POST", Path: "/_sys/menu/getByUserId", Description: "依据用户获取菜单(默认必选)", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -22}, Method: "POST", Path: "/_sys/menu/getByAuthorityId", Description: "依据角色id获取菜单", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -24}, Method: "POST", Path: "/_sys/menu/getById", Description: "根据id获取菜单", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -25}, Method: "POST", Path: "/_sys/menu/add", Description: "新增菜单", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -26}, Method: "POST", Path: "/_sys/menu/addMenuAuthority", Description: "增加menu和角色关联关系", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -27}, Method: "DELETE", Path: "/_sys/menu", Description: "删除菜单", ApiGroup: "菜单管理", Sys: true},
		{MODEL: MODEL{ID: -28}, Method: "PATCH", Path: "/_sys/menu", Description: "更新菜单", ApiGroup: "菜单管理", Sys: true},

		{MODEL: MODEL{ID: -29}, Method: "POST", Path: "/_sys/casbin/getPolicyPathByAuthorityId", Description: "获取", ApiGroup: "Casbin管理", Sys: true},
		{MODEL: MODEL{ID: -30}, Method: "PATCH", Path: "/_sys/casbin", Description: "更新", ApiGroup: "Casbin管理", Sys: true},

		{MODEL: MODEL{ID: -31}, Method: "POST", Path: "/_sys/authority/page", Description: "分页获取角色列表", ApiGroup: "角色管理", Sys: true},
		{MODEL: MODEL{ID: -32}, Method: "POST", Path: "/_sys/authority", Description: "创建角色", ApiGroup: "角色管理", Sys: true},
		{MODEL: MODEL{ID: -33}, Method: "DELETE", Path: "/_sys/authority", Description: "删除角色", ApiGroup: "角色管理", Sys: true},
		{MODEL: MODEL{ID: -34}, Method: "PATCH", Path: "/_sys/authority", Description: "更新角色", ApiGroup: "角色管理", Sys: true},
		{MODEL: MODEL{ID: -35}, Method: "PATCH", Path: "/_sys/authority/setDataAuthority", Description: "设置角色资源权限", ApiGroup: "角色管理", Sys: true},

		{MODEL: MODEL{ID: -36}, Method: "DELETE", Path: "/_sys/sysOperationRecord", Description: "删除", ApiGroup: "系统操作记录", Sys: true},
		{MODEL: MODEL{ID: -37}, Method: "GET", Path: "/_sys/sysOperationRecord/findSysOperationRecord", Description: "根据ID获取", ApiGroup: "系统操作记录", Sys: true},
		{MODEL: MODEL{ID: -38}, Method: "GET", Path: "/_sys/sysOperationRecord/getSysOperationRecordList", Description: "获取SysOperationRecord列表", ApiGroup: "系统操作记录", Sys: true},

		{MODEL: MODEL{ID: -39}, Method: "POST", Path: "/_sys/fileUploadAndDownload/upload", Description: "上传文件", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -40}, Method: "POST", Path: "/_sys/fileUploadAndDownload/getFileList", Description: "获取上传文件列表", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -41}, Method: "POST", Path: "/_sys/fileUploadAndDownload/deleteFile", Description: "删除指定文件", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -42}, Method: "POST", Path: "/_sys/fileUploadAndDownload/editFileName", Description: "编辑文件名或者备注", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -43}, Method: "POST", Path: "/_sys/fileUploadAndDownload/breakpointContinue", Description: "断点续传", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -44}, Method: "GET", Path: "/_sys/fileUploadAndDownload/findFile", Description: "查询当前文件成功的切片", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -45}, Method: "POST", Path: "/_sys/fileUploadAndDownload/breakpointContinueFinish", Description: "切片传输完成", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -46}, Method: "POST", Path: "/_sys/fileUploadAndDownload/removeChunk", Description: "删除切片", ApiGroup: "文件管理", Sys: true},
		{MODEL: MODEL{ID: -47}, Method: "GET", Path: "/_sys/fileUploadAndDownload/cfg", Description: "上传配置", ApiGroup: "文件管理", Sys: true},
	}
}

func (s SysApi) GetById(id int) (SysApi, error) {
	err := core.DB().Where("id = ?", id).First(&s).Error
	return s, err
}

func (s *SysApi) Create() error {
	if s.IsExist(s.Path, s.Method) {
		return errors.New("存在相同api")
	}
	return core.DB().Create(s).Error
}

func (s *SysApi) Update() error {
	var old SysApi
	err := core.DB().Where("id = ?", s.ID).First(&old).Error
	if old.Path != s.Path || old.Method != s.Method {
		if s.IsExist(s.Path, s.Method) {
			return errors.New("存在相同api")
		}
	}
	if err != nil {
		return err
	}
	if err = (Casbin{}).UpdateCasbinApi(old.Path, s.Path, old.Method, s.Method); err != nil {
		return err
	}
	err = core.DB().Model(s).UpdateColumns(map[string]interface{}{"path": s.Path, "description": s.Description, "api_group": s.ApiGroup, "method": s.Method}).Error
	return err
}

func (s SysApi) IsExist(path, method string) bool {
	return !errors.Is(core.DB().Where("path = ? AND method = ?", path, method).First(&SysApi{}).Error, gorm.ErrRecordNotFound)
}

func (s SysApi) Delete(ids []int) error {
	var records []SysApi
	err := core.DB().Find(&records, "id in ?", ids).Delete(&s, ids).Error
	if err != nil {
		return err
	}
	for _, record := range records {
		Casbin{}.ClearCasbin(1, record.Path, record.Method)
	}
	err = Casbin{}.Casbin().LoadPolicy()
	if err != nil {
		return err
	}
	return nil
}

func (s SysApi) All() ([]SysApi, error) {
	var all []SysApi
	err := core.DB().Find(&all).Error
	for _, v := range s.systemApi() {
		all = append(all, v)
	}
	return all, err
}

func (s SysApi) GetAPIInfoList(api SysApi, info request.PageInfo, order string, desc bool) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	db := core.DB().Model(&SysApi{})
	var apiList []SysApi

	if api.Path != "" {
		db = db.Where("path LIKE ?", "%"+api.Path+"%")
	}

	if api.Description != "" {
		db = db.Where("description LIKE ?", "%"+api.Description+"%")
	}

	if api.Method != "" {
		db = db.Where("method = ?", api.Method)
	}

	if api.ApiGroup != "" {
		db = db.Where("api_group = ?", api.ApiGroup)
	}

	err = db.Count(&total).Error

	if err != nil {
		return apiList, total, err
	} else {
		db = db.Limit(limit).Offset(offset)
		if order != "" {
			var OrderStr string
			// 设置有效排序key 防止sql注入
			// 感谢 Tom4t0 提交漏洞信息
			orderMap := make(map[string]bool, 5)
			orderMap["id"] = true
			orderMap["path"] = true
			orderMap["api_group"] = true
			orderMap["description"] = true
			orderMap["method"] = true
			if orderMap[order] {
				if desc {
					OrderStr = order + " desc"
				} else {
					OrderStr = order
				}
			} else { // didn't matched any order key in `orderMap`
				err = fmt.Errorf("非法的排序字段: %v", order)
				return apiList, total, err
			}

			err = db.Order(OrderStr).Find(&apiList).Error
		} else {
			err = db.Order("api_group").Find(&apiList).Error
		}
	}
	return apiList, total, err
}
