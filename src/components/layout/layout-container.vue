<template>
  <div class="flex-content">
    <div class="left-container">
      <div class="logo">vue3-next-ts</div>
      <el-aside width="201px">
        <AsideMenu> </AsideMenu>
      </el-aside>
    </div>
    <div class="right-container">
      <el-header>
        <HeaderContent> </HeaderContent>
      </el-header>
      <div class="right-container-content">
        <MainContent> </MainContent>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AsideMenu from './aside-menu.vue'
import HeaderContent from './header-content.vue'
import MainContent from './main-content.vue'
export default defineComponent({
  name: 'LayoutContainer',
  components: {
    AsideMenu,
    HeaderContent,
    MainContent
  }
})
</script>
<style lang="less" scoped>
.flex-content {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  .left-container {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: @second-color;
    .logo {
      height: 65px;
      width: 200px;
      color: #fff;
      text-align: center;
      line-height: 65px;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .right-container {
    flex: 1;
    height: 100vh;
    flex-direction: column;
    .right-container-content {
      width: 100%;
      height: calc(100vh - 65px);
    }
  }
}
.el-header,
.el-footer {
  background-color: @light-color;
  color: @font-dark-color;
  line-height: 60px;
  border-bottom: 1px solid @border-color;
}
.el-header {
  height: 65px !important;
  line-height: 65px;
  // background: linear-gradient(to right, @dark-color , @third-color);
  background: @light-color;
}
.el-aside {
  background-color: @second-color;
  color: @light-color;
  &::-webkit-scrollbar {
    width: 0px;
    opacity: 0;
  }
}

.el-main {
  background-color: @light-color;
  color: @font-dark-color;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.view-container {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  height: 100%;
}
</style>
