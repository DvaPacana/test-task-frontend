<template>
  <div class="products-list">
    <ProductsCatalog
      header="Выбранные вещи"
      v-model:selected-products="selectedLeftProducts"
      :all-products="leftProducts"
      :max-count="6"
    />
    <ProductsCatalog
      header="Выбранная вещь"
      v-model:selected-products="selectedRightProducts"
      :all-products="rightProducts"
      :max-count="1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { leftProducts, rightProducts } from '@/views/ProductsList/consts.ts'
import type { IProduct } from '@/views/ProductsList/types.ts'
import ProductsCatalog from '@/components/ProductsCatalog/ProductsCatalog.vue'

const selectedLeftProducts = ref<IProduct[]>([
  {
    id: 1,
    name: 'Shoes 1',
  },
])
const selectedRightProducts = ref<IProduct[]>([])
</script>

<style>
.products-list {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

@media (max-width: 480px) {
  .products-list {
    flex-direction: column;
  }
}
</style>
