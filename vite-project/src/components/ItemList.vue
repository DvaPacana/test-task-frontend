<template>
  <div class="item-list">
    <Item 
      v-for="item in items" 
      :key="item.id" 
      :item="item" 
      :isSelected="isSelected(item)"
      @select="handleSelect"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import Item from './Item.vue';

const props = defineProps({
  items: Array,
  selectedItems: Array,
});

const emit = defineEmits(['select']);

function isSelected(item) {
  return props.selectedItems.includes(item);
}

function handleSelect(item) {
  emit('select', item);
}
</script>

<style scoped>
.item-list {
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>
