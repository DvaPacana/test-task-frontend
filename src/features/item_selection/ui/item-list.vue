<template>
  <div class="item-list">
    <div :class="`item-list__header item-list__header--${type}`">
      {{ header }}
    </div>
    <div class="item-list__items">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        :is-selected="isSelected(item)"
        @click="handleItemClick(item)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/entities/item';
import { ItemCard } from '@/entities/item';

interface Props {
  items: Item[];
  header: string;
  type: 'single' | 'multi';
  isSelected: (item: Item) => boolean;
  onToggle?: (item: Item) => void;
  onSelect?: (item: Item) => void;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'on-toggle', item: Item): void;
  (e: 'on-select', item: Item): void;
}>();

const handleItemClick = (item: Item) => {
  if (props.type === 'single') {
    emit('on-select', item);
  } else {
    emit('on-toggle', item);
  }
};
</script>
