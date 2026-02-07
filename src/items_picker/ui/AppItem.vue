<script setup lang="ts">
import type { Item } from '../../shared/types/item';

const { name, id, selected = false } = defineProps<Item & {
  selected?: boolean
}>()
</script>

<template>
  <button type="button" :class="[$style.Item, { [$style.selected]: selected }]">
    <span v-text="id" />
    <span v-text="name" />
  </button>
</template>

<style lang="scss" module>
$regular-bg-color: lightgrey;
$accent-bg-color: lightblue;
$color: #333333;

.Item {  
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: $regular-bg-color;
  border-radius: 8px;
  border: 4px solid $regular-bg-color;
  cursor: pointer;
}

.selected {
  border-color: $accent-bg-color;
}
</style>