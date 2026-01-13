<script setup lang="ts">
import { ref } from "vue";
import { AVAILABLE_LEFT_ITEMS_COUNT, LEFT_BLOCK_ITEMS, RIGHT_BLOCK_ITEMS } from "./constants.ts";
import { type Item } from './types.ts';

const leftItems = ref<Item[]>(LEFT_BLOCK_ITEMS);
const rightItems = ref<Item[]>(RIGHT_BLOCK_ITEMS);

const selectedLeft = ref<Item[]>([]);
const selectedRight = ref<Item | null>(null);

function isLeftChosen(item: Item) {
  return selectedLeft.value.some((i) => i.id === item.id);
}

function toggleLeft(item: Item) {
  const exists = isLeftChosen(item);
  if (exists) {
    selectedLeft.value = selectedLeft.value.filter((i) => i.id !== item.id);
  } else if (selectedLeft.value.length < AVAILABLE_LEFT_ITEMS_COUNT) {
    selectedLeft.value.push(item);
  }
}

function selectRight(item: Item) {
  selectedRight.value = selectedRight.value?.id === item.id ? null : item;
}
</script>

<template>
  <main class="main">
    <div class="container">
      <ul class="adaptive-grid ">
        <li v-for="item in selectedLeft" :key="item.id" class="item ">
          {{ item.name }}
        </li>
      </ul>
      <div class="adaptive-grid">
        <div v-if="selectedRight?.name" class="item ">
          {{ selectedRight?.name }}
        </div>
      </div>

      <ul class="adaptive-grid ">
        <li
          v-for="item in leftItems"
          :key="item.id"
          @click="toggleLeft(item)"
          class="item "
          :class="{ chosen: isLeftChosen(item) }"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul class="adaptive-grid ">
        <li
          v-for="item in rightItems"
          :key="item.id"
          @click="selectRight(item)"
          class="item "
          :class="{ chosen: selectedRight?.id === item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.main {
  font-family: sans-serif;
  padding: 20px;
  height: 100%;
  font-size: 22px;
  font-weight: 700;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.7fr;
  gap: 20px;
  height: 100%;
}

li {
  list-style: none;
}

.adaptive-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
  grid-template-rows: repeat(auto-fit, 50px);
  gap: 10px;
  padding: 10px;
  overflow: auto;
  border: 1px solid white;
}

.item {
  cursor: pointer;
  padding: 6px 8px;
  height: 100%;
  width: 100%;
  text-align: center;
  text-align: center;
  border: 1px solid white;
}

.chosen {
  background: #18c81e;
  color: #037907
}
</style>

