<template>
  <div id="main-container">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="key"> </component>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'MainContent',
  setup() {
    const route = useRoute()
    const key = computed(() => {
      return route.fullPath
    })
    return {
      key
    }
  }
})
</script>
<style lang="less" scoped>
#main-container {
  height: 100%;
  background-color: #f8f8fa;
  .tag-row {
    overflow-y: scroll;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    box-shadow: 0px 5px 5px -5px @dark-color;
  }
  .tag-row::-webkit-scrollbar {
    width: 6px;
  }
  .tag-row::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  .tag-row::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: @waring-color;
  }
  .container {
    // background-color: #f9f9f9;
    padding: 20px 20px;
  }
  .table-container {
    padding: 0px 20px;
  }
}
</style>
