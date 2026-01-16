<script setup lang="ts">
import type { Item } from '../types/item';

interface Props {
  item: Item;
  isSelected: boolean;
  isDisabled?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  select: [item: Item];
}>();
</script>

<template>
  <div 
    class="item-card" 
    :class="{ 
      'item-card--selected': isSelected, 
      'item-card--disabled': isDisabled 
    }"
    @click="!isDisabled && emit('select', item)"
  >
    <div class="item-card__name">{{ item.name }}</div>
    <div class="item-card__id">#{{ item.id }}</div>
  </div>
</template>

<style scoped>
.item-card {
  border: 2px solid #333;
  padding: 12px;
  min-width: 80px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #fff;
  user-select: none;
}

.item-card:hover:not(.item-card--disabled) {
  background-color: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.item-card--selected {
  background-color: #4CAF50;
  color: white;
  border-color: #45a049;
}

.item-card--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.item-card__name {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  text-align: center;
}

.item-card__id {
  font-size: 12px;
  opacity: 0.7;
}
</style>
