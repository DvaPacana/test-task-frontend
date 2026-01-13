<script setup lang="ts">
import type { Item } from '../types';

const props = defineProps<{
  items: Item[];
  maxSelected?: number;
  multiSelect: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:selected', value: Item[]): void;
}>();

const selected = defineModel<Item[]>({
  default: () => [],
});

function isSelected(item: Item): boolean {
  return selected.value.some(i => i.id === item.id);
}

function toggleItem(item: Item): void {
  const index = selected.value.findIndex(i => i.id === item.id);

  if (index !== -1) {
    selected.value.splice(index, 1);
  } else {
    if (props.multiSelect) {
      if (!props.maxSelected || selected.value.length < props.maxSelected) {
        selected.value.push(item);
      }
    } else {
      selected.value = [item];
    }
  }

  emit('update:selected', [...selected.value]);
}
</script>


<template>
  <div class="item-selector">
    <div class="items-list">
      <button
        v-for="item in items"
        :key="item.id"
        :class="{ selected: isSelected(item) }"
        @click="toggleItem(item)"
        class="item-button"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>



<style scoped>
.item-selector {
  flex: 1;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.item-button {
  padding: 8px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
}

.item-button.selected {
  background: #d0eaff;
  border-color: #007bff;
}
</style>