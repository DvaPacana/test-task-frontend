<script setup lang="ts">
import './item.scss'

import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/stores/products'
import type ProductModel from '@/models/product.model'

interface Props {
  item: ProductModel
}

const props = defineProps<Props>()

const productsStore = useProductsStore()
const { selectedItems, selectedItem } = storeToRefs(productsStore)

const isSelected = computed(() => {
  if (selectedItem.value?.id === props.item.id) return true
  return selectedItems.value.some((s) => s.id === props.item.id)
})
</script>

<template>
  <div class="product-item">
    <slot />
    <div class="product-item__meta">
      <div class="product-item__title">{{ props.item.title }}</div>
      <div class="product-item__desc" v-if="!isSelected">{{ props.item.description }}</div>
    </div>

    <div class="product-item__info">
      <div
        class="product-item__availability"
        :class="{
          'product-item__availability--in-stock': props.item.availabilityStatus === 'in stock',
          'product-item__availability--out-of-stock':
            props.item.availabilityStatus === 'out of stock',
        }"
      >
        {{ props.item.availabilityStatus }}
      </div>
      <div class="product-item__price">{{ props.item.formattedPrice() }}</div>
      <div class="product-item__rating">
        <span class="product-item__rating-label">Рейтинг:</span>
        <span class="product-item__rating-value">{{ props.item.rating ?? '—' }}</span>
      </div>
    </div>
  </div>
</template>
