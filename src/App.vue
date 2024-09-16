<template>
  <div class="app_container">
    <div class="panel-row">
      <ItemsPanel
          :items="leftItemStore.itemsList"
          :selected="selectedItemsLeft"
          :maxItems="MAX_LEFT_ITEMS"
          @toggle="item=>leftItemStore.toggleItem(item)"
          @clear="leftItemStore.clearItems"
      />
      <ItemsPanel
          :items="rightItemStore.itemsList"
          :selected="selectedItemsRight"
          :maxItems="MAX_RIGHT_ITEMS"
          @toggle="item=>rightItemStore.toggleItem(item)"
          @clear="rightItemStore.clearItems"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { createItemStore } from './stores/itemsStore'
import ItemsPanel from './components/ItemsPanel.vue'
import {LEFT_ITEMS, RIGHT_ITEMS} from "@/data/items";

const MAX_LEFT_ITEMS = 6;
const MAX_RIGHT_ITEMS = 1;

const leftItemStore = createItemStore('left', LEFT_ITEMS, MAX_LEFT_ITEMS);
const rightItemStore = createItemStore('right', RIGHT_ITEMS, MAX_RIGHT_ITEMS);

const { selectedItems: selectedItemsLeft } = storeToRefs(leftItemStore);
const { selectedItems: selectedItemsRight } = storeToRefs(rightItemStore);

</script>

<style scoped>
.app_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.panel-row {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .panel-row {
    flex-direction: column;
  }
}
</style>