<template>
  <div class="container">
    <todoButton> todu button </todoButton>
    <editForm>
      <template v-slot:infoItem="slotProps">
        <el-form-item label="slot">
          <span>I am {{ slotProps.type }} slot. Here maybe some info. </span>
        </el-form-item>
      </template>
    </editForm>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import todoButton from './todu-button.vue'
import editForm from './form.vue'
export default defineComponent({
  name: 'slotsDemo',
  components: { todoButton, editForm },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
