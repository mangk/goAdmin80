package model

import (
	"errors"
	"github.com/mangk/goAdmin80/core"
	"gorm.io/gorm"
)

type SysMenu struct {
	MODEL
	AuthorityId   int                                        `json:"authorityId" gorm:"-"`
	MenuLevel     uint                                       `json:"-"`
	ParentId      int                                        `json:"parentId" gorm:"comment:父菜单ID"`     // 父菜单ID
	Path          string                                     `json:"path" gorm:"comment:路由path"`        // 路由path
	Name          string                                     `json:"name" gorm:"comment:路由name"`        // 路由name
	Hidden        bool                                       `json:"hidden" gorm:"comment:是否在列表隐藏"`     // 是否在列表隐藏
	Component     string                                     `json:"component" gorm:"comment:对应前端文件路径"` // 对应前端文件路径
	Sort          int                                        `json:"sort" gorm:"comment:排序标记"`          // 排序标记
	Children      []SysMenu                                  `json:"children" gorm:"-"`
	SysAuthoritys []SysAuthority                             `json:"authoritys" gorm:"many2many:sys_authority_menus;"`
	Meta          `json:"meta" gorm:"embedded;comment:附加属性"` // 附加属性
}

type Meta struct {
	ActiveName  string `json:"activeName" gorm:"comment:高亮菜单"`
	KeepAlive   bool   `json:"keepAlive" gorm:"comment:是否缓存"`           // 是否缓存
	DefaultMenu bool   `json:"defaultMenu" gorm:"comment:是否是基础路由（开发中）"` // 是否是基础路由（开发中）
	Title       string `json:"title" gorm:"comment:菜单名"`                // 菜单名
	Icon        string `json:"icon" gorm:"comment:菜单图标"`                // 菜单图标
	CloseTab    bool   `json:"closeTab" gorm:"comment:自动关闭tab"`         // 自动关闭tab
	SSRPath     string `json:"SSRPath" gorm:"ssr_path"`
}

func (SysMenu) TableName() string {
	return "sys_menus"
}

func (s SysMenu) systemMenu() (treeMpa []SysMenu) {
	return []SysMenu{
		{
			MODEL:         MODEL{ID: -1},
			ParentId:      0,
			Path:          "dashboard",
			Name:          "dashboard",
			Hidden:        false,
			Component:     "view/dashboard/index.vue",
			Sort:          1,
			Meta:          Meta{CloseTab: true, Title: "仪表盘", Icon: "odometer"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -2},
			ParentId:      0,
			Path:          "file",
			Name:          "file",
			Hidden:        false,
			Component:     "view/file/index.vue",
			Sort:          2,
			Meta:          Meta{CloseTab: true, Title: "文件管理", Icon: "files"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -3},
			ParentId:      0,
			Path:          "admin",
			Name:          "superAdmin",
			Hidden:        false,
			Component:     "view/superAdmin/index.vue",
			Sort:          3,
			Meta:          Meta{CloseTab: true, Title: "系统管理", Icon: "setting"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -4},
			ParentId:      -2,
			Path:          "upload",
			Name:          "upload",
			Hidden:        false,
			Component:     "view/file/upload/upload.vue",
			Sort:          1,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "媒体库（上传下载）", Icon: "upload"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -5},
			ParentId:      -2,
			Path:          "breakpoint",
			Name:          "breakpoint",
			Hidden:        false,
			Component:     "view/file/breakpoint/breakpoint.vue",
			Sort:          2,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "断点续传", Icon: "upload-filled"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -6},
			ParentId:      -3,
			Path:          "authority",
			Name:          "authority",
			Hidden:        false,
			Component:     "view/superAdmin/authority/authority.vue",
			Sort:          0,
			Meta:          Meta{CloseTab: true, Title: "角色管理", Icon: "star"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -7},
			ParentId:      -3,
			Path:          "menu",
			Name:          "menu",
			Hidden:        false,
			Component:     "view/superAdmin/menu/menu.vue",
			Sort:          0,
			Meta:          Meta{CloseTab: true, Title: "菜单管理", Icon: "menu"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -8},
			ParentId:      -3,
			Path:          "api",
			Name:          "api",
			Hidden:        false,
			Component:     "view/superAdmin/api/api.vue",
			Sort:          0,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "api管理", Icon: "link"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -9},
			ParentId:      -3,
			Path:          "user",
			Name:          "user",
			Hidden:        false,
			Component:     "view/superAdmin/user/user.vue",
			Sort:          0,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "用户管理", Icon: "user"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -10},
			ParentId:      -3,
			Path:          "operation",
			Name:          "operation",
			Hidden:        false,
			Component:     "view/superAdmin/operation/sysOperationRecord.vue",
			Sort:          0,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "操作历史", Icon: "clock"},
			SysAuthoritys: nil,
		}, {
			MODEL:         MODEL{ID: -11},
			ParentId:      -3,
			Path:          "formCreate",
			Name:          "formCreate",
			Hidden:        false,
			Component:     "view/systemTools/formCreate/index.vue",
			Sort:          0,
			Children:      nil,
			Meta:          Meta{CloseTab: true, Title: "表单生成器", Icon: "magic-stick"},
			SysAuthoritys: nil,
		},
		{
			MODEL:         MODEL{ID: -12},
			MenuLevel:     0,
			ParentId:      0,
			Path:          "person",
			Name:          "person",
			Hidden:        true,
			Component:     "view/person/person.vue",
			Sort:          0,
			Children:      nil,
			SysAuthoritys: nil,
			Meta:          Meta{CloseTab: true, Title: "个人信息", Icon: "message"},
		},
		//{
		//	MODEL:         MODEL{ID: -13},
		//	ParentId:      0,
		//	Path:          "convert",
		//	Name:          "convert",
		//	Hidden:        false,
		//	Component:     "view/systemTools/convert/index.vue",
		//	Sort:          0,
		//	Children:      nil,
		//	Meta:          Meta{CloseTab: true, Title: "内容转换器", Icon: "magic-stick"},
		//	SysAuthoritys: nil,
		//},
	}
}

// 构建树状结构，舍弃不可达(不是从根结点开始)的内容
func (s SysMenu) buildTree(menuList []SysMenu) ([]SysMenu, error) {
	var err error
	treeMap := make(map[int][]SysMenu)
	for _, v := range menuList {
		treeMap[v.ParentId] = append(treeMap[v.ParentId], v)
	}
	resMenuList := treeMap[0]
	for i := 0; i < len(resMenuList); i++ {
		err = s.getBaseChildrenList(&resMenuList[i], treeMap)
	}
	return resMenuList, err
}

func (s SysMenu) GetAllMenu(tree, loadSystem bool) ([]SysMenu, error) {
	systemMenu := []SysMenu{}
	if loadSystem {
		systemMenu = s.systemMenu()
	}
	menus := []SysMenu{}
	core.DB().Find(&menus)
	for _, menu := range systemMenu {
		menus = append(menus, menu)
	}

	if tree {
		return s.buildTree(menus)
	}
	return menus, nil
}

func (s SysMenu) GetMenuByUserId(userId int, tree bool) ([]SysMenu, error) {
	// 查询用户拥有的角色
	aIds := SysUserAuthority{}.GetAuthorityAuthorityIdByUserId(userId)
	return s.GetAllTreeMenuByAuthorityId(aIds, tree)
}

func (s SysMenu) GetAllTreeMenuByAuthorityId(authorityIds []int, tree bool) ([]SysMenu, error) {
	systemMenu := s.systemMenu()
	// 查询角色下所有的菜单
	menuIds := SysAuthorityMenu{}.GetMenuIdsByAuthorityIds(authorityIds)
	// 查询菜单列表
	menus := []SysMenu{}
	core.DB().Where("id in ?", menuIds).Order("sort desc").Find(&menus)
	for _, menu := range systemMenu {
		for _, menuId := range menuIds {
			if menu.ID == menuId {
				menus = append(menus, menu)
			}
		}
	}
	if tree {
		return s.buildTree(menus)
	}
	return menus, nil
}

func (s SysMenu) getBaseMenuTreeMap() (treeMap map[int][]SysMenu, err error) {
	var allMenus []SysMenu
	treeMap = make(map[int][]SysMenu)
	err = core.DB().Order("sort").Find(&allMenus).Error
	for _, v := range allMenus {
		treeMap[v.ParentId] = append(treeMap[v.ParentId], v)
	}
	return treeMap, err
}

func (s SysMenu) getBaseChildrenList(menu *SysMenu, treeMap map[int][]SysMenu) (err error) {
	menu.Children = treeMap[menu.ID]
	for i := 0; i < len(menu.Children); i++ {
		err = s.getBaseChildrenList(&menu.Children[i], treeMap)
	}
	return err
}

func (s SysMenu) GetBaseMenuById(id int) (menu SysMenu, err error) {
	err = core.DB().Where("id = ?", id).First(&menu).Error //.Preload("MenuBtn").Preload("Parameters")
	return
}

func (s SysMenu) AddBaseMenu(menu SysMenu) error {
	if !errors.Is(core.DB().Where("name = ?", menu.Name).First(&SysMenu{}).Error, gorm.ErrRecordNotFound) {
		return errors.New("存在重复name，请修改name")
	}
	return core.DB().Create(&menu).Error
}

func (s SysMenu) DeleteBaseMenu(id int) (err error) {
	err = core.DB().Where("parent_id = ?", id).First(&SysMenu{}).Error
	if err != nil {
		var menu SysMenu
		db := core.DB().Preload("SysAuthoritys").Where("id = ?", id).First(&menu).Delete(&menu)
		if len(menu.SysAuthoritys) > 0 {
			err = core.DB().Model(&menu).Association("SysAuthoritys").Delete(&menu.SysAuthoritys)
		} else {
			err = db.Error
			if err != nil {
				return
			}
		}
	} else {
		return errors.New("此菜单存在子菜单不可删除")
	}
	return err
}

func (s SysMenu) UpdateBaseMenu(menu SysMenu) (err error) {
	var oldMenu SysMenu
	upDateMap := make(map[string]interface{})
	upDateMap["keep_alive"] = menu.KeepAlive
	upDateMap["close_tab"] = menu.CloseTab
	upDateMap["default_menu"] = menu.DefaultMenu
	upDateMap["parent_id"] = menu.ParentId
	upDateMap["path"] = menu.Path
	upDateMap["name"] = menu.Name
	upDateMap["hidden"] = menu.Hidden
	upDateMap["component"] = menu.Component
	upDateMap["title"] = menu.Title
	upDateMap["active_name"] = menu.ActiveName
	upDateMap["icon"] = menu.Icon
	upDateMap["sort"] = menu.Sort
	upDateMap["ssr_path"] = menu.SSRPath

	err = core.DB().Transaction(func(tx *gorm.DB) error {
		db := tx.Where("id = ?", menu.ID).Find(&oldMenu)
		if oldMenu.Name != menu.Name {
			if !errors.Is(tx.Where("id <> ? AND name = ?", menu.ID, menu.Name).First(&SysMenu{}).Error, gorm.ErrRecordNotFound) {
				core.Log().Debug("存在相同name修改失败")
				return errors.New("存在相同name修改失败")
			}
		}

		txErr := db.Updates(upDateMap).Error
		if txErr != nil {
			core.Log().Debug(txErr.Error())
			return txErr
		}
		return nil
	})
	return err
}
