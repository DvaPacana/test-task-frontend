<template>
  <div class="item-card-list">
    <ItemCard
      v-for="item in items"
      :key="item.id"
      :item-id="item.id"
      :item-name="item.name"
      :item-selected="item.selected"
      @click="onClick"
    />
  </div>
</template>

<script lang="ts" setup>
import type {ISelectableItem} from '@/types/selectableItem.ts';
import ItemCard from '@/components/ItemCard.vue';

const { items } = defineProps<{ items: ISelectableItem[]; }>();
const emits = defineEmits<{ (eventName: 'selectItem', id: number): void }>();

function onClick(itemId: number) {
  emits('selectItem', itemId);
}
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss';

.item-card-list {
  @include mixins.containerBox;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-content: flex-start;
}
</style>
