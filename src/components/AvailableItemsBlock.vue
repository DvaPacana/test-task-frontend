<script setup lang="ts">
defineProps<{
  items: { id: number; name: string }[]
  selectedItem: { id: number; name: string } | null
}>()

defineEmits<{
  (e: 'select', item: { id: number; name: string }): void
}>()
</script>
<template>
  <div class="available-items-block">
    <transition-group name="fade" tag="div" class="available-items-list">
      <div
        v-for="item in items"
        :key="item.id"
        @click="$emit('select', item)"
        class="available-item"
        :class="{ selected: selectedItem && selectedItem.id === item.id }"
      >
        {{ item.name }}
      </div>
    </transition-group>
  </div>
</template>
<style scoped>
.available-items-block {
  flex: 1;
  border: 4px solid black;
  padding: 16px;
  min-height: 400px;
}
.available-items-list {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.available-item {
  border: 3px solid black;
  padding: 8px;
  min-width: 60px;
  text-align: center;
  cursor: pointer;
  background: var(--item-bg);
  transition:
    background 0.3s,
    box-shadow 0.3s;
}
.available-item.selected {
  background: var(--available-item-selected-bg);
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
