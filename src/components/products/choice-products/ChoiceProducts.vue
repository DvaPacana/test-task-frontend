<script setup lang="ts">
import Product from '@/components/products/Product.vue'
import { useProducts } from '@/composables/useProducts.ts'
import { choiceProductsMock } from '@/components/products/choice-products/choiceProductsMock.ts'

const { availableProducts, selectedProducts, select, remove } = useProducts(choiceProductsMock)
</script>

<template>
  <section class="grid w-full grid-rows-[auto_1fr] content-start font-semibold">
    <section class="mb-10 h-50 w-62 justify-self-end border-4 p-2">
      <div class="mb-5 flex flex-wrap gap-2">
        <Product
          v-for="product in selectedProducts"
          :key="product.id"
          :product="product"
          @click="remove(product)"
        />
        <p
          v-if="selectedProducts.length === 0"
          class="justify-center self-center text-center text-4xl"
        >
          SELECTED ITEM
        </p>
      </div>
    </section>
    <section class="flex flex-wrap content-start gap-4 border-4 p-4">
      <Product
        v-for="item in availableProducts"
        :key="item.id"
        :product="item"
        @click="select(item)"
      />
    </section>
  </section>
</template>
