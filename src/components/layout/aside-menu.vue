<template lang="pug">
.aside-container
  TsMenu(
    :menuList='menuList',
    :backgroundColor='"#545c64"',
    :textColor='"#fff"',
    :activeTextColor='"#ffd04b"',
    @menuClick='menuClick'
  )
</template>
<script lang="ts">
import { defineComponent, computed, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuList } from '@/model/Store'
import TsMenu from './ts-menu'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'AsideMenu',
  components: {
    TsMenu
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const menuList = computed(() => {
      return store.getters.menuList
    })

    // mehtods
    function menuClick(item: MenuList) {
      if (!item.path) {
        return
      }
      const path: string = item.path
      const currentPath: string = route.path
      if (path === currentPath) {
        return
      }
      nextTick().then(() => {
        router.push(path)
      })
    }

    return {
      menuList,
      menuClick
    }
  }
})
</script>
<style lang="less" scoped>
.aside-container {
  overflow: hidden;
  .el-menu {
    text-align: left;
  }
  .aside-search {
    ::v-deep .el-submenu .el-menu-item {
      min-width: 199px;
    }
  }
}
</style>