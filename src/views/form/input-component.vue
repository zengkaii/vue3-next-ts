<template lang="pug">
.input-component
  el-input(v-model='message', placeholder='输入点什么试试？')
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
export default defineComponent({
  name: 'inputComponent',

  model: {
    prop: 'text'
  },
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const message = computed({
      get() {
        return props.modelValue || ''
      },
      set(val) {
        context.emit('update:modelValue', val)
      }
    })
    return {
      message
    }
  }
})
</script>
