<template>
  <div class="container">
    <el-row :gutter="88">
      <el-col :span="8">
        <el-button type="primary" @click="createNewObj()">新增一级目录</el-button>
        <el-tree :data="treeData" node-key="id" default-expand-all :expand-on-click-node="false">
          <template #default="{ node, data }">
            <span class="custom-tree-node">{{ node.label }}</span>
            <span>
              <el-button
                v-if="data.type === 'bar'"
                type="text"
                size="mini"
                @click="() => append(data)"
                >添加</el-button
              >
              <el-button
                v-if="!data.children || data.children.length <= 0"
                type="text"
                size="mini"
                @click="() => remove(node, data)"
                style="color: red"
                >删除</el-button
              >
            </span>
          </template>
        </el-tree>
      </el-col>
      <el-col :span="8" v-if="showEditMenu">
        <el-form inline label-width="100px" label-position="left">
          <el-form-item label="上级菜单：" v-if="showParentSelect">
            <el-select
              v-model="form.parentId"
              style="width: 385px"
              placeholder="请选择上级菜单"
              :disabled="parentDisabled"
            >
              <el-option
                v-for="item in parentData"
                :key="item.id"
                :value="item.id"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单名称：">
            <el-input
              v-model="form.label"
              style="width: 385px"
              placeholder="请输入菜单名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单英文：">
            <el-input
              v-model="form.name"
              style="width: 385px"
              placeholder="请输入菜单英文"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单路径：">
            <el-input
              v-model="form.path"
              style="width: 385px"
              placeholder="请输入菜单路径"
            ></el-input>
          </el-form-item>
          <el-form-item label="菜单类型：">
            <el-select v-model="form.type" style="width: 385px" placeholder="请选择菜单类型">
              <el-option label="可展开菜单" value="bar"></el-option>
              <el-option label="不可展开菜单" value="menu"></el-option>
            </el-select>
          </el-form-item>
          <br />
          <el-form-item class="foot-btns" style="margin-top: 40px">
            <el-button @click="showEditMenu = false">关闭</el-button>
            <el-button @click="resetForm()">重置</el-button>
            <el-button type="success" @click="confirmHandle()">确定</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { menuList, saveMenu, deleteMenu } from '@/api/menuApi'
import { ElMessage, ElMessageBox } from 'element-plus'
import { MenuList } from '@/model/Store'
interface Form {
  label: string
  path?: string
  type: string
  name: string
  parentId?: number | string
  children?: MenuList[]
}

export default defineComponent({
  name: 'MenuPage',
  setup() {
    const form = ref<Form>({
      label: '',
      path: '',
      type: '',
      name: '',
      parentId: ''
    })
    const treeData = ref<any>([])
    const parentData = ref([])
    const parentDisabled = ref<boolean>(false)
    const showParentSelect = ref<boolean>(false)
    const showEditMenu = ref<boolean>(false)

    //method
    async function initData() {
      try {
        const { data } = await menuList()
        const menuData = data.array || []
        parentData.value = menuData.filter((item: MenuList) => item.type === 'bar')
        initTreeData(menuData)
      } catch (error) {
        ElMessage.error(error.msg)
        console.log(error)
      }
    }

    function initTreeData(arr: MenuList[]) {
      const treeDatas = [] as MenuList[]
      let arrData = [] as MenuList[]
      arrData = arr.filter((item: MenuList) => {
        if (!item.parentId) {
          treeDatas.push(item)
        } else {
          return item.parentId
        }
      })
      treeData.value = findParent(treeDatas, arrData)
    }

    function findParent(saveArray: MenuList[], filterArray: MenuList[]) {
      return saveArray.map((item: MenuList) => {
        let filterLeft = [] as MenuList[]
        filterLeft = filterArray.filter((filt: MenuList) => {
          if (item.id === filt.parentId) {
            item.children = item.children || []
            item.children.push(filt)
          } else {
            return filt
          }
        })
        if (item.children && item.children.length > 0 && filterLeft.length > 0) {
          item.children = item.children.map((c: MenuList) => {
            findParent([c], filterLeft)
            return c
          })
        }
        return item
      })
    }

    function createNewObj() {
      showParentSelect.value = false
      parentDisabled.value = false
      showEditMenu.value = true
      form.value = {
        label: '',
        path: '',
        type: '',
        name: '',
        parentId: ''
      }
    }

    function append(data: MenuList) {
      form.value.parentId = data.id
      parentDisabled.value = true
      showEditMenu.value = true
      showParentSelect.value = true
    }
    async function remove(node: any, data: any) {
      try {
        await ElMessageBox.confirm(`确定删除菜单${data.label}吗？`, '提示')
        await deleteMenu({ id: data.id }).then(() => {
          ElMessage.success('删除成功')
          initData()
        })
      } catch (error) {
        ElMessage.error(error.msg)
      }
    }

    function resetForm() {
      // this.$options.data()报错?
      form.value = {
        label: '',
        path: '',
        type: '',
        name: '',
        parentId: form.value.parentId
      }
    }
    async function confirmHandle() {
      try {
        await saveMenu(form)
        ElMessage.success('保存成功')
        resetForm()
        showEditMenu.value = false
        await initData()
      } catch (error) {
        ElMessage.error(error.msg)
        console.log(error)
      }
    }

    // start
    initData()

    return {
      form,
      treeData,
      parentData,
      parentDisabled,
      showParentSelect,
      showEditMenu,
      initData,
      createNewObj,
      append,
      remove,
      confirmHandle,
      resetForm
    }
  }
})
</script>
<style lang="less" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>

.custom-tree-node { flex: 1; display: flex; align-items: center; justify-content: space-between;
font-size: 14px; padding-right: 8px; }
