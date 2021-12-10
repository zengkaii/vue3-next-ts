<template>
  <el-dialog custom-class="dialog-container" v-bind="$attrs" @close="closeHandle">
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
  setup(props, { attrs, emit }) {
    function closeHandle() {
      emit('update:modelValue', false)
    }
    return {
      modelValue: attrs.modelValue,
      closeHandle
    }
  }
})
</script>
