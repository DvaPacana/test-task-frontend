<script setup lang="ts">
import type { ItemInterface } from '@/Interfaces/Item.Interface'
import Item from '@/components/Item.vue'

interface Props {
  items: Array<ItemInterface>
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'deleteItem', index: number): void
}>()
</script>

<template>
  <div class="cart-wrapper">
    <Item
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      @click="emits('deleteItem', index)"
    />
    Seleted: {{ items.length }} / 6
  </div>
</template>

<style lang="css" scoped>
.cart-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: 2px solid black;
  padding: 10px;
  width: fit-content;
}
</style>
