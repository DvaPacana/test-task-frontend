<script setup lang="ts">
import { ref, reactive } from "vue";
const leftBlocks = ref([
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
const rightBlocks = ref([
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
const selectedItems = ref([]);
const selectedItem = reactive({});

const addElemInArray = function(elem) {
  if (!selectedItems.value.find(row => row.id === elem.id) && selectedItems.value.length !== 6) {
    selectedItems.value.push(elem);
  } else {
    selectedItems.value = selectedItems.value.filter(row => row.id !== elem.id);
  }
}

const isSelectedInArray = function(id) {
  return selectedItems.value.find(row => row.id === id) as boolean;
}

const isSelected = function(id) {
  return selectedItem.id === id as boolean;
}

const selectItem = function(block) {
  if (selectedItem?.id !== block.id) {
    Object.assign(selectedItem, block);
  } else {
    Object.keys(selectedItem).forEach(key => delete selectedItem[key]);
  }
}
</script>

<template>
  <main>
    <div class="up_items">
      <div class="square_selected_item_left">
        <div
          class="child_square"
          v-for="block of selectedItems"
          :key="block.id"
        >
          {{ block.name }}
        </div>
        <span class="span_selected">Selected: {{ selectedItems.length }}/6</span>
      </div>
      <div class="square_selected_item_right">
        {{ selectedItem.name }}
      </div>
    </div>
    <div class="bottom_items">
      <div class="parent_square">
        <div
          class="child_square"
          v-for="block of leftBlocks"
          :key="block.id"
          @click="addElemInArray(block)"
          :class="{ isSelected: isSelectedInArray(block.id) }"
        >
          {{ block.name }}
        </div>
      </div>
      <div class="parent_square">
        <div
          class="child_square"
          v-for="block of rightBlocks"
          :key="block.id"
          @click="selectItem(block)"
          :class="{ isSelected: isSelected(block.id) }"
        >
          {{ block.name }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.up_items {
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
}
.square_selected_item_left {
  width: 400px;
  height: 400px;
  border: 4px solid #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
}
.square_selected_item_right {
  width: 400px;
  height: 400px;
  border: 4px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.bottom_items {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
}
.parent_square {
  width: 48%;
  height: 60vh;
  border: 4px solid #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.child_square {
  min-width: 100px;
  width: 100px;
  min-height: 100px;
  height: 100px;
  border: 2px solid #000;
  transition: .3s;
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.child_square:hover {
  background-color: #c7c7c7;
  cursor: pointer;
}
.span_selected {
  position: absolute;
  bottom: 12px;
  left: 12px;
}
.isSelected {
  background-color: #c7c7c7;
}
</style>