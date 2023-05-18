<template>
  <div id="userLayout">
    <div class="login_panel">
      <div class="login_panel_form">
        <div class="login_panel_form_title">
          <img
              class="login_panel_form_title_logo"
              src="../../assets/goAdmin80.png"
              alt
          >
          <p class="login_panel_form_title_p">{{ sysInfoObj.name }}</p>
        </div>
        <el-form
            ref="loginForm"
            :model="loginFormData"
            :rules="rules"
            :validate-on-rule-change="false"
            @keyup.enter="submitForm"
        >
          <el-form-item prop="username">
            <el-input
                v-model="loginFormData.username"
                size="large"
                placeholder="请输入用户名"
                suffix-icon="user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="loginFormData.password"
                show-password
                size="large"
                type="password"
                placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item v-if="loginFormData.openCaptcha" prop="captcha">
            <div class="vPicBox">
              <el-input
                  v-model="loginFormData.captcha"
                  placeholder="请输入验证码"
                  size="large"
                  style="flex:1;padding-right: 20px;"
              />
              <div class="vPic">
                <img
                    v-if="picPath"
                    :src="picPath"
                    alt="请输入验证码"
                    @click="loginVerify()"
                >
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
                type="primary"
                size="large"
                style="width: 100%;"
                @click="submitForm"
            >登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_panel_right"/>
      <div class="login_panel_foot">
        <div class="links">
          <a href="https://github.com/mangk/goAdmin80" target="_blank" style="margin: 0 auto">
            <img src="@/assets/github.png" class="link-icon" alt="github">
          </a>
        </div>
        <div class="copyright">
          <BottomInfo/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<script setup>
import {captcha} from '@/api/user'
import {sysInfo} from "@/api/system";
import {checkDB} from '@/api/initdb'
import BottomInfo from '@/view/layout/bottomInfo/bottomInfo.vue'
import {getCurrentInstance, reactive, ref} from 'vue'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
import {useUserStore} from '@/pinia/modules/user'
import config from "@/core/config";

const router = useRouter()
// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 4) {
    return callback(new Error('请输入正确的用户名'))
  } else {
    callback()
  }
}
const checkPassword = (rule, value, callback) => {
  if (value.length < 4) {
    return callback(new Error('请输入正确的密码'))
  } else {
    callback()
  }
}

// 获取系统配置
const sysInfoObj = reactive({
  name: config.appName
})
const getSysInfo = () => {
  sysInfo().then(async (data) => {
    if (data.data.sysName !== "") {
      sysInfoObj.name = data.data.sysName
    }
  })
}
getSysInfo()

// 获取验证码
const loginVerify = () => {
  captcha({}).then(async (ele) => {
    rules.captcha.push({
      max: ele.data.captchaLength,
      min: ele.data.captchaLength,
      message: `请输入${ele.data.captchaLength}位验证码`,
      trigger: 'blur',
    })
    picPath.value = ele.data.picPath
    loginFormData.captchaId = ele.data.captchaId
    loginFormData.openCaptcha = ele.data.openCaptcha
  })
}
loginVerify()

// 登录相关操作
const loginForm = ref(null)
const picPath = ref('')
const loginFormData = reactive({
  username: '',
  password: '',
  captcha: '',
  captchaId: '',
  openCaptcha: false,
})
const rules = reactive({
  username: [{validator: checkUsername, trigger: 'blur'}],
  password: [{validator: checkPassword, trigger: 'blur'}],
  captcha: [
    {
      message: '验证码格式不正确',
      trigger: 'blur',
    },
  ],
})

const userStore = useUserStore()
const login = async () => {
  return await userStore.LoginIn(loginFormData)
}
const submitForm = () => {
  loginForm.value.validate(async (v) => {
    if (v) {
      const flag = await login()
      if (!flag) {
        loginVerify()
      }
    } else {
      ElMessage({
        type: 'error',
        message: '请正确填写登录信息',
        showClose: true,
      })
      loginVerify()
      return false
    }
  })
}

</script>

<style lang="scss" scoped>
@import "@/style/newLogin.scss";
</style>
