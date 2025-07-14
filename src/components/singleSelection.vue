<script setup lang="ts">
import {ref} from "vue";
import ItemsList from "./itemsList.vue";
import SelectedItems from "./selectedItems.vue";
import {IItems} from "../types/item";

const selectedItems = ref<IItems[]>([])
const items: IItems[] = [
  {
    "id": 11,
    "name": "Jacket 1"
  },
  {
    "id": 12,
    "name": "Jacket 2"
  },
  {
    "id": 13,
    "name": "Jacket 3"
  },
  {
    "id": 14,
    "name": "Jacket 4"
  },
  {
    "id": 15,
    "name": "Hoodie 1"
  },
  {
    "id": 16,
    "name": "Hoodie 2"
  },
  {
    "id": 17,
    "name": "Hoodie 3"
  },
  {
    "id": 18,
    "name": "Hoodie 4"
  }
]

</script>

<template>
  <div>
    <selected-items :selected-items="selectedItems"></selected-items>
    <items-list :items="items" :selected-items="selectedItems" :limit="1"></items-list>
  </div>
</template>

<style scoped>

</style>