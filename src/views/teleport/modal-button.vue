<template>
  <el-button type="primary" @click="modalShow = true">点我打开teleport</el-button>
  <teleport to="body">
    <div class="teleport-content" v-if="modalShow">
      <div>我是teleport</div>
      <div>我在body层</div>
      <el-button type="primary" @click="closeTeleport">关闭</el-button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'modalButton',
  setup() {
    const modalShow = ref<boolean>(false)
    function closeTeleport() {
      modalShow.value = false
    }
    return { modalShow, closeTeleport }
  }
})
</script>

<style lang="less" scoped>
.teleport-content {
  background-color: rgb(98, 134, 170);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 100px;
  line-height: 30px;
  color: #fff;
  width: 500px;
  height: 500px;
}
</style>
