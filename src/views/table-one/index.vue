<template lang="pug">
.container.table-container
  div.filter-content(ref="searchElm" :style="showAllFilter ? '' : 'padding:12px 10px'")
    div.more-label(@click="setFilterForm()")
      span(v-show="!showAllFilter")
        i.el-icon-caret-bottom
        | 展开筛选
      span(v-show="showAllFilter")
        i.el-icon-caret-top
        | 收起
    el-form(inline v-show="showAllFilter")
      el-form-item(label="条件一：")
        el-input
      el-form-item(label="条件二：")
        el-input
      el-form-item(label="条件三：")
        el-input
      el-form-item(label="条件四：")
        el-input
      el-form-item(label="条件五：")
        el-input
  div.table-content
    el-table(:data="tableData"  style="width: 100%" border :max-height="maxTableHeight"  )
      el-table-column(prop='one' label='序号' type="index" width='50px')
      el-table-column(prop='name' label='姓名' )
  div.fiexd-pagination
    el-pagination(@size-change="handleSizeChange" @current-change="handleCurrentChange" 
        :currentPage="currentPage"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="1000")
</template>
<script lang="ts">
  import tableHeight from './tableHeight'
  import { defineComponent, ref, onMounted } from 'vue'
  export default defineComponent({
    name: 'TableOne',
    setup() {
      const { showAllFilter, maxTableHeight, setFilterForm, _initPage } = tableHeight()
      const tableData = ref<any>([])
      const currentPage = ref<number>(1)
      const pageSize = ref<number>(10)
      for (let i = 1; i< 100; i++ ) {
        tableData.value.push({})
      }

      function handleSizeChange(size: number) {
        pageSize.value = size
      }

      function handleCurrentChange(page: number) {
        currentPage.value = page
      }
      onMounted(() => {
        _initPage()
      })
      return {
        showAllFilter,
        maxTableHeight,
        setFilterForm,
        tableData,
        currentPage,
        pageSize,
        handleSizeChange,
        handleCurrentChange
      }
    }
  })
</script>
<style lang="less" scoped>
.table-container{ 
  padding-bottom: 80px!important;
}
.filter-content{
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(100, 100, 100, 0.17);
  position: relative;
  .more-label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px #eee solid;
    box-shadow: 0 0 25px rgba(100, 100, 100, 0.17);
    font-size: 12px;
    color: #666;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border-radius: 8px 8px 0 0;
    background: #fdfdfd;
    padding-left: 5px;
    padding-right: 5px;
    &:hover{
      cursor: pointer;
    }
  }
}
.fiexd-pagination{
  position: fixed;
  bottom: 0;
  left: 210px;
  right: 15px;
  // width: 100%;
  background-color: #f8f8fa;
  padding: 20px 10px;
  z-index: 20;
}
  
</style>