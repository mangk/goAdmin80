<template>
  <div class="bottom-info">
    <div>
      <span>Powered by goAdmin80</span>
<!--      <span>-->
<!--        <a href="https://github.com/flipped-aurora/gin-vue-admin">{{ $GO_ADMIN_80.appName }}</a>-->
<!--      </span>-->
<!--      <el-divider direction="vertical" />-->
<!--      <span>Copyright</span>-->
<!--      <span>-->
<!--        <a href="https://github.com/flipped-aurora">flipped-aurora团队</a>-->
<!--      </span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomInfo'
}
</script>

<style lang="scss">
.bottom-info {
  color: #888;
  height: 20px;
  line-height: 12px;
  a {
    color: #888;
  }
  div {
    display: flex;
    justify-content: center;
    span{
      margin: 0 3px;
    }
  }
}
</style>
