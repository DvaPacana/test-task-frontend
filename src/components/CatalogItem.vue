<template>
  <div class="item">
    {{name}}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style scoped>
.item {
  padding: 12px 8px;
  border: 1px solid gainsboro;
  border-radius: 12px;
  cursor: pointer;
}
</style>
