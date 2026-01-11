<template>
  <div
    class="item"
    @click="$emit('click')"
  >
    id: {{ item.id }}<br>
    {{ item.name }}
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../types/item';

defineProps<{
  item: Item;
}>();

defineEmits<{
  click: [];
}>();
</script>

<style scoped>
.item {
  border: 2px solid black;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  min-width: 80px;
}

.item:hover {
  background-color: #f0f0f0;
}
</style>
