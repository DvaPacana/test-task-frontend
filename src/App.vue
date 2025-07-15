<template>
  <div class="container">
    <div class="selected-items-container">
      <selected-items :items="selectedUserItems"/>
      <selected-items :items="selectedAvailableItems"/>
    </div>

    <section class="catalogs">
<!--      каталог наших вещей-->
      <catalog
          :items="OUR_ITEMS"
          @on-select-item="selectItems(true, $event)"
      />

<!--      каталог вещей на выбор-->
      <catalog
          :items="AVAILABLE_ITEMS"
          @on-select-item="selectItems(false, $event)"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import Catalog from "./components/Catalog.vue";
import SelectedItems from "./components/SelectedItems.vue";
import {reactive} from "vue";
import type {ICatalogItem} from "./type/api.type.ts";

const AVAILABLE_ITEMS = [
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

const OUR_ITEMS = [
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

const selectedUserItems = reactive(new Set<ICatalogItem>([]))
const selectedAvailableItems = reactive(new Set<ICatalogItem>([]))

const selectItems = (isUserItem: boolean, item: ICatalogItem) => {
  if (isUserItem) {
    if (selectedUserItems.has(item)) selectedUserItems.delete(item)
    else if (selectedUserItems.size < 6) selectedUserItems.add(item)
  }
  else {
    if (selectedAvailableItems.has(item)) selectedAvailableItems.delete(item)
    else if (selectedAvailableItems.size < 1) selectedAvailableItems.add(item)
  }
}
</script>

<style scoped>

.selected-items-container {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.container {
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  flex: 1;
  gap: 24px;
}

.catalogs {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
</style>
