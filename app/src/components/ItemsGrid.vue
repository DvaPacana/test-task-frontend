<script setup lang="ts">
import ItemCard from './ItemCard.vue'
import type { Item } from '../data/items'

defineProps<{
  items: Item[]
  isItemSelected: (item: Item) => boolean
  isItemDisabled?: (item: Item) => boolean
}>()

defineEmits<{
  itemClick: [item: Item]
}>()
</script>

<template>
  <div class="items-grid">
    <ItemCard
      v-for="item in items"
      :key="item.id"
      v-memo="[item.id, isItemSelected(item), isItemDisabled?.(item)]"
      :item="item"
      :is-active="isItemSelected(item)"
      :is-disabled="isItemDisabled?.(item)"
      @click="$emit('itemClick', item)"
    />
  </div>
</template>

<style scoped>
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10px;
  align-items: start;
}
</style>
