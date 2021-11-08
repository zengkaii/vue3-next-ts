<template>
  <div class="container">
    <el-button @click="dialogShow = true" ref="refButton">点我</el-button>
    <dialogComponent v-model="dialogShow" title="dialogComponent" v-if="dialogShow">
    </dialogComponent>
  </div>
</template>
<script lang="ts">
import dialogComponent from './dialog-component.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MyDialog',
  components: { dialogComponent },
  setup() {
    const dialogShow = ref<boolean>(false)
    return {
      dialogShow
    }
  }
})
</script>
