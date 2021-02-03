<template lang="pug">
el-dialog.dialog-comntainer(v-on="$attrs")
  | v-on="$attrs"
  template(#footer)
    el-button(@click="closeHandle()") 关闭
    el-button(@click="closeHandle()") 确定
</template>
<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'dialogComponent',
    emits: ['update:modelValue'],
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