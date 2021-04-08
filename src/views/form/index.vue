<template lang="pug">
.container
  el-row(:gutter="72")
    el-col(:span="12")
      el-form(:model="form", label-width="100px", label-position="left")
        el-form-item(label="单选框")
          el-radio-group(v-model="form.radio")
            el-radio(label="1") 选项一
            el-radio(label="2") 选项二
            el-radio(label="3") 选项三
        el-form-item(label="输入框")
          el-input(v-model="form.input")
        el-form-item(label="输入框-组件")
          inputComponent(v-model="form.componentInput")
        el-tree(
          :data="treeData",
          node-key="id",
          default-expand-all,
          :expand-on-click-node="false",
          @node-click="nodeClick"
        )
          template(#default="{ node, data }")
            span.custom-tree-node(
              :class="data.id === selectId ? 'currentSelect' : ''"
            )
              span {{ node.label }}
    el-col(:span="12")
      el-form(:model="form2", label-width="100px", label-position="left")
        el-form-item(label="单选框")
          el-radio-group(v-model="form2.radio")
            el-radio(label="1") 选项一
            el-radio(label="2") 选项二
            el-radio(label="3") 选项三
        el-form-item(label="输入框")
          el-input(v-model="form2.input")
        el-form-item(label="输入框-组件")
          inputComponent(v-model="form2.componentInput")
      .result
        span {{ form2 }}
</template>
<script lang="ts">
import inputComponent from "./input-component.vue"
import { defineComponent, ref, reactive } from "vue"
interface FormType {
  radio: string | number
  input: string
  componentInput: string
}
export default defineComponent({
  name: "MyForm",
  components: { inputComponent },
  setup() {
    const num = reactive({ val: 100 })
    const selectId = ref(null)
    const treeData = ref<any>([
      {
        id: 1,
        label: "菜单",
        type: "bar",
        name: "manage",
        children: [
          {
            parentId: 1,
            id: 2,
            label: "首页",
            path: "/home",
            type: "menu",
            name: "home",
            children: [
              {
                parentId: 2,
                id: 21,
                label: "菜单配置",
                path: "/menu-page",
                type: "menu",
                name: "menu-page"
              },
              {
                parentId: 2,
                id: 22,
                label: "表单",
                path: "/form",
                type: "menu",
                name: "form"
              }
            ]
          },
          {
            parentId: 1,
            id: 4,
            label: "菜单配置",
            path: "/menu-page",
            type: "menu",
            name: "menu-page"
          },
          {
            parentId: 1,
            id: 10,
            label: "表单",
            path: "/form",
            type: "menu",
            name: "form"
          },
          {
            parentId: 1,
            id: 11,
            label: "表格一",
            path: "/table-one",
            type: "menu",
            name: "table-one"
          },
          {
            parentId: 1,
            id: 12,
            label: "弹窗",
            path: "/dialog",
            type: "menu",
            name: "dialog"
          },
          {
            parentId: 1,
            id: 13,
            label: "图表",
            path: "/echarts",
            type: "menu",
            name: "echarts"
          },
          {
            parentId: 1,
            id: 14,
            label: "地图",
            path: "/gd-map",
            type: "menu",
            name: "gd-map"
          },
          {
            parentId: 1,
            id: 15,
            label: "markdown",
            path: "/markdown",
            type: "menu",
            name: "markdown"
          },
          {
            parentId: 1,
            id: 16,
            label: "抽屉",
            path: "/drawer",
            type: "menu",
            name: "drawer"
          },
          {
            parentId: 1,
            id: 17,
            label: "抽奖",
            path: "/draw-lottery",
            type: "menu",
            name: "draw-lottery"
          },
          {
            parentId: 1,
            id: 18,
            label: "svg",
            path: "/svg",
            type: "menu",
            name: "svg"
          },
          {
            parentId: 1,
            id: 19,
            label: "滚动",
            path: "/scroll",
            type: "menu",
            name: "scroll"
          }
        ]
      }
    ])
    console.log(num)
    function nodeClick(data) {
      console.log(data)
      if (data.children && data.children.length > 0) {
        return
      }
      selectId.value = data.id
    }
    const form2 = reactive<FormType>({
      radio: "",
      input: "",
      componentInput: ""
    })
    const form = ref<FormType>({
      radio: "",
      input: "",
      componentInput: ""
    })
    return {
      treeData,
      form,
      form2,
      selectId,
      nodeClick
    }
  }
})
</script>
<style lang="less" scoped>
.currentSelect {
  color: red;
}
</style>
