<template>
  <div>
    <el-input v-model="elInputValueNumber" type="text" v-onlyNumber style="margin-bottom: 20px" />
    <el-input v-model="elInputValue" type="text" v-focus style="margin-bottom: 20px" />
    <input v-model="inputValue" type="text" v-focus2 style="margin-bottom: 20px" />
    <div v-green style="font-weight: bold">红色红色</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  directives: {
    onlyNumber: {
      mounted(el) {
        let OnlyNumberReg = new RegExp(/[^\d]/g)
        let OnlyNumberFun = (e) => {
          // 利用 e.isComposing 来判断是否处在汉字输入中
          if (!e.isComposing && OnlyNumberReg.test(e.target.value)) {
            e.target.value = e.target.value.replace(OnlyNumberReg, '')
          }
        }
        el.addEventListener('input', OnlyNumberFun, false)
        el.addEventListener(
          'compositionend',
          (e) => {
            // compositionend 后立即执行一次过滤函数 将汉字输入的内容过滤一次
            OnlyNumberFun(e)
          },
          false
        )
      }
    },
    focus: {
      mounted(el, binding, vnode) {
        vnode.el.children[0].focus()
        setTimeout(() => {
          vnode.el.children[0].value = 'v-focus 局部指令'
        })
      }
    },
    focus2: {
      mounted(el) {
        el.focus()
        setTimeout(() => {
          el.value = 'v-focus 局部指令'
        })
      }
    }
  },
  setup() {
    const elInputValueNumber = ref<string>('')
    const elInputValue = ref<string>('')
    const inputValue = ref<string>('')
    return { elInputValueNumber, elInputValue, inputValue }
  }
})
</script>

<style scoped>
</style>