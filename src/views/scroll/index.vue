<template lang="pug">
.container
  .scroll-content
    .content(:style='`transform: translate(0px, ${translate}px)`')
      ul
        li.scroll-item(v-for='(item, index) in showlist', :key='index') {{ item.name }}
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const translate = ref<number>(0)
    const list = ref<any[]>([
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      }
    ])
    const showlist = ref<any[]>([...list.value, ...list.value])
    // const listCopy =
    let timer = null
    function translatePlus() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      timer = setInterval(() => {
        if (translate.value === -240) {
          translate.value = 0
        } else {
          translate.value--
        }
      }, 50)
    }
    setTimeout(() => {
      clearInterval(timer)
    }, 10000)
    translatePlus()

    return { translate, showlist }
  }
})
</script>
<style lang="less" scoped>
.scroll-content {
  height: 100px;
  width: 120px;
  overflow: hidden;
  .content {
    overflow: hidden;
    transition: all 0ms ease-in 0s;
  }
  .scroll-item {
    height: 30px;
    line-height: 30px;
    width: 120px;
    text-align: center;
    margin-bottom: 10px;
    background-color: red;
  }
}
</style>