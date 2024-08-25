<template>
  <div 
    :class="['item', { 'item-selected': isSelected }]" 
    @click="selectItem"
  >
    {{ item.name }}
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object,
  isSelected: Boolean,
});

const emit = defineEmits(['select']);

function selectItem() {
  emit('select', props.item);
}
</script>

<style scoped>
.item {
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
  user-select: none;
}

.item-selected {
  background-color: lightblue;
}
</style>
