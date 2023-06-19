<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <div class="gva-table-box">
      <warning-bar
          title="点击“文件名/备注”可以编辑文件名或者备注内容。"
      />
      <div class="gva-btn-list">
        <!--        <upload-common-->
        <!--          v-model:imageCommon="imageCommon"-->
        <!--          class="upload-btn"-->
        <!--          @on-success="getTableData"-->
        <!--        />-->
        <upload-image v-for="cfg in uploadCfg" :key="cfg.driver"
                      v-model:imageUrl="imageUrl"
                      :file-size="cfg.limit"
                      :btn-name="cfg.name"
                      :oss="cfg.driver"
                      class="upload-btn"
                      @on-success="getTableData"
        />

        <el-form ref="searchForm" :inline="true" :model="search">
          <el-form-item label="">
            <el-input v-model="search.keyword" class="keyword" placeholder="请输入文件名或备注"/>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" icon="search" @click="getTableData">查询</el-button>
          </el-form-item>
        </el-form>

      </div>

      <el-table :data="tableData">
        <el-table-column align="left" label="预览" width="100">
          <template #default="scope">
            <CustomPic pic-type="file" :pic-src="scope.row.url[0] == '/' ? scope.row.url : 'https://'+scope.row.url"/>
          </template>
        </el-table-column>
        <el-table-column align="left" label="日期" prop="UpdatedAt" width="180">
          <template #default="scope">
            <div>{{ formatDate(scope.row.ut) }}</div>
          </template>
        </el-table-column>
        <el-table-column align="left" label="文件名/备注" prop="name" width="180">
          <template #default="scope">
            <div class="name" @click="editFileNameFunc(scope.row)">{{ scope.row.name }}</div>
          </template>
        </el-table-column>
        <el-table-column align="left" label="链接" prop="url" min-width="300"/>
        <el-table-column align="left" label="标签" prop="tag" width="100">
          <template #default="scope">
            <el-tag
                :type="scope.row.tag === 'jpg' ? 'primary' : 'success'"
                disable-transitions
            >{{ scope.row.tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column align="left" label="操作" width="160">
          <template #default="scope">
            <el-button icon="download" type="primary" link @click="downloadFile(scope.row)">下载</el-button>
            <el-button icon="delete" type="primary" link @click="deleteFileFunc(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :style="{ float: 'right', padding: '20px' }"
            :total="total"
            layout="total, sizes, prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {deleteFile, editFileName, getFileList, uploadLimit} from '@/api/fileUploadAndDownload'
import {downloadImage} from '@/utils/downloadImg'
import CustomPic from '@/components/customPic/index.vue'
import UploadImage from '@/components/upload/image.vue'
import {formatDate} from '@/utils/format'
import WarningBar from '@/components/warningBar/warningBar.vue'

import {ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'

const imageUrl = ref('')
const imageCommon = ref('')

const page = ref(1)
const total = ref(0)
const pageSize = ref(10)
const search = ref({})
const tableData = ref([])
const uploadCfg = ref({})

// 分页
const handleSizeChange = (val) => {
  pageSize.value = val
  getTableData()
}

const handleCurrentChange = (val) => {
  page.value = val
  getTableData()
}

// 加载上传配置
const getUploadConfig = async () => {
  const cfg = await uploadLimit()
  if (cfg.code === 0) {
    uploadCfg.value = cfg.data
  }
}
getUploadConfig()

// 查询
const getTableData = async () => {
  const table = await getFileList({page: page.value, pageSize: pageSize.value, ...search.value})
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}
getTableData()

const deleteFileFunc = async (row) => {
  ElMessageBox.confirm('此操作将永久删除文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
      .then(async () => {
        const res = await deleteFile(row)
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: '删除成功!',
          })
          if (tableData.value.length === 1 && page.value > 1) {
            page.value--
          }
          getTableData()
        }
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消删除',
        })
      })
}

const downloadFile = (row) => {
  if (row.url.indexOf('http://') > -1 || row.url.indexOf('https://') > -1) {
    downloadImage(row.url, row.name)
  } else {
    debugger
    downloadImage(row.url, row.name)
  }
}

/**
 * 编辑文件名或者备注
 * @param row
 * @returns {Promise<void>}
 */
const editFileNameFunc = async (row) => {
  ElMessageBox.prompt('请输入文件名或者备注', '编辑', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: /\S/,
    inputErrorMessage: '不能为空',
    inputValue: row.name
  }).then(async ({value}) => {
    row.name = value
    // console.log(row)
    const res = await editFileName(row)
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: '编辑成功!',
      })
      getTableData()
    }
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消修改'
    })
  })
}
</script>

<script>

export default {
  name: 'Upload',
}
</script>
<style scoped>
.name {
  cursor: pointer;
}

.upload-btn + .upload-btn {
  margin-left: 12px;
}
</style>
