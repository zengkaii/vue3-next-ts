<template lang="pug">
.table-container
  .filter-content(ref='searchElm', :style='showAllFilter ? "" : "padding:12px 10px"')
    .more-label(@click='setFilterForm()')
      span(v-show='!showAllFilter')
        i.el-icon-caret-bottom
        | 展开筛选
      span(v-show='showAllFilter')
        i.el-icon-caret-top
        | 收起
    el-form(inline, v-show='showAllFilter')
      el-form-item(label='条件一：')
        el-input
      el-form-item(label='条件二：')
        el-input
      el-form-item(label='条件三：')
        el-input
      el-form-item(label='条件四：')
        el-input
      el-form-item(label='条件五：')
        el-input
  .table-content
    el-table(:data='tableData', style='width: 100%', border, :max-height='maxTableHeight')
      el-table-column(prop='one', label='序号', type='index', width='50px', align='center')
      el-table-column(prop='name', label='姓名', align='center')
      el-table-column(prop='engName', label='英文名', align='center')
      el-table-column(prop='phone', label='手机号码', align='center')
      el-table-column(label='操作', align='center')
        template(#default='scope')
          el-button(type='primary') 编辑
          el-button(type='success') 查看
          el-button(type='danger') 删除
  .fiexd-pagination
    el-pagination(
      @size-change='handleSizeChange',
      @current-change='handleCurrentChange',
      :currentPage='currentPage',
      :page-size='pageSize',
      layout='total, sizes, prev, pager, next',
      :total='1000'
    )
</template>
<script lang="ts">
import tableHeight from './tableHeight'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'TableOne',
  setup() {
    const { showAllFilter, maxTableHeight, setFilterForm } = tableHeight()
    const tableData = ref<any>([])
    const currentPage = ref<number>(1)
    const pageSize = ref<number>(10)
    let tableD = [] as any[]
    for (let i = 1; i < 50; i++) {
      tableD.push({
        name: `张三${i}`,
        engName: 'zhangsan',
        phone: '18888888888'
      })
    }
    tableData.value = Object.freeze(tableD)

    function handleSizeChange(size: number) {
      pageSize.value = size
    }

    function handleCurrentChange(page: number) {
      currentPage.value = page
    }

    // 用法如下:
    function fn1(x) {
      return x + 1
    }
    function fn2(x) {
      return x + 2
    }
    function fn3(x) {
      return x + 3
    }
    function fn4(x) {
      return x + 4
    }
    function compose(...fn) {
      if (!fn.length) return (v) => v
      if (fn.length === 1) return fn[0]
      return fn.reduce(
        (pre, cur) =>
          (...args) =>
            pre(cur(...args))
      )
    }
    const a = compose(fn1, fn2, fn3, fn4)
    console.log(a(1)) // 1+4+3+2+1=11
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
.filter-content {
  background-color: #fff;
  padding: 20px 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(100, 100, 100, 0.17);
  position: relative;
  transition: 0.3s all;
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
    &:hover {
      cursor: pointer;
    }
  }
}

.fiexd-pagination {
  position: fixed;
  bottom: 0;
  // left: 200px;
  // right: 0px;
  width: 100%;
  background-color: #f8f8fa;
  padding: 20px 10px;
  z-index: 20;
}
</style>
