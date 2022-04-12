<template>
  <div>
    <el-button @click="show = !show"></el-button>
    <div
      v-for="item in items"
      :key="item"
      :ref="
        (el) => {
          if (el) divs[item] = el
        }
      "
    ></div>
    <transition name="my-home-fade">
      <div class="home" style="text-align: center" v-show="show">
        <img alt="Vue logo" src="../../assets/logo.png" style="width: 100px" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"> </HelloWorld>
        <el-button @click="showDialog" type="primary">点我看看dialog</el-button>
        <el-button @click="showModal('component')" type="primary">点我看看wayByComponent</el-button>
        <el-button @click="showModal('api')" type="primary">点我看看wayByApi</el-button>
      </div>
    </transition>
    <MyModal v-model="showMyModal" @close="closeHandle"> </MyModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, nextTick } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import Notify from '@/components/notify/index'
// import Message from "./index"
import mountDialog from '@/package/myDialog/myDialog'
import { modalMountContent } from '@/package/modal/index'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
    // Notify
  },
  setup() {
    const showMyModal = ref(false)
    const items = ref([1, 2, 3, 4])
    const divs = ref([])
    const currentInstance = getCurrentInstance()
    const ctx = currentInstance.appContext.config.globalProperties
    const showDialog = () => {
      mountDialog({ title: '自定义标题', content: '自定义内容' })
    }
    const showModal = (way: string) => {
      if (way === 'component') {
        showMyModal.value = true
      } else {
        modalMountContent({})
      }
    }
    const show = ref(true)
    nextTick(() => {
      ctx.$MyMessage({
        message: 'message test',
        type: 'success'
      })
    })
    function closeHandle() {
      console.log('关闭')
    }
    return {
      showMyModal,
      items,
      show,
      divs,
      showDialog,
      showModal,
      closeHandle
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
