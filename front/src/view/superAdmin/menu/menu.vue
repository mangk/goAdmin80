<template>
  <div>
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="addMenu(0)">新增根菜单</el-button>
      </div>

      <!-- 由于此处菜单跟左侧列表一一对应所以不需要分页 pageSize默认999 -->
      <el-table :data="tableData" row-key="id">
        <el-table-column align="left" label="ID" min-width="100" prop="id"/>
        <el-table-column align="left" label="展示名称" min-width="120" prop="authorityName">
          <template #default="scope">
            <span>{{ scope.row.meta.title }}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="图标" min-width="140" prop="authorityName">
          <template #default="scope">
            <div v-if="scope.row.meta.icon" class="icon-column">
              <el-icon>
                <component :is="scope.row.meta.icon"/>
              </el-icon>
              <span>{{ scope.row.meta.icon }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" label="路由Name" show-overflow-tooltip min-width="160" prop="name"/>
        <el-table-column align="left" label="路由Path" show-overflow-tooltip min-width="160" prop="path"/>
        <el-table-column align="left" label="是否隐藏" min-width="100" prop="hidden">
          <template #default="scope">
            <span>{{ scope.row.hidden ? "隐藏" : "显示" }}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="父节点" min-width="90" prop="parentId"/>
        <el-table-column align="left" label="排序" min-width="70" prop="sort"/>
        <el-table-column align="left" label="文件路径" min-width="360" prop="component"/>
        <el-table-column align="left" fixed="right" label="操作" width="300">
          <template #default="scope">
            <el-button
                type="primary"
                link
                icon="plus"
                @click="addMenu(scope.row.id)"
            >添加子菜单
            </el-button>
            <el-button
                type="primary"
                link
                icon="edit"
                @click="editMenu(scope.row.id)"
            >编辑
            </el-button>
            <el-button

                type="primary"
                link
                icon="delete"
                @click="deleteMenu(scope.row.id)"
            >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="handleClose" :title="dialogTitle">
      <el-form v-if="dialogFormVisible" ref="menuForm" :inline="true" :model="form" :rules="rules" label-position="top"
               label-width="85px">
        <el-form-item label="展示名称" prop="meta.title" style="width:30%">
          <el-input v-model="form.meta.title" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="路由Name" prop="path" style="width:30%">
          <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="唯一英文字符串"
              @change="changeName"
          />
        </el-form-item>
        <!--        <el-form-item prop="path" style="width:30%">-->
        <!--          <template #label>-->
        <!--            <span style="display: inline-flex;align-items: center;">-->
        <!--              <span>路由Path</span>-->
        <!--              <el-checkbox v-model="checkFlag" style="margin-left:12px;height: auto">添加参数</el-checkbox>-->
        <!--            </span>-->
        <!--          </template>-->

        <!--          <el-input-->
        <!--              v-model="form.path"-->
        <!--              :disabled="!checkFlag"-->
        <!--              autocomplete="off"-->
        <!--              placeholder="建议只在后方拼接参数"-->
        <!--          />-->
        <!--        </el-form-item>-->
        <el-form-item label="是否隐藏" style="width:30%">
          <el-select v-model="form.hidden" placeholder="是否在列表隐藏">
            <el-option :value="false" label="否"/>
            <el-option :value="true" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item label="父节点ID" style="width:30%">
          <el-cascader
              v-model="form.parentId"
              style="width:100%"
              :disabled="!isEdit"
              :options="menuOption"
              :props="{ checkStrictly: true,label:'title',value:'id',disabled:'disabled',emitPath:false}"
              :show-all-levels="false"
              filterable
          />
        </el-form-item>
        <!--        <el-form-item label="文件路径" prop="component" style="width:60%">-->
        <!--          <el-input v-model="form.component" autocomplete="off" placeholder="页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue"-->
        <!--                    @blur="fmtComponent"/>-->
        <!--          <span style="font-size:12px;margin-right:12px;">如果菜单包含子菜单，请创建router-view二级路由页面或者</span>-->
        <!--          <el-button style="margin-top:4px" @click="form.component = 'view/routerHolder.vue'">点我设置</el-button>-->
        <!--        </el-form-item>-->
        <el-form-item label="图标" prop="meta.icon" style="width:30%">
          <icon :meta="form.meta" style="width:100%"/>
        </el-form-item>
        <el-form-item label="排序标记" prop="sort" style="width:30%">
          <el-input v-model.number="form.sort" autocomplete="off"/>
        </el-form-item>
        <el-form-item prop="meta.activeName" style="width:30%">
          <template #label>
            <div>
              <span> 高亮菜单 </span>
              <el-tooltip
                  content="注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。"
                  placement="top" effect="light">
                <el-icon>
                  <QuestionFilled/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>
          <el-input v-model="form.meta.activeName" :placeholder="form.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="KeepAlive" prop="meta.keepAlive" style="width:30%">
          <el-select v-model="form.meta.keepAlive" style="width:100%" placeholder="是否keepAlive缓存页面">
            <el-option :value="false" label="否"/>
            <el-option :value="true" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item label="CloseTab" prop="meta.closeTab" style="width:30%">
          <el-select v-model="form.meta.closeTab" style="width:100%" placeholder="是否自动关闭tab">
            <el-option :value="false" label="否"/>
            <el-option :value="true" label="是"/>
          </el-select>
        </el-form-item>
        <el-form-item style="width:30%">
          <template #label>
            <div>
              <span> 是否为基础页面 </span>
              <el-tooltip content="此项选择为是，则不会展示左侧菜单以及顶部信息。" placement="top" effect="light">
                <el-icon>
                  <QuestionFilled/>
                </el-icon>
              </el-tooltip>
            </div>
          </template>

          <el-select v-model="form.meta.defaultMenu" style="width:100%" placeholder="是否为基础页面">
            <el-option :value="false" label="否"/>
            <el-option :value="true" label="是"/>
          </el-select>
        </el-form-item>

        <el-form-item label="模版地址" prop="component" style="width:60%">
          <el-input v-model="form.meta.SSRPath" autocomplete="off" placeholder="可以访问的后端接口"
                    @blur="fmtComponent"/>
          <span style="font-size:12px;margin-right:12px;">该地址返回的vue模版源代码会被渲染到页面</span>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {addBaseMenu, deleteBaseMenu, getAllMenuTree, getMenuById, updateBaseMenu} from '@/api/menu'
import {reactive, ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import Icon from "@/view/superAdmin/menu/icon.vue";

const rules = reactive({
  path: [{required: true, message: '请输入菜单name', trigger: 'blur'}],
  component: [
    {required: true, message: '请输入文件路径', trigger: 'blur'}
  ],
  'meta.title': [
    {required: true, message: '请输入菜单展示名称', trigger: 'blur'}
  ]
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(999)
const tableData = ref([])
const searchInfo = ref({})
// 查询
const getTableData = async () => {
  const table = await getAllMenuTree(true, false)
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()


const fmtComponent = () => {
  form.value.component = form.value.component.replace(/\\/g, '/')
}

const form = ref({
  id: 0,
  path: '',
  name: '',
  hidden: false,
  parentId: 0,
  component: 'view/systemTools/convert/index.vue',
  meta: {
    activeName: '',
    title: '',
    icon: '',
    defaultMenu: false,
    closeTab: false,
    keepAlive: false,
    SSRPath: ''
  },
})
const changeName = () => {
  form.value.path = form.value.name
}

const handleClose = (done) => {
  initForm()
  done()
}
// 删除菜单
const deleteMenu = (id) => {
  ElMessageBox.confirm('此操作将永久删除所有角色下该菜单, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
      .then(async () => {
        console.log(112233)
        console.log(id)
        console.log(445566)
        const res = await deleteBaseMenu({id})
        if (res.code === 0) {
          ElMessage({
            type: 'success',
            message: '删除成功!'
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
          message: '已取消删除'
        })
      })
}
// 初始化弹窗内表格方法
const menuForm = ref(null)
const checkFlag = ref(false)
const initForm = () => {
  checkFlag.value = false
  menuForm.value.resetFields()
  form.value = {
    id: 0,
    path: '',
    name: '',
    hidden: false,
    parentId: 0,
    component: '',
    meta: {
      title: '',
      icon: '',
      defaultMenu: false,
      closeTab: false,
      keepAlive: false
    }
  }
}
// 关闭弹窗

const dialogFormVisible = ref(false)
const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
}
// 添加menu
const enterDialog = async () => {
  menuForm.value.validate(async valid => {
    if (valid) {
      let res
      if (isEdit.value) {
        res = await updateBaseMenu(form.value)
      } else {
        res = await addBaseMenu(form.value)
      }
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: isEdit.value ? '编辑成功' : '添加成功!'
        })
        getTableData()
      }
      initForm()
      dialogFormVisible.value = false
    }
  })
}

const menuOption = ref([
  {
    id: 0,
    title: '根菜单'
  }
])
const setOptions = () => {
  menuOption.value = [
    {
      id: 0,
      title: '根目录'
    }
  ]
  setMenuOptions(tableData.value, menuOption.value, false)
}
const setMenuOptions = (menuData, optionsData, disabled) => {
  menuData &&
  menuData.forEach(item => {
    if (item.children && item.children.length) {
      const option = {
        title: item.meta.title,
        id: String(item.id),
        disabled: disabled || item.id === form.value.id,
        children: []
      }
      setMenuOptions(
          item.children,
          option.children,
          disabled || item.id === form.value.id
      )
      optionsData.push(option)
    } else {
      const option = {
        title: item.meta.title,
        id: String(item.id),
        disabled: disabled || item.id === form.value.id
      }
      optionsData.push(option)
    }
  })
}

// 添加菜单方法，id为 0则为添加根菜单
const isEdit = ref(false)
const dialogTitle = ref('新增菜单')
const addMenu = (id) => {
  dialogTitle.value = '新增菜单'
  form.value.parentId = id
  isEdit.value = false
  setOptions()
  dialogFormVisible.value = true
}
// 修改菜单方法
const editMenu = async (id) => {
  dialogTitle.value = '编辑菜单'
  const res = await getMenuById({id})
  form.value = res.data
  isEdit.value = true
  setOptions()
  dialogFormVisible.value = true
}

</script>

<script>
export default {
  name: 'Menus',
}
</script>

<style scoped lang="scss">
.warning {
  color: #dc143c;
}

.icon-column {
  display: flex;
  align-items: center;

  .el-icon {
    margin-right: 8px;
  }
}
</style>
