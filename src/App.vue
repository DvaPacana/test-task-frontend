<script setup>
import {reactive, ref} from "vue";
import ItemsSelector from "@/components/ItemsSelector.vue";

const multiplySelectItemsArr = [
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
const itemsArr = [
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
const maxItems = 6
const selectedItems = reactive(new Set())
const selectedItem = ref(null)

function addItemHandler(item) {
  if (selectedItems.size < maxItems) {
    selectedItems.add(item)
  }
}

function deleteItemHandler(item) {
  selectedItems.delete(item)
}

function toggleItemHandler(item) {
  if (selectedItem.value?.id === item?.id) selectedItem.value = null
  else selectedItem.value = item
}


</script>

<template>
  <section class="wrapper">
    <ItemsSelector :itemsList="multiplySelectItemsArr"
                   :selectedItems="selectedItems"
                   :maxItems="maxItems"
                   @deleteItem="deleteItemHandler"
                   @selectItem="addItemHandler"
                   multiple
    >
      <template #itemsListDescription>
        <p>Selected items: {{ selectedItems.size }} / {{ maxItems }}</p>
      </template>
    </ItemsSelector>
    <ItemsSelector :itemsList="itemsArr"
                   :selectedItem="selectedItem"
                   @selectItem="toggleItemHandler"
    >
      <template #skeletonDescription>
        N/A
      </template>
    </ItemsSelector>
  </section>
</template>

<style scoped>

.wrapper {
  display: flex;
  flex-wrap: nowrap;
  min-width: 100%;
  gap: 0.5rem;
}


</style>
