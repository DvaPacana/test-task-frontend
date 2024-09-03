<template>
  <div class="left-block">
    <div class="selected-items">
      <div class="item" v-for="item in selectedItems" :key="item.id">{{ item.name }}</div>
      <p>selected: {{ selectedItems.length }} / 6</p>
    </div>
    <div class="item-list">
      <div
        class="item"
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item)"
        :class="{ selected: selectedItems.includes(item) }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' }
];

const selectedItems = ref([]);

const selectItem = (item) => {
  if (selectedItems.value.length < 6) {
    selectedItems.value.push(item);
  }
};
</script>


<style scoped lang="scss">

.selected-items {
  position: relative;
  width: 300px;
  display: flex;
  gap: 5px;
  border: 2px solid black;
  padding: 10px;
  padding-bottom: 40px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  p {
    position: absolute;
    bottom: -10px;
  }
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
  cursor: pointer;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
}
</style>
