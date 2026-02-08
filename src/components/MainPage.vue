<template>
  <a-flex class="top-row" gap="large">
    <div class="column selected-user-items">
      <ItemsList
        :items="selectedUserItems"
      />
      <div>
        <strong>Selected:</strong>
        <span>{{ selectedUserItems.length }} / {{ MAX_SELECTED_USER_ITEMS }}</span>
      </div>
    </div>
    <div class="column selected-stock-item">
      <ItemElement
        v-if="selectedStockItem"
        :data="selectedStockItem"
      />
    </div>
  </a-flex>
  <a-flex class="bottom-row" gap="large">
    <div class="column">
      <ItemsList
        :items="userItems"
        :selectedItems="selectedUserItems"
        is-selectable
        @select="onUserItemSelect"
      />
    </div>
    <div class="column">
      <ItemsList
        :items="stockItems"
        :selectedItems="selectedStockItem ? [selectedStockItem] : []"
        is-selectable
        @select="onStockItemSelect"
      />
    </div>
  </a-flex>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ItemsList from "./ItemsList.vue";
import ItemElement, { type Item } from "./ItemElement.vue";

const MAX_SELECTED_USER_ITEMS = 6;

const userItems = ref<Item[]>([
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
]);
const stockItems = ref<Item[]>([
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
]);

const selectedUserItems = ref<Item[]>([]);
const selectedStockItem = ref<Item>();

const onUserItemSelect = (item: Item): void => {
  if (selectedUserItems.value.find(i => i.id === item.id)) {
    return;
  }
  if (selectedUserItems.value.length >= MAX_SELECTED_USER_ITEMS) {
    selectedUserItems.value.pop();
  }
  selectedUserItems.value.unshift(item);
};

const onStockItemSelect = (item: Item): void => {
  selectedStockItem.value = item;
};
</script>

<style scoped>
.top-row {
  height: 20vh;
  margin-bottom: 10px;
}

.bottom-row {
  height: 70vh;
}

.selected-user-items {
  padding: 20px;
}

.selected-stock-item {
  width: 200px;
}

.column {
  width: 50%;
  border: 3px solid black;
}

.bottom-row .column {
  padding: 30px;
}

.stock-item .item {
  width: 100%;
  height: 100%;
}
</style>
