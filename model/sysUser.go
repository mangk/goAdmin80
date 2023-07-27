package model

import (
	"errors"
	"github.com/mangk/goAdmin80/db"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/utils"
	"github.com/satori/go.uuid"
	"gorm.io/gorm"
	"time"
)

type SysUser struct {
	MODEL
	UUID        uuid.UUID      `json:"uuid" gorm:"index;comment:用户UUID"`                // 用户UUID
	Username    string         `json:"userName" gorm:"index;comment:用户登录名"`             // 用户登录名
	Password    string         `json:"-"  gorm:"comment:用户登录密码"`                        // 用户登录密码
	NickName    string         `json:"nickName" gorm:"default:系统用户;comment:用户昵称"`       // 用户昵称
	SideMode    string         `json:"sideMode" gorm:"default:dark;comment:用户侧边主题"`     // 用户侧边主题
	HeaderImg   string         `json:"headerImg" gorm:"comment:用户头像"`                   // 用户头像
	BaseColor   string         `json:"baseColor" gorm:"default:#fff;comment:基础颜色"`      // 基础颜色
	ActiveColor string         `json:"activeColor" gorm:"default:#1890ff;comment:活跃颜色"` // 活跃颜色
	AuthorityId int            `json:"authorityId" gorm:"default:888;comment:用户角色ID"`   // 用户角色ID
	Authority   SysAuthority   `json:"authority" gorm:"foreignKey:AuthorityId;references:AuthorityId;comment:用户角色"`
	Authorities []SysAuthority `json:"authorities" gorm:"many2many:sys_user_authority;"`
	Phone       string         `json:"phone"  gorm:"comment:用户手机号"`                     // 用户手机号
	Email       string         `json:"email"  gorm:"comment:用户邮箱"`                      // 用户邮箱
	Enable      int            `json:"enable" gorm:"default:1;comment:用户是否被冻结 1正常 2冻结"` //用户是否被冻结 1正常 2冻结
}

func (SysUser) TableName() string {
	return "sys_users"
}

func (s SysUser) Login(username, password string) (user *SysUser, err error) {

	user = &SysUser{}
	err = db.DB().Where("username = ?", username).Preload("Authorities").Preload("Authority").First(user).Error
	if err == nil {
		if ok := utils.BcryptCheck(password, user.Password); !ok {
			return nil, errors.New("密码错误")
		}
	}
	return
}

func (s SysUser) GetUserInfoList(info request.PageInfo) (list interface{}, total int64, err error) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
	cdb := db.DB().Model(&SysUser{})
	var userList []SysUser
	err = cdb.Count(&total).Error
	if err != nil {
		return
	}
	err = cdb.Limit(limit).Offset(offset).Preload("Authorities").Preload("Authority").Find(&userList).Error
	return userList, total, err
}

func (s SysUser) GetUserInfo(uuid uuid.UUID) (user SysUser, err error) {
	var reqUser SysUser
	err = db.DB().Preload("Authorities").Preload("Authority").First(&reqUser, "uuid = ?", uuid).Error
	if err != nil {
		return reqUser, err
	}
	return reqUser, err
}

func (s SysUser) Register() (userInter SysUser, err error) {
	var user SysUser
	if !errors.Is(db.DB().Where("username = ?", s.Username).First(&user).Error, gorm.ErrRecordNotFound) { // 判断用户名是否注册
		return userInter, errors.New("用户名已注册")
	}
	// TODO 创建用户涉及到多表操作，需要开启事务
	// 否则 附加uuid 密码hash加密 注册
	s.Password = utils.BcryptHash(s.Password)
	s.UUID = uuid.NewV4()
	err = db.DB().Create(&s).Error
	return s, err
}

func (s SysUser) ChangePassword(newPassword string) (userInter *SysUser, err error) {
	var user SysUser
	if err = db.DB().Where("id = ?", s.ID).First(&user).Error; err != nil {
		return nil, err
	}
	if ok := utils.BcryptCheck(s.Password, user.Password); !ok {
		return nil, errors.New("原密码错误")
	}
	user.Password = utils.BcryptHash(newPassword)
	err = db.DB().Save(&user).Error
	return &user, err
}

func (s SysUser) SetUserAuthority() (err error) {
	assignErr := db.DB().Where("sys_user_id = ? AND sys_authority_authority_id = ?", s.ID, s.AuthorityId).First(&SysUserAuthority{}).Error
	if errors.Is(assignErr, gorm.ErrRecordNotFound) {
		return errors.New("该用户无此角色")
	}
	err = db.DB().Where("id = ?", s.ID).First(&SysUser{}).Update("authority_id", s.AuthorityId).Error
	return err
}

func (s SysUser) DeleteUser(id int) (err error) {
	var user SysUser
	err = db.DB().Where("id = ?", id).Delete(&user).Error
	if err != nil {
		return err
	}
	err = db.DB().Delete(&[]SysUserAuthority{}, "sys_user_id = ?", id).Error
	return err
}

func (s SysUser) SetUserAuthorities(authorityIds []int) (err error) {
	return db.DB().Transaction(func(tx *gorm.DB) error {
		TxErr := tx.Delete(&[]SysUserAuthority{}, "sys_user_id = ?", s.ID).Error
		if TxErr != nil {
			return TxErr
		}
		var useAuthority []SysUserAuthority
		for _, v := range authorityIds {
			useAuthority = append(useAuthority, SysUserAuthority{
				SysUserId: s.ID, SysAuthorityAuthorityId: v,
			})
		}
		TxErr = tx.Create(&useAuthority).Error
		if TxErr != nil {
			return TxErr
		}
		TxErr = tx.Where("id = ?", s.ID).First(&SysUser{}).Update("authority_id", authorityIds[0]).Error
		if TxErr != nil {
			return TxErr
		}
		// 返回 nil 提交事务
		return nil
	})
}

func (s SysUser) SetUserInfo(req SysUser) error {
	return db.DB().Model(&SysUser{}).
		Select("updated_at", "nick_name", "header_img", "phone", "email", "sideMode", "enable").
		Where("id=?", req.ID).
		Updates(map[string]interface{}{
			"updated_at": time.Now(),
			"nick_name":  req.NickName,
			"header_img": req.HeaderImg,
			"phone":      req.Phone,
			"email":      req.Email,
			"side_mode":  req.SideMode,
			"enable":     req.Enable,
		}).Error
}

func (s SysUser) ResetPassword() (err error) {
	// TODO 随机密码，并发送邮件或短信等形式来告诉用户密码
	password := "123456"
	err = db.DB().Model(&SysUser{}).Where("id = ?", s.ID).Update("password", utils.BcryptHash(password)).Error
	return err
}

func (s SysUser) SetSelfInfo(req SysUser) error {
	return db.DB().Model(&SysUser{}).
		Where("id=?", req.ID).
		Updates(req).Error
}
