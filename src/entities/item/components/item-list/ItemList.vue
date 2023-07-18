<script lang="ts" setup>
import type { ItemType } from '../..'
import { ItemLi } from './components'

const props = defineProps<{
  items: ItemType[]
}>()

const emit = defineEmits<{
  /**
   * * Выбрать элемент
   */
  (e: 'item-click', id: number): void
}>()
</script>

<template>
  <ul class="item_list g-4">
    <ItemLi v-for="item in items" :item="item" @click="emit('item-click', item.id)" />
  </ul>
</template>

<style lang="scss" scoped>
.item_list {
  display: flex;
  flex-wrap: wrap;
}
</style>
