<template>
  <div class="water-mark-container">
    <div class="mark-box" ref="markBox">
      <img src="./1.png" alt="" />
      <div class="water-text" v-for="i in 20" :key="i">{{ waterMarkText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'waterMark',
  setup() {
    const waterMarkText = '打个水印'
    const markBox = ref<HTMLElement | any>(null)
    return { markBox, waterMarkText }
  }
})
</script>

<style scoped lang="less">
.water-mark-container {
  .mark-box {
    position: relative;
    .water-text {
      color: red;
      // transform: rotate(45deg);
    }
  }
}
</style>
