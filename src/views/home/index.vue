<template lang="pug">
div
  el-button(@click="show = !show")
  transition(name="my-home-fade")
    .home(style="text-align: center", v-if="show")
      img(alt="Vue logo", src="../../assets/logo.png", style="width: 100px")
      HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
  //- Notify 
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HelloWorld from "@/components/HelloWorld.vue"
// import Notify from '@/components/notify/index'

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
    // Notify
  },
  setup() {
    const show = ref(true)
    return {
      show
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
