<template>
  <teleport to="body" v-if="modelValue">
    <div class="modal-content">
      <img class="icon-close" src="./close.png" @click="closeHandle" />
      <div class="header-title"></div>
    </div>
    <div class="modal-bg"></div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyModal',
  props: {
    modelValue: {
      modelValue: Boolean,
      default: false
    },
    close: {
      type: Function
    },
    content: {
      type: String,
      default: '暂无权限'
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit }) {
    function closeHandle() {
      const closeFunc = props.close as any
      if (props.close) {
        closeFunc()
      } else {
        emit('close')
        emit('update:modelValue', false)
      }
    }
    return {
      closeHandle
    }
  }
})
</script>

<style scoped lang="less">
.modal-content {
  background-color: #fff;
  width: 800px;
  height: 500px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2001;
  .icon-close {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
  }
}
.modal-bg {
  z-index: 1999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
