<template>
  <div class="item-list">
    <h2>{{ title }}</h2>
    <div class="item-list__items">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :isSelected="!!item.isSelected"
        :imgSize="[50, 50]"
        @selectItem="$emit('selectItem', item)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ItemListProps } from '@/types/componentsProps';
import ItemCard from '@/components/ItemCard.vue';
defineProps<ItemListProps>()
</script>

<style lang="scss" scoped>
.item-list {
  margin: 20px;

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}

</style>