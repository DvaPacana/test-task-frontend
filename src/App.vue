<script setup>
import { ref } from 'vue'

import LeftColumnModule from './modules/LeftColumnModule.vue'
import RightColumnModule from './modules/RightColumnModule.vue'

const leftItems = ref([
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' }
])

const rightItems = ref([
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' }
])
</script>

<template>
  <div class="layout">
    <LeftColumnModule :items="leftItems" />
    <RightColumnModule :items="rightItems" />
  </div>
</template>

<style>
.layout {
  display: flex;
  gap: 40px;
  padding: 20px;
}

.box {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 20px;
}

li {
  padding: 6px;
  cursor: pointer;
}

li:hover {
  background: #eee;
}

.disabled {
  opacity: 0.4;
  pointer-events: none;
}

</style>
