<template>
  <modal-button> </modal-button>
</template>

<script>
import { defineComponent } from 'vue'
import modalButton from './modal-button.vue'
export default defineComponent({
  name: 'teleport',
  components: { modalButton },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
</style>