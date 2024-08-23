<template>
  <div class="items-container">
    <template v-if="!items.length">
      No items has to select
    </template>
    <template v-else>
      <div
        v-for="item in items"
        :class="{ item: true, selected: rawSelected.includes(item.id) }"
        :key="`item-id-${item.id}`"
        @click="toggleItem(item.id)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type: 'user'|'chosen'
}

import { useDataStore } from '../composables/useDataStore';

  const props = withDefaults(defineProps<Props>(), {
    type: 'user'
  })

  const { items, toggleItem, rawSelected } = useDataStore(props.type)

</script>

<style scoped>
  .items-container {
    border: 3px solid black;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }
  .item {
    border: 1px solid black;
    cursor: pointer;
    margin: 5px 10px;
    padding: 5px;
  }
  .item.selected {
    font-weight: bold;
    color: maroon;
    border: 1px solid maroon;
  }
</style>