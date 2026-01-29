<script setup lang="ts">
import Item from './Item.vue';
import SelectedItemsBlock from './SelectedItems.vue';
import type { IItem } from './types';
import { useItemsStore } from './items-store';

interface Props {
  items: IItem[]
  maxSelectedItems: number
}

const props = defineProps<Props>()
const itemsStore = useItemsStore(props.maxSelectedItems);
</script>

<template>
  <div class="wrapper">
    <div class="selected-items">
      <Item
        v-if="props.maxSelectedItems === 1"
        :style="{ marginLeft: 'auto' }"
        :is-selected="false"
        :name="itemsStore.selectedItems.size > 0 ? itemsStore.selectedItems.values().next().value!.name : 'None'"
      >
      </Item>
      <SelectedItemsBlock
        v-else
        :items="itemsStore.selectedItems"
        :max-selected-items="props.maxSelectedItems"
      />
    </div>

    <div class="items">
      <Item
        v-for="item in props.items"
        :key="item.id"
        :is-selected="itemsStore.isSelected(item)"
        :name="item.name"
        @click="itemsStore.selectItem(item)"
      ></Item>
    </div>
  </div>
</template>

<style scoped>
.selected-items,
.items {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;
  border: 2px solid black;
}

.selected-items {
  margin-bottom: 10px;
}
</style>