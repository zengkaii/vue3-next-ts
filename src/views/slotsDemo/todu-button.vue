<template>
  <div>
    <el-button type="primary">
      <slot> </slot>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'todoButton',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
