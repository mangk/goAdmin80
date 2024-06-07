import {getUserInfo, login, setSelfInfo} from '@/api/user'
import {jsonInBlacklist} from '@/api/jwt'
import router from '@/router/index'
import {ElLoading, ElMessage} from 'element-plus'
import {defineStore} from 'pinia'
import {computed, ref, watch} from 'vue'
import {useRouterStore} from './router'

export const useUserStore = defineStore('user', () => {
    const loadingInstance = ref(null)

    const userInfo = ref({
        uuid: '',
        nickName: '',
        headerImg: '',
        authority: {},
        sideMode: 'dark',
        activeColor: 'var(--el-color-primary)',
        baseColor: '#fff'
    })
    const token = ref(window.localStorage.getItem('token') || '')
    const setUserInfo = (val) => {
        userInfo.value = val
    }

    const setToken = (val) => {
        token.value = val
    }

    const NeedInit = () => {
        token.value = ''
        window.localStorage.removeItem('token')
        localStorage.clear()
        router.push({name: 'Init', replace: true})
    }

    const ResetUserInfo = (value = {}) => {
        userInfo.value = {
            ...userInfo.value,
            ...value
        }
    }
    /* 获取用户信息*/
    const GetUserInfo = async () => {
        const res = await getUserInfo()
        if (res.code === 0) {
            setUserInfo(res.data)
        }
        return res
    }
    /* 登录*/
    const LoginIn = async (loginInfo) => {
        loadingInstance.value = ElLoading.service({
            fullscreen: true,
            text: '登录中，请稍候...',
        })
        try {
            const res = await login(loginInfo)
            if (res.code === 0) {
                setUserInfo(res.data.user)
                setToken(res.data.token)
                const routerStore = useRouterStore()
                await routerStore.SetAsyncRouter()
                const asyncRouters = routerStore.asyncRouters
                asyncRouters.forEach(asyncRouter => {
                    router.addRoute(asyncRouter)
                })

                var defaultRouter = userInfo.value.authority.defaultRouter
                var redirect = document.location.hash
                if (redirect.indexOf("redirect") != -1) {
                    var r = redirect.split("/")
                    if (r.length>0) {
                        defaultRouter = r.pop()
                    }
                }
                
                await router.replace({name: defaultRouter})
                loadingInstance.value.close()

                const isWin = ref(/windows/i.test(navigator.userAgent))
                if (isWin.value) {
                    window.localStorage.setItem('osType', 'WIN')
                } else {
                    window.localStorage.setItem('osType', 'MAC')
                }
                return true
            }
        } catch (e) {
            loadingInstance.value.close()
        }
        loadingInstance.value.close()
    }
    /* 登出*/
    const LoginOut = async () => {
        const res = await jsonInBlacklist()
        if (res.code === 0) {
            token.value = ''
            sessionStorage.clear()
            localStorage.clear()
            router.push({name: 'Login', replace: true})
            window.location.reload()
        }
    }
    /* 清理数据 */
    const ClearStorage = async () => {
        token.value = ''
        sessionStorage.clear()
        localStorage.clear()
    }
    /* 设置侧边栏模式*/
    const changeSideMode = async (data) => {
        const res = await setSelfInfo({sideMode: data})
        if (res.code === 0) {
            userInfo.value.sideMode = data
            ElMessage({
                type: 'success',
                message: '设置成功'
            })
        }
    }

    const mode = computed(() => userInfo.value.sideMode)
    const sideMode = computed(() => {
        if (userInfo.value.sideMode === 'dark') {
            return '#191a23'
        } else if (userInfo.value.sideMode === 'light') {
            return '#fff'
        } else {
            return userInfo.value.sideMode
        }
    })
    const baseColor = computed(() => {
        if (userInfo.value.sideMode === 'dark') {
            return '#fff'
        } else if (userInfo.value.sideMode === 'light') {
            return '#191a23'
        } else {
            return userInfo.value.baseColor
        }
    })
    const activeColor = computed(() => {
        return 'var(--el-color-primary)'
    })

    watch(() => token.value, () => {
        window.localStorage.setItem('token', token.value)
    })

    return {
        userInfo,
        token,
        NeedInit,
        ResetUserInfo,
        GetUserInfo,
        LoginIn,
        LoginOut,
        changeSideMode,
        mode,
        sideMode,
        setToken,
        baseColor,
        activeColor,
        loadingInstance,
        ClearStorage
    }
})
