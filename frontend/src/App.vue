<template>
  <div class="app">
    <List
      :items="leftItems"
      :selected-items="selectedLeftItems"
      :max-selection="6"
      title="Selected:"
      :show-counter="true"
      @update:selectedItems="selectedLeftItems = $event"
    />
    <List
      :items="rightItems"
      :selected-items="selectedRightItem"
      :single-selection="true"
      title="Selected Item"
      @update:selectedItems="selectedRightItem = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import List from "./components/List.vue";

interface Item {
  id: number;
  name: string;
}

const leftItems: Item[] = [
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" },
];

const rightItems: Item[] = [
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" },
];

const selectedLeftItems = ref<Item[]>([]);
const selectedRightItem = ref<Item | null>(null);
</script>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .app {
    grid-template-columns: 1fr;
    gap: 40px
  }
}
</style>
