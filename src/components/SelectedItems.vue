<template>
  <div class="selected-items">
    <div v-if="!selectedItems.length">Нет выбранных вещей</div>
    <div class="selected-items__list">
      <ItemCard 
        v-for="item in selectedItems"
        :key="item.id"
        :item="item"
        :isSelected="!!item.isSelected"
        :imgSize="[30, 30]"
        @selectItem="$emit('selectItem', item)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SelectedItemsProps } from '@/types/componentsProps';
import ItemCard from './ItemCard.vue';
defineProps<SelectedItemsProps>();
</script>

<style lang="scss" scoped>
.selected-items {
  display: flex;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;

    .list-items {
      cursor: pointer;
      padding: 0.5rem;
      border: 1px solid #ccc;
      margin-bottom: 0.5rem;
      border-radius: 4px;
      transition: all 0.3s;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
}
</style>