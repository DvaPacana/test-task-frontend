<script setup lang="ts">
import { useItemsStore } from '../stores/itemsStore';
import { availableItems } from '../data/items';
import ItemCard from './ItemCard.vue';

const store = useItemsStore();
</script>

<template>
  <div class="items-list">
    <div class="items-list__grid">
      <ItemCard
        v-for="item in availableItems"
        :key="item.id"
        :item="item"
        :is-selected="store.isAvailableItemSelected(item.id)"
        @select="store.selectAvailableItem(item)"
      />
    </div>
  </div>
</template>

<style scoped>
.items-list {
  border: 3px solid #333;
  padding: 16px;
  background-color: #fff;
}

.items-list__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
</style>
