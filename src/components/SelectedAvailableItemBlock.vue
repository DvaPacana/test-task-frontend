<script setup lang="ts">
defineProps<{
  selectedItem: { id: number; name: string } | null
}>()
</script>
<template>
  <div class="selected-available-item-block">
    <span v-if="selectedItem">{{ selectedItem.name }}</span>
    <span v-else>SELECTED ITEM</span>
  </div>
</template>
<style scoped>
.selected-available-item-block {
  border: 3px solid black;
  padding: 24px;
  min-width: 180px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
</style>
