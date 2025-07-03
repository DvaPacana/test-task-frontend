<script setup>
import { ref } from "vue";
import { leftBlock, rightBlock } from "~/data/items";

const selectedLeftItems = ref([]);
const selectedRightItem = ref(null);

function toggleLeftItem(item) {
  if (selectedLeftItems.value.some((i) => i.id === item.id)) {
    selectedLeftItems.value = selectedLeftItems.value.filter((i) => i.id !== item.id);
  } else if (selectedLeftItems.value.length < 6) {
    selectedLeftItems.value.push(item);
  }
}

function selectRightItem(item) {
  if (selectedRightItem.value) {
    if (selectedRightItem.value.id == item.id) {
      selectedRightItem.value = null;
    } else {
      selectedRightItem.value = item;
    }
  } else {
    selectedRightItem.value = item;
  }
}
</script>

<template>
  {{ selectedRightItem }}
  <div class="content">
    <div class="content__top">
      <h2>Верхняя часть</h2>
      <div class="content__top-items">
        <div class="content__top-left">
          <p>Выбрано элементов ({{ selectedLeftItems.length }} / 6)</p>
          <div class="content__top-left-items">
            <div v-for="item in selectedLeftItems" :key="item.id" class="content__top-left-item">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="content__top-right">
          <div>Выбранный элемент</div>
          <div v-if="selectedRightItem" class="content__top-right-item">
            {{ selectedRightItem.name }}
          </div>
          <div v-else class="content__top-right-text">Не выбрано</div>
        </div>
      </div>
    </div>

    <div class="content__bottom">
      <h2>Нижняя часть</h2>
      <div class="content__bottom-items">
        <div class="content__bottom-left">
          <div class="content__bottom-left-items">
            <div
              v-for="item in leftBlock"
              :key="item.id"
              @click="toggleLeftItem(item)"
              class="content__bottom-left-item"
              :style="{
                backgroundColor: selectedLeftItems.some((i) => i.id === item.id) ? '#e0ffe0' : 'white',
              }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <div class="content__bottom-right">
          <div class="content__bottom-right-items">
            <div
              v-for="item in rightBlock"
              :key="item.id"
              @click="selectRightItem(item)"
              class="content__bottom-right-item"
              :style="{
                backgroundColor: selectedRightItem && selectedRightItem.id === item.id ? '#e0ffe0' : 'white',
              }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content {
  padding: 20px;
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
}

.content__top-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.content__top-left,
.content__top-right,
.content__bottom-left,
.content__bottom-right {
  border: 1px solid black;
  padding: 10px;
  width: 48%;
}

.content__top-left-items {
  display: flex;
  flex-wrap: wrap;
}

.content__top-left-item {
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
}

.content__top-right-item {
  border: 1px solid black;
  margin-top: 10px;
  padding: 5px;
}

.content__top-right-text {
  margin-top: 10px;
}

.content__bottom-items {
  display: flex;
  justify-content: space-between;
}

.content__bottom-left-items,
.content__bottom-right-items {
  display: flex;
  flex-wrap: wrap;
}

.content__bottom-left-item,
.content__bottom-right-item {
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}
</style>
