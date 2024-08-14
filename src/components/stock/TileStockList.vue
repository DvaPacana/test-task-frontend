<template lang="pug">

.tile-stock-list
  template(v-if="items && items.length")
    
    .tile-stock-list__item(v-for="item in itemsMap")
      tile-stock-item(
        v-bind="item"
        @click="select(item)"
      )

</template>

<script setup>

import TileStockItem from './TileStockItem.vue';
import { computed, reactive, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => ([]),
  },

  maxSelected: {
    type: Number,
    default: 1,
  },

  selected: {
    type: Array,
    default: () => ([]),
  },

  values: {
    type: Array,
    default: () => ([]),
  }
});

const emit = defineEmits(['update:selected', 'update:values']);

const isFull = computed(() => {
  return props.values.length >= props.maxSelected;
});

const itemsMap = computed(() => {
  return props.items.map(item => {
    const selected = props.values.includes(item.id);
    const disabled = isFull.value && !selected;

    return {
      ...item,
      selected,
      disabled,
    }
  });
});

const select = function (item) {
  if (item.disabled) return false;

  let selected = null;
  let values = null;

  if (item.selected) {
    selected = props.selected.filter(el => el.id !== item.id);
  }
  else {
    selected = props.selected.concat([item]);
  }

  values = selected.map(el => el.id);

  emit('update:selected', selected);
  emit('update:values', values);
};

</script>

<style lang="scss">

.tile-stock-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: flex-start;
  gap: 16px;

  padding: 16px;

  background-color: #ddd;
}

</style>
