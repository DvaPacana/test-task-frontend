<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../stores/itemsStore';

const store = useItemsStore();
const { selectedAvailableItem } = storeToRefs(store);
</script>

<template>
  <div class="selected-item-panel">
    <div v-if="selectedAvailableItem" class="selected-item">
      <div class="selected-item__name">{{ selectedAvailableItem.name }}</div>
      <div class="selected-item__id">#{{ selectedAvailableItem.id }}</div>
    </div>
    <div v-else class="selected-item-placeholder">
      SELECTED ITEM
    </div>
  </div>
</template>

<style scoped>
.selected-item-panel {
  border: 3px solid #333;
  padding: 16px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.selected-item {
  text-align: center;
  padding: 24px;
  border: 2px solid #4CAF50;
  background-color: #4CAF50;
  color: white;
  min-width: 150px;
  border-radius: 4px;
}

.selected-item__name {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
}

.selected-item__id {
  font-size: 16px;
  opacity: 0.9;
}

.selected-item-placeholder {
  font-size: 20px;
  font-weight: 600;
  color: #999;
  text-align: center;
}
</style>
