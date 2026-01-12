<template>
  <div
    :class="{
      'item-card': true,
      'item-card--selected': isSelected,
    }"
  >
    {{ item.name }}
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../lib';


interface Props {
  item: Item;
  isSelected: boolean;
}

defineProps<Props>();
</script>
