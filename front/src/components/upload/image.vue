<template>
  <div>
    <el-upload
        :action="`${path}/fileUploadAndDownload/upload?driver=${props.oss}`"
        :headers="{ 'Authorization': 'Bearer '+userStore.token }"
        :show-file-list="false"
        :on-success="handleImageSuccess"
        :before-upload="beforeImageUpload"
        :multiple="false"
    >
      <el-button type="primary">上传至{{ props.btnName }}</el-button>
    </el-upload>
  </div>
</template>

<script setup>
import ImageCompress from '@/utils/image'
import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/pinia/modules/user'

const emit = defineEmits(['on-success'])
const props = defineProps({
  imageUrl: {
    type: String,
    default: ''
  },
  fileSize: {
    type: Number,
    default: 2048 // 2M 超出后执行压缩
  },
  maxWH: {
    type: Number,
    default: 4096 // 图片长宽上限
  },
  btnName: {
    type: String,
    default: "上传"
  },
  oss: {
    type: String,
    default: ''
  }
})

const path = ref('/_sys')

const userStore = useUserStore()

const beforeImageUpload = (file) => {
  const isJPG = file.type === 'image/jpeg'
  const isPng = file.type === 'image/png'
  if (!isJPG && !isPng) {
    ElMessage.error('上传头像图片只能是 jpg或png 格式!')
    return false
  }

  const isRightSize = file.size / 1024 < props.fileSize
  if (!isRightSize) {
    ElMessage.error(`上传头像图片大小应小于 ${props.fileSize}KB`)
    return false
    // 压缩
    const compress = new ImageCompress(file, props.fileSize, props.maxWH)
    return compress.compress()
  }
  return isRightSize
}

const handleImageSuccess = (res) => {
  const {data} = res
  if (data.file) {
    emit('on-success', data.file.url)
  }
}

</script>

<script>

export default {
  name: 'UploadImage',
  methods: {}
}
</script>

<style lang="scss" scoped>
.image-uploader {
  border: 1px dashed #d9d9d9;
  width: 180px;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.image-uploader {
  border-color: #409eff;
}

.image-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.image {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
