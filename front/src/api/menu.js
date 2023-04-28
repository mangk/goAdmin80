import service from '@/utils/request'
// @Summary 用户登录 获取动态路由
// @Produce  application/json
// @Param 可以什么都不填 调一下即可
// @Router /menu/getMenu [post]
export const asyncMenu = () => {
    let data = {tree: true}
    return service({
        url: '/menu/getByUserId',
        method: 'post',
        data
    })
}


// @Summary 新增基础menu
// @Produce  application/json
// @Param menu Object
// @Router /menu/getMenuList [post]
export const addBaseMenu = (data) => {
    return service({
        url: '/menu/add',
        method: 'post',
        data
    })
}

// @Summary 获取基础路由列表
// @Produce  application/json
// @Param 可以什么都不填 调一下即可
// @Router /menu/getBaseMenuTree [post]
export const getAllMenuTree = (tree, loadSystem) => {
    let data = {tree: tree, loadSystem: loadSystem}
    return service({
        url: '/menu/getAll',
        method: 'post',
        data
    })
}

// @Summary 添加用户menu关联关系
// @Produce  application/json
// @Param menus Object authorityId string
// @Router /menu/getMenuList [post]
export const addMenuAuthority = (data) => {
    return service({
        url: '/menu/addMenuAuthority',
        method: 'post',
        data
    })
}

// @Summary 获取用户menu关联关系
// @Produce  application/json
// @Param authorityId string
// @Router /menu/getMenuAuthority [post]
export const getMenuAuthority = (data) => {
    return service({
        url: '/menu/getByAuthorityId',
        method: 'post',
        data
    })
}

// @Summary 删除menu
// @Produce  application/json
// @Param ID float64
// @Router /menu/deleteBaseMenu [post]
export const deleteBaseMenu = (data) => {
    return service({
        url: '/menu',
        method: 'delete',
        data
    })
}

// @Summary 修改menu列表
// @Produce  application/json
// @Param menu Object
// @Router /menu/updateBaseMenu [post]
export const updateBaseMenu = (data) => {
    return service({
        url: '/menu',
        method: 'patch',
        data
    })
}

// @Tags menu
// @Summary 根据id获取菜单
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body api.GetById true "根据id获取菜单"
// @Success 200 {string} json "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /menu/getBaseMenuById [post]
export const getMenuById = (data) => {
    return service({
        url: '/menu/getById',
        method: 'post',
        data
    })
}
