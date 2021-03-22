<template lang="pug">
transition(name='my-message-fade')
  .my-message
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MyMessage',
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.my-message-fade-enter-active,
.my-message-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
</style>
