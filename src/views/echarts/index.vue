<template>
  <div class="container">
    <div id="main" class="chart-style"></div>
  </div>
</template>
<script lang="ts">
import * as echarts from 'echarts'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const text = ref<any>([])
    let myChart: any
    onMounted(() => {
      let dom = document.getElementById('main') as HTMLElement
      myChart = echarts.init(dom)
      myChart.setOption({
        title: {
          text: '访问量'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {},
        series: [
          {
            name: '人次',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    })
    return {
      text
    }
  }
})
</script>

<style lang="less" scoped>
.chart-style {
  width: 100%;
  height: 400px;
}
</style>
