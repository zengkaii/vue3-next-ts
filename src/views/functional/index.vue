<template>
  <div>
    <Functional level="3">这是一个h3</Functional>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Functional from './index'

export default defineComponent({
  components: { Functional },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
