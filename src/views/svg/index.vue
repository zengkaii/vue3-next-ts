<template>
  <div class="svg-chart-wrapper">
    <el-table :data="tableData" border>
      <el-table-column prop="time" label="日期" width="200px" align="center"></el-table-column>
      <el-table-column prop="ss" label="SS" width="200px" align="center">
        <template v-slot="{ row }">
          <span style="background: pink; color: black">{{ row.ss }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="fr" label="FR" width="200px" align="center"> </el-table-column>
      <el-table-column prop="f1" label="F1" width="200px" align="center"></el-table-column>
      <el-table-column prop="f2" label="F2" width="200px" align="center"></el-table-column>
    </el-table>
    <svg width="100%" height="100%" class="svg-icon">
      <g v-for="(item, index) in tableData" :key="index" transform="translate(0,0) scale(1)">
        <defs>
          <marker
            id="triangle"
            markerUnits="strokeWidth"
            markerWidth="5"
            markerHeight="4"
            refX="0"
            refY="2"
            orient="auto"
          >
            <path d="M 0 0 L 5 2 L 0 4 z" />
          </marker>
        </defs>
        <path
          :d="item.dPath"
          stroke="black"
          stroke-width="2"
          fill="none"
          style="marker-end: url(#triangle)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const dPath = ref('M 200,60 L 250,60 L 250 80')
    const tableData = ref([
      {
        time: '2019-03-21',
        ss: '351/137',
        dPath: 'M 180,53 L 300,53 L 300 70',
        col: 1
      },
      {
        time: '2019-03-21',
        fr: '351/137',
        dPath: 'M 322,90 L 500,90 L 500 110',
        col: 2
      },
      {
        time: '2019-03-21',
        f1: '351/137',
        dPath: 'M 522,125 L 700,125 L 700 145',
        col: 3
      },
      {
        time: '2019-03-21',
        f2: '351/137',
        dPath: 'M 675,160 L 300,160 L 300 180',
        col: 4
      },
      {
        time: '2019-03-21',
        fr: '351/139',
        col: 2
        // dPath: "M 552, 200 L 500,90 L 500 110"
      },
      {
        time: '2019-03-21',
        f2: '351/139',
        col: 4
        // dPath: "M 552, 200 L 500,90 L 500 110"
      }
    ])
    const clientWidth = 200
    const halfCellWidth = 100
    const clientHeight = 36
    const halfCellHeight = 18
    const width = 200
    function setLocation() {
      tableData.value.map((item, index) => {
        if (index < tableData.value.length - 1) {
          item.dPath = `M ${
            item.col < tableData.value[index + 1].col
              ? item.col * width + clientWidth
              : item.col * width
          },${(index + 1) * clientHeight + clientHeight - halfCellHeight} 
          L ${tableData.value[index + 1].col * width + clientWidth - halfCellWidth},${
            (index + 1) * clientHeight + clientHeight - halfCellHeight
          } 
          L ${tableData.value[index + 1].col * width + clientWidth - halfCellWidth},${
            (index + 2) * clientHeight
          } `
        }
        return item
      })
    }
    console.log(tableData.value)
    setLocation()
    return {
      dPath,
      tableData
    }
  }
})
</script>

<style lang="less">
.svg-chart-wrapper {
  position: relative;
  .svg-icon {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
