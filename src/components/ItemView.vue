<template>
  <div class="item-container" @click="$emit('select', item)">
    <div class="item-container__name">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IItem } from '@/logic/items';

defineProps<{
  item: IItem;
}>();
</script>

<style lang="scss" scoped>
.item-container {
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ffff;
  font-size: 14px;
  border-radius: 10px;
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #ffff;
    color: #000000;

    .item-container__name {
      color: #000000;
    }
  }

  &__name {
    font-size: 14px;
    color: #ffff;
    user-select: none;
  }
}
</style>
