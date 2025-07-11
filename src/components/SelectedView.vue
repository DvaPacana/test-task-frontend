<script setup lang="ts">
import type { IItem } from '@/components/types/Item.ts'

import InventoryItem from '@/components/InventoryItem.vue'
import { computed } from 'vue'

interface ISelectedViewProps {
  items?: IItem[]
  maxSelectedCount?: number
}

const props = withDefaults(defineProps<ISelectedViewProps>(), {
  items: () => [],
  maxSelectedCount: 1
})

const isOnlyOneMaximumAndSelected = computed(() => {
  return props.items?.length === 1 && props.maxSelectedCount === 1
})

const isMoreThanOneMaximumAndSelected = computed(() => {
  return props.items?.length >= 1 && props.maxSelectedCount !== 1
})
</script>

<template>
  <div class="selected-view">
    <div :class="[
      {'selected-view__selected-items': isMoreThanOneMaximumAndSelected},
      {'selected-view__one-selected': isOnlyOneMaximumAndSelected}
      ]">
      <inventory-item v-for="item in items" :item="item" />
    </div>
    <div v-if="maxSelectedCount > 1" class="selected-view__info">
      selected: {{ items?.length }} / {{ maxSelectedCount }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected-view {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  width: 384px;
  min-height: 170px;
  height: fit-content;
  justify-content: flex-end;

  &__one-selected {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__selected-items {
    padding: 16px;
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
  }

  &__info {
    margin: 0 auto 8px auto;
  }
}


</style>
