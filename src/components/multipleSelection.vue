<script setup lang="ts">

import ItemsList from "./itemsList.vue";
import SelectedItems from "./selectedItems.vue";
import {ref} from "vue";
import {IItems} from "../types/item";

const selectedItems = ref<IItems[]>([])
const items: IItems[] = [
  {
    "id": 1,
    "name": "Shoes 1"
  },
  {
    "id": 2,
    "name": "Shoes 2"
  },
  {
    "id": 3,
    "name": "Shoes 3"
  },
  {
    "id": 4,
    "name": "Shoes 4"
  },
  {
    "id": 5,
    "name": "T-shirt 1"
  },
  {
    "id": 6,
    "name": "T-shirt 2"
  },
  {
    "id": 7,
    "name": "T-shirt 3"
  },
  {
    "id": 8,
    "name": "T-shirt 4"
  }
]
const limit: number = 6

</script>

<template>
  <div>
    <selected-items :selected-items="selectedItems">
      <div class="amount">selected: {{ selectedItems.length }} / {{ limit }}</div>
    </selected-items>
    <items-list :items="items" :selected-items="selectedItems" :limit="6"></items-list>
  </div>
</template>

<style scoped>

.amount{
  grid-column: 1 / -1;
}

</style>