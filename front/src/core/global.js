import config from './config'

// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'
import http from '@/utils/requestForConvert'
import axios from 'axios'
import {dayjs} from "element-plus";
import * as xlsx from 'xlsx'
import * as echarts from 'echarts'

// 导入转换图标名称的函数

export const register = (app) => {
    // 统一注册el-icon图标
    for (const iconName in ElIconModules) {
        app.component(iconName, ElIconModules[iconName])
    }
    app.config.globalProperties.$GO_ADMIN_80 = config

    // TODO 下面的使用会不会有性能问题
    app.config.globalProperties.$http = http
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$echarts = echarts
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$xlsx = xlsx
}
