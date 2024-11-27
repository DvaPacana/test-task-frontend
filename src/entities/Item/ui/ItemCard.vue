<script setup lang="ts">
import { type Item } from '@/entities/Item'

interface ItemCardProps {
  item: Item
}
interface ItemCardEmits {
  (event: 'click'): void
}

const props = defineProps<ItemCardProps>()
const emits = defineEmits<ItemCardEmits>()
</script>

<template>
  <div class="wrapper" @click="emits('click')">
    {{ props.item.name }}
  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid grey;

  cursor: pointer;
}
</style>
