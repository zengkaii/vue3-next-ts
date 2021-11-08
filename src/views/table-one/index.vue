<template>
  <div class="table-container">
    <div class="filter-content" ref="searchElm" :style="showAllFilter ? '' : 'padding:12px 10px'">
      <div class="more-label" @click="setFilterForm()">
        <span v-show="!showAllFilter">
          <i class="el-icon-caret-bottom">展开筛选</i>
        </span>
        <span v-show="showAllFilter">
          <i class="el-icon-caret-top">收起</i>
        </span>
      </div>
      <el-form inline v-show="showAllFilter">
        <el-form-item label="条件一：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="条件二：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="条件三：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="条件四：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="条件五：">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-content">
      <el-table :data="tableData" style="width: 100%" border :max-height="maxTableHeight">
        <el-table-column prop="one" label="序号" type="index" width="50px" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="engName" label="英文名" align="center"> </el-table-column>
        <el-table-column prop="phone" label="手机号码" align="center"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template>
            <el-button type="primary">编辑</el-button>
            <el-button type="success">查看</el-button>
            <el-button type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="fiexd-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :currentPage="listQuery.currentPage"
        :page-size="listQuery.pageSize"
        layout="total, sizes, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import tableHeight from './tableHeight'
import { defineComponent, reactive, toRefs } from 'vue'
interface TableType {
  tableData: any[]
  total: number
  listQuery: {
    currentPage: number
    pageSize: number
  }
}
export default defineComponent({
  name: 'TableOne',
  setup() {
    const { showAllFilter, maxTableHeight, setFilterForm } = tableHeight()
    const state = reactive<TableType>({
      tableData: [],
      total: 1000,
      listQuery: {
        currentPage: 1,
        pageSize: 10
      }
    })
    let tableD = [] as any[]
    for (let i = 1; i < 50; i++) {
      tableD.push({
        name: `张三${i}`,
        engName: 'zhangsan',
        phone: '18888888888'
      })
    }
    state.tableData = tableD
    function handleSizeChange(size: number) {
      state.listQuery.pageSize = size
    }
    function handleCurrentChange(page: number) {
      state.listQuery.currentPage = page
    }
    return {
      ...toRefs(state),
      showAllFilter,
      maxTableHeight,
      setFilterForm,
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
