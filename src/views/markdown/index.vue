<template>
  <div class="container">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const text = ref<any>('')
    return {
      text
    }
  }
})
</script>
