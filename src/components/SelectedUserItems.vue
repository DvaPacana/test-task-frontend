<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../stores/itemsStore';
import ItemCard from './ItemCard.vue';

const store = useItemsStore();
const { selectedUserItems, maxUserSelections } = storeToRefs(store);
</script>

<template>
  <div class="selected-panel">
    <div class="selected-panel__grid">
      <ItemCard
        v-for="item in selectedUserItems"
        :key="item.id"
        :item="item"
        :is-selected="true"
        @select="store.toggleUserItem(item)"
      />
    </div>
    <div class="selected-panel__counter">
      selected: {{ selectedUserItems.length }} / {{ maxUserSelections }}
    </div>
  </div>
</template>

<style scoped>
.selected-panel {
  border: 3px solid #333;
  padding: 16px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

.selected-panel__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
  flex: 1;
}

.selected-panel__counter {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  padding-top: 8px;
  border-top: 2px solid #ddd;
}
</style>
