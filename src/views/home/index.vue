<template>
  <div>
    <el-button @click="show = !show"></el-button>
    <div
      v-for="item in items"
      :key="item"
      :ref="
        (el) => {
          if (el) divs[i] = el
        }
      "
    ></div>
    <transition name="my-home-fade">
      <div class="home" style="text-align: center" v-show="show">
        <img alt="Vue logo" src="../../assets/logo.png" style="width: 100px" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"> </HelloWorld>
        <el-button @click="showDialog" type="primary">点我看看</el-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, nextTick } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import Notify from '@/components/notify/index'
// import Message from "./index"
import mountDialog from '@/package/myDialog/myDialog'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
    // Notify
  },
  setup() {
    const items = ref([1, 2, 3, 4])
    const divs = ref([])
    const currentInstance = getCurrentInstance() as any
    const ctx = currentInstance.appContext.config.globalProperties
    const showDialog = () => {
      mountDialog({ title: '自定义标题', content: '自定义内容' })
    }
    const show = ref(true)
    nextTick(() => {
      ctx.$MyMessage({
        message: 'message test',
        type: 'success'
      })
    })
    return {
      items,
      show,
      divs,
      showDialog
    }
  }
})
</script>
<style lang="less" scoped>
.my-home-fade-enter-active,
.my-home-fade-leave-active {
  transition: opacity 0.5s ease;
}
.my-home-fade-enter,
.my-home-fade-leave-to {
  opacity: 0;
}
</style>
