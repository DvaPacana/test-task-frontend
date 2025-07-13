<template>
  <div :class="$style.root">
    <div
      v-for="item in props.items"
      :key="item.id"
      :class="[$style.item, { [$style.selected]: isSelected(item) }]"
      @click="onItemClick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../types'

interface ItemListProps {
  items: Item[]
  selectedItems?: Item[] | Item | null
  multiSelect?: boolean
  maxSelections?: number
}

const props = withDefaults(defineProps<ItemListProps>(), {
  selectedItems: () => [],
  multiSelect: false,
  maxSelections: Infinity,
})

const emit = defineEmits<{
  (e: 'update:selectedItems', selectedItems: Item[] | Item | null): void
}>()

const isSelected = (item: Item) => {
  if (Array.isArray(props.selectedItems))
    return props.selectedItems.some((selectedItem) => selectedItem.id === item.id)
  else if (props.selectedItems) return (props.selectedItems as Item).id === item.id
  return false
}

const onItemClick = (item: Item) => {
  if (props.multiSelect) {
    const selectedItems = Array.isArray(props.selectedItems) ? [...props.selectedItems] : []

    if (isSelected(item)) {
      const newSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      emit('update:selectedItems', newSelectedItems)
    } else if (selectedItems.length < props.maxSelections)
      emit('update:selectedItems', [...selectedItems, item])
  } else {
    if (isSelected(item)) emit('update:selectedItems', null)
    else emit('update:selectedItems', item)
  }
}
</script>

<style module>
.root {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.item {
  border: 1px solid var(--medium-gray);
  background-color: var(--light-gray);
  padding: 12px 16px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  font-weight: 500;
}

.item:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.selected {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--secondary-color);
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.3);
}

.selected:hover {
  background-color: var(--secondary-color);
}
</style>
