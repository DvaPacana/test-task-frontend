<template>
  <div class="layout">

    <!-- TOP -->
    <div class="top">
      <!-- TOP LEFT -->
      <div class="top-left">
        <ItemCard
          v-for="item in selectedLeft"
          :key="item.id"
          :item="item"
          @click="unselectLeft(item)"
        />
      </div>

      <!-- TOP RIGHT -->
      <div v-if="selectedRight" class="top-right-single">
        <ItemCard
          :item="selectedRight"
          @click="unselectRight"
        />
      </div>
    </div>

    <!-- BOTTOM -->
    <div class="bottom">
      <!-- BOTTOM LEFT -->
      <div class="bottom-left">
        <ItemCard
          v-for="item in leftPool"
          :key="item.id"
          :item="item"
          @click="selectLeft(item)"
        />
      </div>

      <!-- BOTTOM RIGHT -->
      <div class="bottom-right">
        <ItemCard
          v-for="item in rightPool"
          :key="item.id"
          :item="item"
          @click="selectRight(item)"
        />
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ItemCard from './components/ItemCard.vue'

interface Item { id: number; name: string }

/* ---------------- INITIAL DATA ---------------- */
const leftPool = ref<Item[]>([
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' }
])

const rightPool = ref<Item[]>([
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' }
])

/* ---------------- STATE ---------------- */
const selectedLeft = ref<Item[]>([])
const selectedRight = ref<Item | null>(null)

/* ---------------- HELPERS ---------------- */
function addToPoolIfNotExists(pool: Item[], item: Item) {
  if (!pool.some(i => i.id === item.id)) {
    pool.push(item)
  }
}

/* ---------------- LEFT LOGIC ---------------- */
function selectLeft(item: Item) {
  if (selectedLeft.value.length >= 6) return
  if (selectedLeft.value.some(i => i.id === item.id)) return

  leftPool.value = leftPool.value.filter(i => i.id !== item.id)
  selectedLeft.value.push(item)
}

function unselectLeft(item: Item) {
  selectedLeft.value = selectedLeft.value.filter(i => i.id !== item.id)
  addToPoolIfNotExists(leftPool.value, item)
}

/* ---------------- RIGHT LOGIC ---------------- */
function selectRight(item: Item) {
  if (selectedRight.value?.id === item.id) return
  if (selectedRight.value) addToPoolIfNotExists(rightPool.value, selectedRight.value)

  rightPool.value = rightPool.value.filter(i => i.id !== item.id)
  selectedRight.value = item
}

function unselectRight() {
  if (!selectedRight.value) return
  addToPoolIfNotExists(rightPool.value, selectedRight.value)
  selectedRight.value = null
}
</script>

<style>
.layout {
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* TOP */
.top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

/* Верхний левый контейнер */
.top-left {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 3px solid #000;
  padding: 10px;
  width: 40%;
  height: 280px;
}

/* Верхний правый — один элемент */
.top-right-single {
  width: 40%;
  height: 280px;
  border: 3px solid #000;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
.top-right-single div {
  border: none !important;
  background: none !important;
  width: 100%;
  font-size: 28px;
}

/* BOTTOM */
.bottom {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10px;
}

.bottom-left,
.bottom-right {
  width: 45%;
  border: 3px solid #000;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: auto;
  align-content: start;
}

/* ITEM CARD */
.item-card {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  border-radius: 6px;
  background: #f4f4f4;
  cursor: pointer;
  user-select: none;
}
.item-card:hover {
  background: #e0e0e0;
}
</style>
