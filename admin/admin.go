package admin

import (
	"github.com/mangk/goAdmin80/config"
	"github.com/mangk/goAdmin80/core"
	"github.com/mangk/goAdmin80/handler"
	"github.com/mangk/goAdmin80/middleware"
	"net/http"
)

func init() {
	core.ModuleAdd(a{})
}

type a struct {
}

func (a) Init() uint8 {
	root := core.HttpEngine()

	root.Use(middleware.CorsByRules())

	// ----------注册系统本地上传静态文件----------
	for _, cfg := range config.FileCfg() {
		if cfg.Driver == "local" {
			root.StaticFS(cfg.PrefixPath, http.Dir(cfg.StorePath))
		}
	}

	// ----------系统初始化 start----------
	sysGroup := root.Group("_sys")

	// ----------注册系统默认 api----------
	{
		{
			sysGroup.POST("login", handler.UserLogin)
			sysGroup.POST("captcha", handler.Captcha)
		}
		sysGroup.Use(middleware.JWTAuth()).Use(middleware.CasbinHandler()) // 增加鉴权
		{
			apiRouter := sysGroup.Group("api")
			apiRouter.POST("all", handler.ApiAll)   // 获取所有api
			apiRouter.POST("page", handler.ApiPage) // 获取Api列表

			apiRouter.Use(middleware.OperationRecord())
			apiRouter.POST("getById", handler.ApiGetById) // 获取单条Api信息
			apiRouter.POST("", handler.ApiCreate)         // 创建Api
			apiRouter.PATCH("", handler.ApiUpdate)        // 更新api
			apiRouter.DELETE("", handler.ApiDeleteByIds)  // 删除Api
		}
		{
			jwtRouter := sysGroup.Group("jwt")
			jwtRouter.POST("jsonInBlacklist", handler.JwtJsonInBlacklist) // jwt加入黑名单
		}
		{
			userRouter := sysGroup.Group("user")
			userRouter.POST("page", handler.UserPage)           // 分页获取用户列表
			userRouter.POST("getUserInfo", handler.UserGetInfo) // 获取自身信息

			userRouter.Use(middleware.OperationRecord())
			userRouter.POST("adminRegister", handler.UserRegister)         // 管理员注册账号
			userRouter.PATCH("changePassword", handler.UserChangePassword) // 用户修改密码
			//userRouter.PATCH("setUserAuthority", handler.UserSetAuthority)     // 设置用户权限
			userRouter.PATCH("setUserInfo", handler.UserSetInfo)               // 设置用户信息
			userRouter.PATCH("setSelfInfo", handler.SetSelfInfo)               // 设置用户信息
			userRouter.PATCH("setUserAuthorities", handler.UserSetAuthorities) // 设置用户权限组
			userRouter.PATCH("resetPassword", handler.UserResetPassword)       // 重置密码
			userRouter.DELETE("", handler.UserDelete)                          // 删除用户
		}
		{
			menuRouter := sysGroup.Group("menu")
			menuRouter.POST("getAll", handler.MenuAll)                   // 获取全部菜单
			menuRouter.POST("getByUserId", handler.MenuByUser)           // 依据用户获取菜单
			menuRouter.POST("getByAuthorityId", handler.MenuByAuthority) // 依据角色id获取菜单
			menuRouter.POST("getById", handler.MenuById)                 // 根据id获取菜单

			menuRouter.Use(middleware.OperationRecord())
			menuRouter.POST("add", handler.MenuAdd)                       // 新增菜单
			menuRouter.POST("addMenuAuthority", handler.MenuAddAuthority) // 增加menu和角色关联关系
			menuRouter.DELETE("", handler.MenuDelete)                     // 删除菜单
			menuRouter.PATCH("", handler.MenuUpdate)                      // 更新菜单
		}
		{
			casbinRouter := sysGroup.Group("casbin")
			casbinRouter.POST("getPolicyPathByAuthorityId", handler.CasbinGetPolicyPathByAuthorityId) // 权限相关路由

			casbinRouter.Use(middleware.OperationRecord()).PATCH("", handler.CasbinUpdate)
		}
		{
			authorityRouter := sysGroup.Group("authority")
			authorityRouter.POST("page", handler.AuthorityPage) // 获取角色列表

			authorityRouter.Use(middleware.OperationRecord())
			authorityRouter.POST("", handler.AuthorityCreate)                   // 创建角色
			authorityRouter.DELETE("", handler.AuthorityDelete)                 // 删除角色
			authorityRouter.PATCH("", handler.AuthorityUpdate)                  // 更新角色
			authorityRouter.PATCH("setDataAuthority", handler.AuthoritySetData) // 设置角色资源权限
		}
		{
			operationRecordRouter := sysGroup.Group("sysOperationRecord")
			operationRecordRouter.DELETE("", handler.OperationRecordDelete)                     // 删除SysOperationRecord
			operationRecordRouter.GET("findSysOperationRecord", handler.OperationRecordGetById) // 根据ID获取SysOperationRecord
			operationRecordRouter.GET("getSysOperationRecordList", handler.OperationRecordPage) // 获取SysOperationRecord列表
		}
		{
			fileUploadAndDownloadRouter := sysGroup.Group("fileUploadAndDownload")
			fileUploadAndDownloadRouter.POST("upload", handler.FileUpload)                                     // 上传文件
			fileUploadAndDownloadRouter.POST("getFileList", handler.FileList)                                  // 获取上传文件列表
			fileUploadAndDownloadRouter.POST("deleteFile", handler.FileDelete)                                 // 删除指定文件
			fileUploadAndDownloadRouter.POST("editFileName", handler.FileEditName)                             // 编辑文件名或者备注
			fileUploadAndDownloadRouter.POST("breakpointContinue", handler.FileBreakpointContinue)             // 断点续传
			fileUploadAndDownloadRouter.GET("findFile", handler.FileFind)                                      // 查询当前文件成功的切片
			fileUploadAndDownloadRouter.POST("breakpointContinueFinish", handler.FileBreakpointContinueFinish) // 切片传输完成
			fileUploadAndDownloadRouter.POST("removeChunk", handler.FileRemoveChunk)                           // 删除切片
			fileUploadAndDownloadRouter.GET("cfg", handler.FileGetUploadLimit)                                 // 获取文件上传大小限制
		}
	}

	return core.ModuleAdmin
}
