<template>
  <div class="right-block">
    <div class="selected-item" >{{ selectedItem?.name ? selectedItem?.name : 'SELECTED ITEM' }}</div>
    <div class="item-list">
      <div
        class="item"
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item)"
        :class="{ selected: selectedItem && selectedItem.id === item.id }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' }
];

const selectedItem = ref(null);

const selectItem = (item) => {
  selectedItem.value = item;
};
</script>

<style scoped>
.right-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.selected-item {
  width: 150px;
  height: 150px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.item-list {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  border: 2px solid black;
  padding: 10px;
}

.item {
  width: 80px;
  height: 50px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.item.selected {
  background-color: #ddd;
}
</style>
