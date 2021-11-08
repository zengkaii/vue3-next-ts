<template>
  <el-dialog class="dialog-comntainer" v-on="$attrs">
    <span> v-on="$attrs" </span>
    <template #footer>
      <el-button @click="closeHandle()">关闭</el-button>
      <el-button @click="closeHandle()">确定</el-button>
    </template>
  </el-dialog>
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
