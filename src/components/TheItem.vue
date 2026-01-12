<script setup lang='ts'>
import type { Item } from '@/types';

const {
  item,
  isSelected = false
} = defineProps<{
  item: Item,
  isSelected?: boolean
}>()

const emit = defineEmits<{
  itemClicked: [item: Item],
}>()
</script>

<template>
  <span
    :class="[
      'item',
      { 'selected': isSelected }
    ]"
    @click="emit('itemClicked', item)"
  >
    {{ item.name }}
  </span>
</template>

<style scoped>
.item {
  padding: 0.5rem;
  display: grid;
  place-content: center;
  border: 2px solid;
  border-color: var(--color-main);
  cursor: pointer;
  user-select: none;

  &.selected {
    border-color: var(--color-accent);
  }
}
</style>
