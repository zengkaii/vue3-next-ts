<template>
  <div>
    <div class="container">{{ num }}</div>
    <div class="button" @click="numPlus()">点我</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(props) {
    let num = ref<number>(1)

    function numPlus() {
      num.value += 1
    }

    return {
      num,
      numPlus
    }
  }
})
</script>
