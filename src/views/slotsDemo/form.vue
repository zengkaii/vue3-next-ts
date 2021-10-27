<template>
  <div style="margin-top: 20px">
    <el-form ref="form" :model="formObj" label-width="80px" label-position="left">
      <el-form-item label="input">
        <el-input v-model="formObj.inputValue" style="width: 286px"></el-input>
      </el-form-item>
      <slot name="infoItem" type="infoItem"></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'editForm',
  setup() {
    const state = reactive({
      formObj: {
        inputValue: 'inputValue'
      }
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped></style>
