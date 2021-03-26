<template lang="pug">
div
  el-button(@click="show = !show")
  transition(name="my-home-fade")
    .home(style="text-align: center", v-if="show")
      img(alt="Vue logo", src="../../assets/logo.png", style="width: 100px")
      HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
      el-button(@click="showDialog", type="primary") 点我看看
  //- Notify 
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"
// import Notify from '@/components/notify/index'
// import Message from "./index"
import mountDialog from "@/package/myDialog/myDialog"
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
    // Notify
  },
  setup() {
    const { ctx } = getCurrentInstance() as any
    console.log(ctx)
    ctx.$MyMessage({
      message: "message test",
      type: "success"
    })
    const showDialog = () => {
      mountDialog({ title: "自定义标题", content: "自定义内容" })
    }
    const show = ref(true)
    return {
      show,
      showDialog
    }
  }
})
</script>
<style lang="less" scoped>
.my-home-fade-enter-active,
.my-home-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
.my-home-fade-enter,
.my-home-fade-leave-to {
  opacity: 0;
}
</style>
