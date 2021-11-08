<template>
  <div class="aside-container">
    <TsMenu
      :menuList="menuList"
      :backgroundColor="'#545c64'"
      :textColor="'#fff'"
      :activeTextColor="'#ffd04b'"
      :defaultActive="defaultActive"
      @menuClick="menuClick"
    >
    </TsMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, nextTick, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { MenuList } from '@/model/Store'
import Types from '@/store/types'
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
    const defaultActive = ref<string>('')

    // mehtods
    function menuClick(item: MenuList) {
      store.dispatch(Types.SET_CURRENT_MENU, item)
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
    function getRouteId(menuList: MenuList[]) {
      for (const obj of menuList) {
        if (obj.path === route.path) {
          store.dispatch(Types.SET_CURRENT_MENU, obj)
          defaultActive.value = obj.id.toString()
          break
        } else if (obj.children && obj.children.length > 0) {
          getRouteId(obj.children)
        }
      }
    }
    getRouteId(menuList.value)
    return {
      menuList,
      defaultActive,
      menuClick
    }
  }
})
</script>
<style lang="less" scoped>
.aside-container {
  height: calc(100vh - 65px);
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
