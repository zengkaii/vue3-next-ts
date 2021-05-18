<template lang="pug">
.container
  el-button(@click='dialogShow = true', ref='refButton') 点我
  dialogComponent(v-model='dialogShow', title='dialogComponent', v-if='dialogShow')
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
