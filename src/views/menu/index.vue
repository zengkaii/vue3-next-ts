<template>
  <div style="width: 180px; overflow: hidden">
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>
          <span>导航二</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>
          <span>导航三</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>
          <span>导航四</span>
        </template>
      </el-menu-item>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <ul class="a">
      <li class="b">1</li>
      <li class="b">
        <ul class="a">
          <li class="b">1</li>
          <li class="b">
            <ul class="a">
              <li class="b">1</li>
              <li class="b"></li>
              <li class="b">3</li>
              <li class="b">4</li>
              <li class="b">5</li>
            </ul>
          </li>
          <li class="b">3</li>
          <li class="b">4</li>
          <li class="b">5</li>
        </ul>
      </li>
      <li class="b">3</li>
      <li class="b">4</li>
      <li class="b">5</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const translate = ref<number>(0)
    const list = ref<any[]>([])
    const showlist = ref<any[]>([...list.value, ...list.value])
    // const listCopy =

    return { translate, showlist }
  }
})
</script>
<style lang="less" scoped></style>
