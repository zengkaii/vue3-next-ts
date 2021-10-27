<template lang="pug">
.header-container
  .header-left
    .header-title {{ getRouter() }}
  .header-right
    .header-login-out 退出
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HeaderContent',
  setup() {
    const store = useStore()
    const currrentMenu = computed(() => {
      return store.getters.currrentMenu
    })
    const menuList = store.state.menuList
    function getRouter() {
      let parentName = ''
      for (const obj of menuList) {
        console.log(obj)
        if (obj.id === currrentMenu.value.parentId) {
          parentName = obj.label
          break
        }
      }
      return `${parentName} / ${currrentMenu.value.label}`
    }
    return {
      getRouter,
      currrentMenu
    }
  }
})
</script>
<style lang="less" scoped>
.header-container {
  user-select: none;
  display: flex;
  justify-content: space-between;
  .header-left {
    .header-title {
      // color: @font-light-color;
      font-weight: 600;
      // font-size: 40px;
      // transition: 1s;
      // text-shadow: 0 0 10px, 0 0 30px;
      // cursor: pointer;
    }
    .header-title:hover {
      // text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500,
      //   0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
      // color: #fff6a9;
      // text-align: center;
      // animation: blink 12s infinite;
      // -webkit-animation: blink 12s infinite;
    }
  }
  .header-right {
    .header-login-out {
      color: @font-light-color;
      font-size: 16px;
      font-weight: 600;
      transition: 1s;
      cursor: pointer;
      text-shadow: 0 0 10px, 0 0 30px;
    }
    .header-login-out:hover {
      text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500,
        0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
      color: #fff6a9;
      text-align: center;
      animation: blink 12s infinite;
      -webkit-animation: blink 12s infinite;
    }
  }
}
</style>
