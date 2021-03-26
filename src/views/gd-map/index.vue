<template lang="pug">
.container
  #mapMain.map-style
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
export default defineComponent({
  setup() {
    const text = ref<any>([])
    onMounted(() => {
      setTimeout(() => {
        let win: any = window
        let amap = win.AMap
        let map = new amap.Map("mapMain", {
          zoom: 11, //级别
          center: [116.397428, 39.90923], //中心点坐标
          viewMode: "3D" //使用3D视图
        })
        amap.plugin(
          [
            "AMap.ToolBar",
            "AMap.Scale",
            "AMap.OverView",
            "AMap.MapType",
            "AMap.Geolocation"
          ],
          function () {
            // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            map.addControl(new amap.ToolBar())

            // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            map.addControl(new amap.Scale())

            // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
            map.addControl(new amap.OverView({ isOpen: true }))

            // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            map.addControl(new amap.MapType())

            // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
            map.addControl(new amap.Geolocation())
          }
        )
      }, 0)
    })

    return {
      text
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  height: 90%;
}
.map-style {
  width: 100%;
  height: 100%;
}
</style>
