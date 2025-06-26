<script setup lang="ts">
import { userProductsMock } from '@/components/products/user-products/userProductsMock.ts'
import Product from '@/components/products/Product.vue'
import { useProducts } from '@/composables/useProducts.ts'

const MAX_SELECTED_ITEMS = 6
const { availableProducts, selectedProducts, select, remove } = useProducts(userProductsMock)
</script>

<template>
  <section class="grid w-full grid-rows-[auto_1fr] content-start font-semibold">
    <section class="mb-10 grid h-50 w-62 border-4 p-2">
      <div class="flex flex-wrap gap-2">
        <Product
          v-for="product in selectedProducts"
          :key="product.id"
          :product="product"
          @click="remove(product)"
        />
      </div>
      <p class="self-end text-center">
        selected: {{ selectedProducts.length }}/{{ MAX_SELECTED_ITEMS }}
      </p>
    </section>
    <section class="flex flex-wrap content-start gap-4 border-4 p-4">
      <Product
        v-for="item in availableProducts"
        :key="item.id"
        :product="item"
        @click="select(item, MAX_SELECTED_ITEMS)"
      />
    </section>
  </section>
</template>
