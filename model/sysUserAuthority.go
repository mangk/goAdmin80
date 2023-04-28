package model

import "github.com/mangk/goAdmin80/core"

type SysUserAuthority struct {
	SysUserId               int `gorm:"column:sys_user_id"`
	SysAuthorityAuthorityId int `gorm:"column:sys_authority_authority_id"`
}

func (s SysUserAuthority) TableName() string {
	return "sys_user_authority"
}

func (s SysUserAuthority) GetAuthorityAuthorityIdByUserId(uid int) (aid []int) {
	res := []SysUserAuthority{}
	core.DB().Where("sys_user_id = ?", uid).Find(&res)
	for _, v := range res {
		aid = append(aid, v.SysAuthorityAuthorityId)
	}
	return
}
