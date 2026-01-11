<script setup lang="ts">
import type { ItemInterface } from '@/Interfaces/Item.Interface'
import Item from '@/components/Item.vue'

interface Props {
  items: Array<ItemInterface>
  shared?: boolean
  single?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'addItem', item: ItemInterface): void
}>()
</script>

<template>
  <div class="shop-wrapper">
    <Item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :shared="shared"
      :single="single"
      @clickItem="emits('addItem', item)"
    />
  </div>
</template>

<style lang="css" scoped>
.shop-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 2px solid black;
  padding: 10px;
  width: fit-content;
}
</style>
