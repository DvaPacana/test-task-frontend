<template lang="pug">

.tile-stock-selected

  .tile-stock-selected__item(v-for="item in items")
      tile-stock-item(v-bind="item")

  .tile-stock-selected__counter(v-if="counter") {{ counter }}
  
</template>

<script setup>

import TileStockItem from './TileStockItem.vue';
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },

  max: {
    type: Number,
    default: 1,
  },
});

const counter = computed(() => {
  if (props.max < 2) return '';

  return `Selected: ${props.items.length} / ${props.max}`;
});

</script>

<style lang="scss">

.tile-stock-selected {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: flex-start;
  gap: 16px;

  min-height: 100%;

  box-sizing: border-box;
  padding: 16px;

  background-color: #ddd;

  &__counter {
    grid-column: 1 / 5;
  }
}

</style>
