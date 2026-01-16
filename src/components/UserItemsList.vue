<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../stores/itemsStore';
import { userItems } from '../data/items';
import ItemCard from './ItemCard.vue';

const store = useItemsStore();
const { canSelectMoreUserItems } = storeToRefs(store);
</script>

<template>
  <div class="items-list">
    <div class="items-list__grid">
      <ItemCard
        v-for="item in userItems"
        :key="item.id"
        :item="item"
        :is-selected="store.isUserItemSelected(item.id)"
        :is-disabled="!canSelectMoreUserItems && !store.isUserItemSelected(item.id)"
        @select="store.toggleUserItem(item)"
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
