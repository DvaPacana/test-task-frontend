<script setup lang="ts">
import type { ItemInterface } from '@/Interfaces/Item.Interface'

interface Props {
  item: ItemInterface
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'clickItem', item: ItemInterface): void
}>()
</script>
<template>
  <div @click="emits('clickItem', props.item)" class="item">{{ props.item.name }}</div>
</template>

<style lang="css" scoped>
.item {
  width: 100px;
  height: 100px;
  border: 2px solid black;
  cursor: pointer;
}
</style>
