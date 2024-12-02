<script setup lang="ts">
import { ItemCard, type Item } from '@/entities/Item'

interface ItemsListProps {
  items: Item[]
}
interface ItemsListEmits {
  (event: 'click', id: string): void
}

defineProps<ItemsListProps>()
const emits = defineEmits<ItemsListEmits>()
</script>

<template>
  <div class="wrapper">
    <ItemCard
      v-for="item in items"
      :key="String(item.id)"
      :item="item"
      @click="emits('click', item.id)"
    />
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  margin: 1rem;
  border: 2px solid black;
}
</style>
