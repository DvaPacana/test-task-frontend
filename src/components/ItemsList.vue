<template>
  <a-flex wrap="wrap" gap="small">
    <ItemElement
      v-for="item in items"
      :key="item.id"
      :data="item"
      :is-selected="selectedItems.some(i => i.id === item.id)"
      :is-selectable="isSelectable"
      width="70px"
      height="70px"
      @click="onItemClick(item)"
    />
  </a-flex>
</template>
<script setup lang="ts">
import ItemElement, { type Item } from "./ItemElement.vue";

interface Props {
  items: Item[];
  selectedItems: Item[];
  isSelectable?: boolean;
}

const {
  items = [],
  selectedItems = [],
  isSelectable = false,
} = defineProps<Props>();
const emit = defineEmits<{
  (event: 'select', item: Item): void
}>();

const onItemClick = (item: Item): void => {
  emit('select', item);
};
</script>
<style scoped>
</style>