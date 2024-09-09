import config from './config'

// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'
import http from '@/utils/requestForConvert'
import axios from 'axios'
import { dayjs } from "element-plus";
import * as xlsx from 'xlsx'
import * as echarts from 'echarts'
import { myConvert } from '../components/convert';

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
    app.config.globalProperties.$loadTMPL = myConvert
    app.config.globalProperties.$loadJS = (url, callback) => {
        // 检查是否已经加载过该脚本
        if (document.querySelector(`script[src="${url}"]`)) {
            callback();
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // 当脚本加载完成后执行回调
        script.onload = () => {
            if (typeof callback === 'function') {
                callback();
            }
        };

        // 将脚本插入到页面中
        document.head.appendChild(script);
    }
}
