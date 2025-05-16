<script setup lang="ts">
defineProps<{
  items: { id: number; name: string }[]
  selectedItems: { id: number; name: string }[]
  max: number
}>()

defineEmits<{
  (e: 'select', item: { id: number; name: string }): void
}>()
</script>
<template>
  <div class="user-items-block">
    <transition-group name="fade" tag="div" class="user-items-list">
      <div
        v-for="item in items"
        :key="item.id"
        @click="$emit('select', item)"
        class="user-item"
        :class="{ selected: selectedItems.some((i) => i.id === item.id) }"
      >
        {{ item.name }}
      </div>
    </transition-group>
  </div>
</template>
<style scoped>
.user-items-block {
  flex: 1;
  border: 4px solid black;
  padding: 16px;
  min-height: 400px;
}
.user-items-list {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.user-item {
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
.user-item.selected {
  background: var(--user-item-selected-bg);
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
