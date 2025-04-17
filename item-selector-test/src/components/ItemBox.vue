<template>
  <div 
    class="item-box" 
    :class="{ selected }"
    @click="$emit('click')"
  >
    <div class="item-content">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../types'

defineProps<{
  item: Item;
  selected?: boolean;
}>()

defineEmits<{
  (e: 'click'): void;
}>()
</script>

<style scoped>
.item-box {
  border: 1px solid #000;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;
}

.item-box:hover {
  background-color: #f0f0f0;
}

.selected {
  background-color: #e0e0e0;
  border-color: #666;
}

.item-content {
  word-break: break-word;
  font-size: 14px;
  line-height: 1.2;
}
</style> 