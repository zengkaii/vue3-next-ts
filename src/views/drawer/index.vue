<template lang="pug">
.container
  el-radio-group(v-model='direction') 
    el-radio(label='ltr') 从左往右开
    el-radio(label='rtl') 从右往左开
    el-radio(label='ttb') 从上往下开
    el-radio(label='btt') 从下往上开
  el-button(@click='drawer = true', type='primary', style='margin-left: 16px') 点我试试
  el-drawer(
    title='我是标题',
    v-model='drawer',
    :direction='direction',
    :before-close='handleClose',
    destroy-on-close
  )
    span 我来了
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
export default defineComponent({
  name: 'MyDrawer',
  setup() {
    const direction = ref<string>('ltr')
    const drawer = ref<boolean>(false)

    function handleClose(done) {
      ElMessageBox.confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return {
      direction,
      drawer,
      handleClose
    }
  }
})
</script>
