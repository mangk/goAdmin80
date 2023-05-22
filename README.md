# goAdmin80

## 介绍

`goAmin80`是一个可以快速创建管理后台框架。使用gin作为http框架，casbin与jwt做权限校验，elementPlus生成管理后台ui。

一个只想做到8⃣️0⃣️分的后端管理框架

## 特性

## quick start


### 完善的日志

- 完善的后端管理功能
- 

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
    - 基础数据库构建
    - 多缓存支持
    - OSS支持
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
