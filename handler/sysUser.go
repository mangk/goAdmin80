package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v8"
	"github.com/mangk/goAdmin80/cache"
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/handler/request"
	"github.com/mangk/goAdmin80/handler/response"
	"github.com/mangk/goAdmin80/log"
	"github.com/mangk/goAdmin80/model"
	"github.com/mangk/goAdmin80/utils"
	"go.uber.org/zap"
	"time"
)

func UserLogin(ctx *gin.Context) {

	login := struct {
		Username  string `json:"username"`  // 用户名
		Password  string `json:"password"`  // 密码
		Captcha   string `json:"captcha"`   // 验证码
		CaptchaId string `json:"captchaId"` // 验证码ID
	}{}
	err := ctx.ShouldBindJSON(&login)
	key := ctx.ClientIP()

	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = utils.Verify(login, utils.LoginVerify)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}

	// 判断验证码是否开启
	openCaptcha := config.CaptchaCfg().OpenCaptcha               // 是否开启防爆次数
	openCaptchaTimeOut := config.CaptchaCfg().OpenCaptchaTimeOut // 缓存超时时间

	v, ok := cache.Cache().Get(key)
	if !ok {
		cache.Cache().Set(key, 1, time.Second*time.Duration(openCaptchaTimeOut))
	}

	var oc = openCaptcha == 0 || openCaptcha < interfaceToInt(v)

	if !oc || store.UseWithCtx(ctx).Verify(login.CaptchaId, login.Captcha, true) {
		user, err := model.SysUser{}.Login(login.Username, login.Password)
		if err != nil {
			log.ZapLog().Error("登陆失败! 用户名不存在或者密码错误!", zap.Error(err))
			// 验证码次数+1
			cache.Cache().Increment(key, 1)
			response.FailWithMessage("用户名不存在或者密码错误", ctx)
			return
		}
		if user.Enable != 1 {
			log.ZapLog().Error("登陆失败! 用户被禁止登录!")
			// 验证码次数+1
			cache.Cache().Increment(key, 1)
			response.FailWithMessage("用户被禁止登录", ctx)
			return
		}
		TokenNext(ctx, *user)
		return
	}
	// 验证码次数+1
	cache.Cache().Increment(key, 1)
	response.FailWithMessage("验证码错误", ctx)
}

func UserPage(ctx *gin.Context) {
	var pageInfo request.PageInfo

	if err := ctx.ShouldBindJSON(&pageInfo); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(pageInfo, utils.PageInfoVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	list, total, err := model.SysUser{}.GetUserInfoList(pageInfo)
	if err != nil {
		log.ZapLog().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(response.PageResult{
		List:     list,
		Total:    total,
		Page:     pageInfo.Page,
		PageSize: pageInfo.PageSize,
	}, "获取成功", ctx)
}

func UserGetInfo(ctx *gin.Context) {
	uuid := model.GetUserUuid(ctx)
	ReqUser, err := model.SysUser{}.GetUserInfo(uuid)
	if err != nil {
		log.ZapLog().Error("获取失败!", zap.Error(err))
		response.FailWithMessage("获取失败", ctx)
		return
	}
	response.OkWithDetailed(ReqUser, "获取成功", ctx)
}

func UserRegister(ctx *gin.Context) {
	var r struct {
		Username     string `json:"userName" example:"用户名"`
		Password     string `json:"passWord" example:"密码"`
		NickName     string `json:"nickName" example:"昵称"`
		HeaderImg    string `json:"headerImg" example:"头像链接"`
		AuthorityId  int    `json:"authorityId" swaggertype:"string" example:"int 角色id"`
		Enable       int    `json:"enable" swaggertype:"string" example:"int 是否启用"`
		AuthorityIds []int  `json:"authorityIds" swaggertype:"string" example:"[]uint 角色id"`
		Phone        string `json:"phone" example:"电话号码"`
		Email        string `json:"email" example:"电子邮箱"`
	}
	if err := ctx.ShouldBindJSON(&r); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(r, utils.RegisterVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	var authorities []model.SysAuthority
	for _, v := range r.AuthorityIds {
		authorities = append(authorities, model.SysAuthority{
			AuthorityId: v,
		})
	}
	user := &model.SysUser{Username: r.Username, NickName: r.NickName, Password: r.Password, HeaderImg: r.HeaderImg, AuthorityId: r.AuthorityId, Authorities: authorities, Enable: r.Enable, Phone: r.Phone, Email: r.Email}
	userReturn, err := user.Register()
	if err != nil {
		log.ZapLog().Error("注册失败!", zap.Error(err))
		response.FailWithDetailed(userReturn, "注册失败", ctx)
		return
	}
	response.OkWithDetailed(userReturn, "注册成功", ctx)

}

func UserChangePassword(ctx *gin.Context) {
	var req struct {
		Password    string `json:"password"`    // 密码
		NewPassword string `json:"newPassword"` // 新密码
	}
	// TODO 修改密码没生效
	if err := ctx.ShouldBindJSON(&req); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(req, utils.ChangePasswordVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	uid := model.GetUserID(ctx)
	u := &model.SysUser{MODEL: model.MODEL{ID: uid}, Password: req.Password}

	if _, err := u.ChangePassword(req.NewPassword); err != nil {
		log.ZapLog().Error("修改失败!", zap.Error(err))
		response.FailWithMessage("修改失败，原密码与当前账户不符", ctx)
		return
	}
	// TODO 修改成功后让 jwt 失效
	response.OkWithMessage("修改成功", ctx)
}

func UserSetAuthority(ctx *gin.Context) {
	//var sua struct {
	//	AuthorityId int `json:"authorityId"`
	//}
	//
	//if err := ctx.ShouldBindJSON(&sua); err != nil {
	//	response.FailWithMessage(err.Error(), ctx)
	//	return
	//}
	//if UserVerifyErr := utils.Verify(sua, utils.SetUserAuthorityVerify); UserVerifyErr != nil {
	//	response.FailWithMessage(UserVerifyErr.Error(), ctx)
	//	return
	//}
	//userID := model.GetUserID(ctx)
	//
	//u := &model.SysUser{MODEL: model.MODEL{ID: userID}, AuthorityId: sua.AuthorityId}
	////userID, sua.AuthorityId
	//if err := u.SetUserAuthority(); err != nil {
	//	log.ZapLog().Error("修改失败!", zap.Error(err))
	//	response.FailWithMessage(err.Error(), ctx)
	//	return
	//}
	//claims := model.GetUserInfo(ctx)
	//j := &model.Jwt{SigningKey: []byte(core.Config().JWT.SigningKey)} // 唯一签名
	//claims.AuthorityId = sua.AuthorityId
	//if token, err := j.CreateToken(*claims); err != nil {
	//	log.ZapLog().Error("修改失败!", zap.Error(err))
	//	response.FailWithMessage(err.Error(), ctx)
	//} else {
	//	// TODO 关于这里需要注意一下，如果是改别人的权限，还设置 token 吗，这里是怎么配合前端生效的
	//	ctx.Header("new-token", token)
	//	ctx.Header("new-expires-at", strconv.FormatInt(claims.ExpiresAt, 10))
	//	response.OkWithMessage("修改成功", ctx)
	//}
}

func UserDelete(ctx *gin.Context) {
	var reqId struct {
		ID int `json:"id" form:"id"` // 主键ID
	}
	if err := ctx.ShouldBindJSON(&reqId); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(reqId, utils.IdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if model.GetUserID(ctx) == reqId.ID {
		response.FailWithMessage("删除失败, 自杀失败", ctx)
		return
	}
	if err := (model.SysUser{}).DeleteUser(reqId.ID); err != nil {
		log.ZapLog().Error("删除失败!", zap.Error(err))
		response.FailWithMessage("删除失败", ctx)
		return
	}
	response.OkWithMessage("删除成功", ctx)
}

func UserSetInfo(ctx *gin.Context) {
	var user struct {
		ID           int                  `gorm:"primarykey"`                                // 主键ID
		NickName     string               `json:"nickName" gorm:"default:系统用户;comment:用户昵称"` // 用户昵称
		Phone        string               `json:"phone"  gorm:"comment:用户手机号"`               // 用户手机号
		AuthorityIds []int                `json:"authorityIds" gorm:"-"`                     // 角色ID
		Email        string               `json:"email"  gorm:"comment:用户邮箱"`                // 用户邮箱
		HeaderImg    string               `json:"headerImg" gorm:"comment:用户头像"`             // 用户头像
		SideMode     string               `json:"sideMode"  gorm:"comment:用户侧边主题"`           // 用户侧边主题
		Enable       int                  `json:"enable" gorm:"comment:冻结用户"`                //冻结用户
		Authorities  []model.SysAuthority `json:"-" gorm:"many2many:sys_user_authority;"`
	}
	if err := ctx.ShouldBindJSON(&user); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	if err := utils.Verify(user, utils.IdVerify); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	u := model.SysUser{MODEL: model.MODEL{ID: user.ID}}
	if len(user.AuthorityIds) != 0 {
		if err := u.SetUserAuthorities(user.AuthorityIds); err != nil {
			log.ZapLog().Error("设置失败!", zap.Error(err))
			response.FailWithMessage("设置失败", ctx)
			return
		}
	}
	err := u.SetUserInfo(model.SysUser{
		MODEL: model.MODEL{
			ID: user.ID,
		},
		NickName:  user.NickName,
		HeaderImg: user.HeaderImg,
		Phone:     user.Phone,
		Email:     user.Email,
		SideMode:  user.SideMode,
		Enable:    user.Enable,
	})
	if err != nil {
		log.ZapLog().Error("设置失败!", zap.Error(err))
		response.FailWithMessage("设置失败", ctx)
		return
	}
	response.OkWithMessage("设置成功", ctx)
}

func SetSelfInfo(ctx *gin.Context) {
	var user struct {
		ID           int                  `gorm:"primarykey"`                                                                           // 主键ID
		NickName     string               `json:"nickName" gorm:"default:系统用户;comment:用户昵称"`                                            // 用户昵称
		Phone        string               `json:"phone"  gorm:"comment:用户手机号"`                                                          // 用户手机号
		AuthorityIds []uint               `json:"authorityIds" gorm:"-"`                                                                // 角色ID
		Email        string               `json:"email"  gorm:"comment:用户邮箱"`                                                           // 用户邮箱
		HeaderImg    string               `json:"headerImg" gorm:"default:https://qmplusimg.henrongyi.top/gva_header.jpg;comment:用户头像"` // 用户头像
		SideMode     string               `json:"sideMode"  gorm:"comment:用户侧边主题"`                                                      // 用户侧边主题
		Enable       int                  `json:"enable" gorm:"comment:冻结用户"`                                                           //冻结用户
		Authorities  []model.SysAuthority `json:"-" gorm:"many2many:sys_user_authority;"`
	}

	err := ctx.ShouldBindJSON(&user)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	user.ID = model.GetUserID(ctx)
	err = model.SysUser{}.SetSelfInfo(model.SysUser{
		MODEL: model.MODEL{
			ID: user.ID,
		},
		NickName:  user.NickName,
		HeaderImg: user.HeaderImg,
		Phone:     user.Phone,
		Email:     user.Email,
		SideMode:  user.SideMode,
		Enable:    user.Enable,
	})
	if err != nil {
		log.ZapLog().Error("设置失败!", zap.Error(err))
		response.FailWithMessage("设置失败", ctx)
		return
	}
	response.OkWithMessage("设置成功", ctx)
}

func UserSetAuthorities(ctx *gin.Context) {
	var sua struct {
		ID           int
		AuthorityIds []int `json:"authorityIds"` // 角色ID
	}
	if err := ctx.ShouldBindJSON(&sua); err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	u := model.SysUser{MODEL: model.MODEL{ID: sua.ID}}
	if err := u.SetUserAuthorities(sua.AuthorityIds); err != nil {
		log.ZapLog().Error("修改失败!", zap.Error(err))
		response.FailWithMessage("修改失败", ctx)
		return
	}
	response.OkWithMessage("修改成功", ctx)
}

func UserResetPassword(ctx *gin.Context) {
	var user model.SysUser
	err := ctx.ShouldBindJSON(&user)
	if err != nil {
		response.FailWithMessage(err.Error(), ctx)
		return
	}
	err = user.ResetPassword()
	if err != nil {
		log.ZapLog().Error("重置失败!", zap.Error(err))
		response.FailWithMessage("重置失败"+err.Error(), ctx)
		return
	}
	response.OkWithMessage("重置成功", ctx)
}

func TokenNext(ctx *gin.Context, user model.SysUser) {
	j := &model.Jwt{SigningKey: []byte(config.JwtCfg().SigningKey)} // 唯一签名
	ids := []int{}
	for _, authority := range user.Authorities {
		ids = append(ids, authority.AuthorityId)
	}

	claims := j.CreateClaims(model.BaseClaims{
		UUID:        user.UUID,
		ID:          user.ID,
		NickName:    user.NickName,
		Username:    user.Username,
		AuthorityId: ids,
	})
	token, err := j.CreateToken(claims)
	if err != nil {
		log.ZapLog().Error("获取token失败!", zap.Error(err))
		response.FailWithMessage("获取token失败", ctx)
		return
	}
	if !config.ServerCfg().UseMultipoint {
		response.OkWithDetailed(map[string]interface{}{
			"user":      user,
			"token":     token,
			"expiresAt": claims.StandardClaims.ExpiresAt * 1000,
		}, "登录成功", ctx)
		return
	}
	jwt := model.Jwt{}

	if jwtStr, err := jwt.GetRedisJWT(user.Username); err == redis.Nil {
		if err := jwt.SetRedisJWT(token, user.Username); err != nil {
			log.ZapLog().Error("设置登录状态失败!", zap.Error(err))
			response.FailWithMessage("设置登录状态失败", ctx)
			return
		}
		response.OkWithDetailed(map[string]interface{}{
			"user":      user,
			"token":     token,
			"expiresAt": claims.StandardClaims.ExpiresAt * 1000,
		}, "登录成功", ctx)
		return
	} else if err != nil {
		log.ZapLog().Error("设置登录状态失败!", zap.Error(err))
		response.FailWithMessage("设置登录状态失败", ctx)
	} else {
		var blackJWT model.SysJwtBlacklist
		blackJWT.Jwt = jwtStr
		if err := jwt.JsonInBlacklist(blackJWT); err != nil {
			response.FailWithMessage("jwt作废失败", ctx)
			return
		}
		if err := jwt.SetRedisJWT(token, user.Username); err != nil {
			response.FailWithMessage("设置登录状态失败", ctx)
			return
		}
		response.OkWithDetailed(map[string]interface{}{
			"user":      user,
			"token":     token,
			"expiresAt": claims.StandardClaims.ExpiresAt * 1000,
		}, "登录成功", ctx)
	}

}
