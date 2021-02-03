<template lang="pug">
el-dialog.dialog-comntainer(v-on="$attrs")
  | v-on="$attrs"
  el-button(@click="closeHandle()") 关闭
</template>
<script>
  import { defineComponent,  } from 'vue'
  export default defineComponent({
    name: 'dialogComponent',
    setup(props, context) {
      function closeHandle() {
          context.emit('update:modelValue', false)
      }
      return {
        modelValue: context.attrs.modelValue,
        closeHandle
      }
    }
  })
</script>