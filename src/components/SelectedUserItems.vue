<template>
  <div class="selected-user-items">
    <div class="selected-user-items__list">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item-id="item.id"
        :item-name="item.name"
      />
    </div>

    <span class="selected-user-items__count">
      {{ countLabel }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import ItemCard from '@/components/ItemCard.vue';
import type {IItem} from '@/types/item.ts';
import {computed} from 'vue';

const { items, limit } = defineProps<{ items: IItem[]; limit: number }>();

const countLabel = computed(() => `selected: ${items.length} / ${limit}`);
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss';

.selected-user-items {
  @include mixins.containerBox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.selected-user-items__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.selected-user-items__count {
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
