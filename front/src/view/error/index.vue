<template>
  <div>
    <div class="big">
      <div class="inner">
        <img src="../../assets/notFound.png">
        <p>页面被神秘力量吸走了</p>
        <div class="inner_btn_box">
          <el-button @click="logout()">退出登录</el-button>
          <el-button @click="home()">返回首页</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/pinia/modules/user'
export default {
  name: 'Error',
  methods: {
    logout() {
      var u = useUserStore()
      u.LoginOut()
    },
    home() {
      window.location.replace(window.location.origin)
    }
  }
}
</script>

<style lang="scss">
.big {
  width: 100%;
  height: calc(100vh - 220px);
  background-color: rgb(244, 244, 244);
  position: relative;
}

.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inner p {
  text-align: center;
  font-size: 24px;
}

.inner_btn_box {
  display: flex;
  justify-content: center;
}

.inner .leftPic {
  width: 60px;
  height: 60px;
  margin-left: 44%;
  margin-top: 20px;
}
</style>
