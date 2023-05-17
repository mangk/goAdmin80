# goAdmin80

一个只想做到8⃣️0⃣️分的后端管理框架

# 项目介绍

# 项目使用

## 系统默认功能

- youRouterPath/c(创建｜POST)
- youRouterPath/r(根据id读取｜POST)
- youRouterPath/u(根据id更新｜PATCH)
- youRouterPath/d(删除｜DELETE)
- youRouterPath/p(分页数据｜POST)
- youRouterPath/tmp(VUE模版｜GET)

六个默认接口，你可以通过`engine`
包提供的`RegisterGetHandler`、`RegisterPostHandler`、`RegisterPatchHandler`、`RegisterDeleteHandler`
四个方法覆盖系统提供的路由来实现自己对数据库的查询与操作。也可以通过实现`engine`包下的`DataOrigin`
接口并通过参数传递给`Options.CustimDataOrigin`来一次性覆盖所有crud接口

# TODO List

- 前端
    - 前端项目完善
    - 前端项目打包
- 后台
    - 页面模版支持
    - 基础数据库构建
    - 多数据库、缓存支持
    - OSS支持
    - golang embed 支持
    - 网站名称设置
- docker 支持
- bugfix
- 示例制作
- 单元测试
-

# 鸣谢

- 灵感来自 [go-admin](https://github.com/GoAdminGroup/go-admin)

# 特别鸣谢

- [liruifengv](https://github.com/liruifengv) 指导我解决了前端异步加载 VUE
  组件的问题 ➡️ [demo 传送门](https://github.com/liruifengv/convert-sfc-string-2-component)

# 特别特别鸣谢

- [gin-vue-admin](https://github.com/flipped-aurora/gin-vue-admin)：后端 golang 与前端的 vue 部分代码借鉴自此项目
