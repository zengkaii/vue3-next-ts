<template lang="pug">
.container
  el-row(:gutter="72")
    el-col(:span="12")
      el-form(:model="form" label-width="100px" label-position='left')
        el-form-item(label='单选框')
          el-radio-group(v-model="form.radio")
            el-radio(label='1') 选项一
            el-radio(label='2') 选项二
            el-radio(label='3') 选项三
        el-form-item(label='输入框')
          el-input(v-model="form.input")
        el-form-item(label='输入框-组件')
          inputComponent(v-model="form.componentInput")
    el-col(:span="12")
      .result
        span {{form}}
</template>
<script lang="ts">
  import inputComponent from './input-component.vue'
  import { defineComponent, ref } from 'vue'
  interface FormType  {
    radio: string | number,
    input: string,
    componentInput: string
  }
  export default defineComponent({
    name: 'Form',
    components: {inputComponent},
    setup() {
      const form = ref<FormType>({
        radio: '',
        input: '',
        componentInput: ''
      })
      return {
        form
      }
    }
  })
</script>