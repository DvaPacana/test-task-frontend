<script setup lang="ts">
defineProps<{
  selectedItems: { id: number; name: string }[]
  max: number
}>()
</script>
<template>
  <div class="selected-user-items-block">
    <transition-group name="fade" tag="div" class="selected-items-list">
      <div v-for="item in selectedItems" :key="item.id" class="selected-item">
        {{ item.name }}
      </div>
    </transition-group>
    <div>selected: {{ selectedItems.length }} / {{ max }}</div>
  </div>
</template>
<style scoped>
.selected-user-items-block {
  border: 3px solid black;
  padding: 12px;
  min-width: 260px;
  min-height: 100px;
}
.selected-items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.selected-item {
  border: 3px solid black;
  padding: 8px;
  min-width: 60px;
  text-align: center;
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
