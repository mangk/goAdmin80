package model

import (
	"github.com/mangk/goAdmin80/core"
)

type SysAuthorityMenu struct {
	MenuId      int `json:"menuId" gorm:"comment:菜单ID;column:sys_menu_id"`
	AuthorityId int `json:"-" gorm:"comment:角色ID;column:sys_authority_authority_id"`
}

func (s SysAuthorityMenu) TableName() string {
	return "sys_authority_menus"
}

func (s SysAuthorityMenu) GetMenuIdsByAuthorityIds(ids []int) (menuIds []int) {
	res := []SysAuthorityMenu{}
	core.DB().Where("sys_authority_authority_id in ?", ids).Find(&res)
	for _, v := range res {
		menuIds = append(menuIds, v.MenuId)
	}
	return
}

func (s SysAuthorityMenu) SaveAuthority(authorityId int, menus []SysMenu) error {
	if err := core.DB().Where("sys_authority_authority_id = ?", authorityId).Delete(&s).Error; err != nil {
		return err
	}
	data := []SysAuthorityMenu{}
	for _, menu := range menus {
		data = append(data, SysAuthorityMenu{
			MenuId:      menu.ID,
			AuthorityId: authorityId,
		})
	}
	if err := core.DB().CreateInBatches(data, len(data)).Error; err != nil {
		return err
	}
	return nil
}
