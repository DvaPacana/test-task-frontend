<script setup lang="ts">
import './items-block.scss'

import Item from './parts/item/item.vue'

import type ProductModel from '@/models/product.model'

interface Props {
  items: Array<ProductModel>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', value: number): void
}>()
</script>

<template>
  <div class="items-block" :class="{ 'items-block_centered': !props.items.length }">
    <div v-if="!props.items.length" class="items-block__empty">А денег точно хватит? =)</div>
    <Item
      v-else
      v-for="item in props.items"
      :key="item.id"
      :item="item"
      @click="() => emit('select', item.id)"
    />
  </div>
</template>
