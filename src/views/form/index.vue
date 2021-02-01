<template lang="pug">
.container
  el-row()
    el-col(:span='12')
      el-form(:model="form" label-width="100px" label-position='left')
        el-form-item(label='单选框')
          el-radio-group(v-model="form.radio")
            el-radio(label='1') 选项一
            el-radio(label='2') 选项二
            el-radio(label='3') 选项三
    el-col(:span='12')
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const form = ref<any>({
        radio: ''
      })
      return {
        form  
      }
    }
  })
</script>