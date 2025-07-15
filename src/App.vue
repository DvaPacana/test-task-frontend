<template>
  <div class="grid">
    <div class="panel-tl" :data-count="pickedLeftProducts.length">
      <div
        v-for="product in pickedLeftProducts"
        :key="product.id"
        class="item"
      >
        {{ product.name }}
      </div>
      <div class="counter">selected: {{ pickedLeftProducts.length }} / 6</div>
    </div>

    <div class="panel-tr">
      <div
        v-if="pickedRightProduct"
        class="item"
      >
        {{ pickedRightProduct.name }}
      </div>
    </div>

    <div class="panel-bl">
      <div
        v-for="(product, index) in leftItems"
        :key="product.id"
        class="item"
        @click="toggleLeftItem(product.id)"
      >
        {{ index + 1 }}. {{ product.name }}
      </div>
    </div>

    <div class="panel-br">
      <div
        v-for="(product, index) in rightItems"
        :key="product.id"
        class="item"
        @click="selectRightId(product.id)"
      >
        {{ index + 1 }}. {{ product.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Item } from './types/item'

const leftItems: Item[] = [
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
]

const rightItems: Item[] = [
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' },
]

const selectedLeftIds = ref<number[]>([])
const selectedRightId = ref<number | null>(null)

const toggleLeftItem = (itemId: number) => {
  let newSelection = [...selectedLeftIds.value]
  if (newSelection.includes(itemId)) {
    newSelection = newSelection.filter(id => id !== itemId)
  } else if (newSelection.length < 6) {
    newSelection.push(itemId)
  }
  selectedLeftIds.value = newSelection
}

const selectRightId = (id: number) => {
  selectedRightId.value = id
}

const pickedLeftProducts = computed(() =>
  leftItems.filter(p => selectedLeftIds.value.includes(p.id))
)

const pickedRightProduct = computed(() =>
  rightItems.find(p => p.id === selectedRightId.value) ?? undefined
)
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 16px;
  padding: 16px;
  height: 90vh;
}

.panel-tl {
  grid-area: 1 / 1 / 2 / 2;
  border: 3px solid #000;
  padding: 8px;
}
.counter {
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
}

.panel-tr {
  grid-area: 1 / 2 / 2 / 3;
  border: 3px solid #000;
  padding: 8px;
}

.panel-bl {
  grid-area: 2 / 1 / 3 / 2;
  border: 3px solid #000;
  padding: 8px;
  overflow: auto;
}

.panel-br {
  grid-area: 2 / 2 / 3 / 3;
  border: 3px solid #000;
  padding: 8px;
  overflow: auto;
}

.item {
  display: inline-block;
  font-size: 19px;
  margin: 4px 8px 4px 0;
  padding: 6px 10px;
  border: 3px solid #000;
  background: #fff;
  cursor: pointer;
}
</style>
