<script setup lang="ts">
import type { IItem } from './types.ts';
import Item from './Item.vue';

interface Props {
  items: Set<IItem>
  maxSelectedItems: number
}

const props = defineProps<Props>();
</script>

<template>
  <div class="wrapper">
    <div class="items">
      <Item
        v-for="item in props.items"
        :key="item.id"
        :name="item.name"
        :is-selected="false"
        class="items__item"
      ></Item>
    </div>

    <p>selected: {{props.items.size}} / {{props.maxSelectedItems}}</p>
  </div>
</template>

<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>