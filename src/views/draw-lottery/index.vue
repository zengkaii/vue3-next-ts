<template lang="pug">
.container.draw-lottery-content
  .draw-lottery-box
    .draw-lottery-item(v-for="item in lotteryList", :key="item.id") 
      span.item-name(@click="start(item.type)") {{ item.name }}
</template>
<script lang="ts">
import { defineComponent, ref } from "vue"
interface LOTTERY {
  id: number
  name: string
  local: number
  type: "button" | "prize"
  index: number
}
export default defineComponent({
  name: "DrawLottery",
  setup() {
    const lotteryList = ref<LOTTERY[]>([
      {
        id: 1,
        name: "A",
        local: 1,
        type: "prize",
        index: 1
      },
      {
        id: 2,
        name: "B",
        local: 1,
        type: "prize",
        index: 2
      },
      {
        id: 3,
        name: "C",
        local: 1,
        type: "prize",
        index: 3
      },
      {
        id: 4,
        name: "H",
        local: 1,
        type: "prize",
        index: 4
      },
      {
        id: 5,
        name: "start",
        local: 1,
        type: "button",
        index: 5
      },
      {
        id: 6,
        name: "D",
        local: 1,
        type: "prize",
        index: 6
      },
      {
        id: 7,
        name: "G",
        local: 1,
        type: "prize",
        index: 7
      },
      {
        id: 8,
        name: "F",
        local: 1,
        type: "prize",
        index: 8
      },
      {
        id: 9,
        name: "E",
        local: 1,
        type: "prize",
        index: 9
      }
    ])

    function start(type: string) {
      if (type !== "button") {
        return
      }
      console.log("start")
    }
    return {
      lotteryList,
      start
    }
  }
})
</script>
<style lang="less" scoped>
.draw-lottery-content {
  .draw-lottery-box {
    width: 300px;
    height: 300px;
    .draw-lottery-item {
      user-select: none;
      box-sizing: border-box;
      display: inline-block;
      width: 100px;
      height: 100px;
      border-left: 1px solid #000;
      border-bottom: 1px solid #000;
      margin-top: -3px;
      position: relative;
      .item-name {
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .draw-lottery-item:nth-child(1),
    .draw-lottery-item:nth-child(2),
    .draw-lottery-item:nth-child(3) {
      border-top: 1px solid #000;
    }
    .draw-lottery-item:nth-child(3n) {
      border-right: 1px solid #000;
    }
    .draw-lottery-item:nth-child(5) {
      background-color: #f56c6c;
      cursor: pointer;
    }
    .draw-lottery-item:nth-child(5):hover {
      background-color: #e63b3b;
    }
  }
}
</style>