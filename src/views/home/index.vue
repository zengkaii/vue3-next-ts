<template>
  <div class="home" style="text-align: center">
    <img alt="Vue logo" src="../../assets/logo.png" style="width: 100px" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <Notify/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import Notify from '@/components/notify/index'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
    // Notify
  }
})
</script>
