<template lang="pug">
.container
  el-button(@click="dialogShow = true" ref="refButton") 点我
  dialogComponent(v-model="dialogShow" title="dialogComponent" v-if="dialogShow")
</template>
<script lang="ts">
  import dialogComponent from './dialog-component.vue'
  import { defineComponent, ref, nextTick  } from 'vue'
  export default defineComponent({
    name: 'Dialog',
    components: {dialogComponent},
    setup() {
      const dialogShow = ref<boolean>(false)
      const refButton = ref<any>(null)
      nextTick(() => {
        console.log(refButton.value.handleClick)
      })
      return {
        dialogShow,
        refButton
      }
    }
  })
</script>