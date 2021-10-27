<template lang="pug">
.notify-container
  .success 这是一个notify这是一个notify这是一个notify这是一个notify
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Notify'
})
</script>
<style lang="less" scoped>
.notify-container {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  line-height: 40px;
  transition: 1s all;
  .success {
    padding: 0 20px;
    height: 100%;
    background-color: #f0f9eb;
    border: 1px solid #e1f3d8;
    color: #67c23a;
    border-radius: 8px;
  }
}
</style>
