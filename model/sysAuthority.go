package model

import (
	"errors"
	"strconv"
	"time"

	"github.com/mangk/goAdmin80/db"
	"github.com/mangk/goAdmin80/handler/request"
	"gorm.io/gorm"
)

type SysAuthority struct {
	CreatedAt       time.Time       // 创建时间
	UpdatedAt       time.Time       // 更新时间
	DeletedAt       *time.Time      `sql:"index"`
	AuthorityId     int             `json:"authorityId" gorm:"not null;unique;primary_key;comment:角色ID;size:90"` // 角色ID
	AuthorityName   string          `json:"authorityName" gorm:"comment:角色名"`                                    // 角色名
	ParentId        *uint           `json:"parentId" gorm:"comment:父角色ID"`                                       // 父角色ID
	DataAuthorityId []*SysAuthority `json:"dataAuthorityId" gorm:"many2many:sys_data_authority_id;"`
	Children        []SysAuthority  `json:"children" gorm:"-"`
	SysMenus        []SysMenu       `json:"menus" gorm:"many2many:sys_authority_menus;"`
	Users           []SysUser       `json:"-" gorm:"many2many:sys_user_authority;"`
	DefaultRouter   string          `json:"defaultRouter" gorm:"comment:默认菜单;default:defaultDashboard"` // 默认菜单(默认defaultDashboard)
}

func (SysAuthority) TableName() string {
	return "sys_authorities"
}

func (s SysAuthority) SetMenuAuthority(auth *SysAuthority) error {
	var d SysAuthority
	db.DB().Preload("SysMenus").First(&d, "authority_id = ?", auth.AuthorityId)
	err := db.DB().Model(&d).Association("SysMenus").Replace(&auth.SysMenus)
	return err
}

func (s SysAuthority) GetAuthorityInfoList(info request.PageInfo) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	db := db.DB().Model(&SysAuthority{})
	if err = db.Where("parent_id = ?", "0").Count(&total).Error; total == 0 || err != nil {
		return
	}
	var authority []SysAuthority
	err = db.Limit(limit).Offset(offset).Preload("DataAuthorityId").Where("parent_id = ?", "0").Find(&authority).Error
	for k := range authority {
		err = s.findChildrenAuthority(&authority[k])
	}
	return authority, total, err
}

func (s SysAuthority) findChildrenAuthority(authority *SysAuthority) (err error) {
	err = db.DB().Preload("DataAuthorityId").Where("parent_id = ?", authority.AuthorityId).Find(&authority.Children).Error
	if len(authority.Children) > 0 {
		for k := range authority.Children {
			err = s.findChildrenAuthority(&authority.Children[k])
		}
	}
	return err
}

func (s SysAuthority) CreateAuthority(auth SysAuthority) (SysAuthority, error) {
	var authorityBox SysAuthority
	if !errors.Is(db.DB().Where("authority_id = ?", auth.AuthorityId).First(&authorityBox).Error, gorm.ErrRecordNotFound) {
		return auth, errors.New("存在相同角色id")
	}
	err := db.DB().Create(&auth).Error
	return auth, err
}

type SysAuthorityCopyResponse struct {
	Authority      SysAuthority `json:"authority"`
	OldAuthorityId int          `json:"oldAuthorityId"` // 旧角色ID
}

func (s SysAuthority) CopyAuthority(copyInfo SysAuthorityCopyResponse) (SysAuthority, error) {
	//var authorityBox SysAuthority
	//if !errors.Is(db.DB().Where("authority_id = ?", copyInfo.Authority.AuthorityId).First(&authorityBox).Error, gorm.ErrRecordNotFound) {
	//	return SysAuthority{}, errors.New("存在相同角色id")
	//}
	//copyInfo.Authority.Children = []SysAuthority{}
	//menus, err := SysMenu{}.GetMenuAuthority(copyInfo.OldAuthorityId)
	//if err != nil {
	//	return SysAuthority{}, err
	//}
	//var baseMenu []SysMenu
	//for _, v := range menus {
	//	intNum, _ := strconv.Atoi(v.MenuId)
	//	v.SysBaseMenu.ID = intNum
	//	baseMenu = append(baseMenu, v.SysBaseMenu)
	//}
	//copyInfo.Authority.SysMenus = baseMenu
	//err = db.DB().Create(&copyInfo.Authority).Error
	//if err != nil {
	//	return SysAuthority{}, err
	//}
	//
	//paths := Casbin{}.GetPolicyPathByAuthorityId(copyInfo.OldAuthorityId)
	//err = Casbin{}.UpdateCasbin(copyInfo.Authority.AuthorityId, paths)
	//if err != nil {
	//	_ = s.DeleteAuthority(&copyInfo.Authority)
	//}
	//return copyInfo.Authority, err
	return SysAuthority{}, nil
}

func (s SysAuthority) DeleteAuthority(auth *SysAuthority) (err error) {
	if errors.Is(db.DB().Debug().Preload("Users").First(&auth).Error, gorm.ErrRecordNotFound) {
		return errors.New("该角色不存在")
	}
	if len(auth.Users) != 0 {
		return errors.New("此角色有用户正在使用禁止删除")
	}
	if !errors.Is(db.DB().Where("authority_id = ?", auth.AuthorityId).First(&SysUser{}).Error, gorm.ErrRecordNotFound) {
		return errors.New("此角色有用户正在使用禁止删除")
	}
	if !errors.Is(db.DB().Where("parent_id = ?", auth.AuthorityId).First(&SysAuthority{}).Error, gorm.ErrRecordNotFound) {
		return errors.New("此角色存在子角色不允许删除")
	}
	curDBdb := db.DB().Where("authority_id = ?", auth.AuthorityId).First(auth)
	err = curDBdb.Unscoped().Delete(auth).Error
	if err != nil {
		return
	}
	// 删除角色拥有的菜单
	err = db.DB().Where("sys_authority_authority_id = ?", auth.AuthorityId).Delete(&SysAuthorityMenu{}).Error
	if err != nil {
		return
	}
	// 删除角色与用户对应关系
	err = db.DB().Delete(&[]SysUserAuthority{}, "sys_authority_authority_id = ?", auth.AuthorityId).Error
	if err != nil {
		return
	}
	authorityId := strconv.Itoa(auth.AuthorityId)
	Casbin{}.ClearCasbin(0, authorityId)
	return err
}

func (s SysAuthority) UpdateAuthority(auth SysAuthority) (authority SysAuthority, err error) {
	err = db.DB().Where("authority_id = ?", auth.AuthorityId).First(&SysAuthority{}).Updates(&auth).Error
	return auth, err
}

func (s SysAuthority) SetDataAuthority(auth SysAuthority) error {
	db.DB().Preload("DataAuthorityId").First(&s, "authority_id = ?", auth.AuthorityId)
	err := db.DB().Model(&s).Association("DataAuthorityId").Replace(&auth.DataAuthorityId)
	return err
}
