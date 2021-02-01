<template lang="pug">
div.container
  el-table(:data="tableData"  style="width: 100%" border )
    el-table-column(prop='one' label='序号' type="index" width='50px')
    el-table-column(prop='name' label='姓名' )
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const tableData = ref<any>([])
      tableData.value = [{name: 2}]
      return {
        tableData
      }
    }
  })
</script>