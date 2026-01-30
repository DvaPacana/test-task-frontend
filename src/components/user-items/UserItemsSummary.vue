<script setup lang="ts">
import type { Item } from '@/types/item.type.ts';

interface IProps {
  items: Item[],
  selectedCount: number,
  limit: number,
}

defineProps<IProps>();
</script>

<template>
  <div class="user-summary">
    <div v-if="items.length" class="user-summary__items">
      <div 
        v-for="item in items"
        :key="item.id"
        class="user-summary__item"
      >
      {{ item.name }}
      </div>
    </div>
    <div class="user-summary__counter">Selected: {{ selectedCount }} / {{ limit }}</div>
  </div>
</template>

<style lang="scss" scoped>
.user-summary {
  &__items {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 8px;
    overflow-y: auto;
    padding: 8px;
  }

  &__item {
    width: 80px;
    height: 80px;
    border: 2px solid $border-black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>