<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="chip chip--active">
    {{ name }}
  </div>
</template>

<style scoped>
.chip {
  border: 2px solid #222;
  border-radius: 6px;
  padding: 8px 10px;
  background: #f3f3f3;
  font-weight: 600;
  font-size: 13px;
}

.chip--active {
  background: #111;
  color: #fff;
}
</style>
