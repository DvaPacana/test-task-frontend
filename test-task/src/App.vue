<template>
  <div class="main">
    <MultiSelect :items="multiSelectItems" />
    <SingleSelect :items="singleSelectItems" />
  </div>
</template>

<script setup lang="ts">
import MultiSelect from './components/MultiSelect.vue'
import SingleSelect from './components/SingleSelect.vue'
import type { Card } from './types'

const multiSelectItems: Array<Card> = [
  {
    id: 1,
    name: 'Shoes 1'
  },
  {
    id: 2,
    name: 'Shoes 2'
  },
  {
    id: 3,
    name: 'Shoes 3'
  },
  {
    id: 4,
    name: 'Shoes 4'
  },
  {
    id: 5,
    name: 'T-shirt 1'
  },
  {
    id: 6,
    name: 'T-shirt 2'
  },
  {
    id: 7,
    name: 'T-shirt 3'
  },
  {
    id: 8,
    name: 'T-shirt 4'
  }
]
const singleSelectItems: Array<Card> = [
  {
    id: 11,
    name: 'Jacket 1'
  },
  {
    id: 12,
    name: 'Jacket 2'
  },
  {
    id: 13,
    name: 'Jacket 3'
  },
  {
    id: 14,
    name: 'Jacket 4'
  },
  {
    id: 15,
    name: 'Hoodie 1'
  },
  {
    id: 16,
    name: 'Hoodie 2'
  },
  {
    id: 17,
    name: 'Hoodie 3'
  },
  {
    id: 18,
    name: 'Hoodie 4'
  }
]
</script>

<style scoped lang="scss">
.main {
  margin-top: 32px;
  display: flex;
  gap: 16px;
  justify-content: center;
}
</style>
