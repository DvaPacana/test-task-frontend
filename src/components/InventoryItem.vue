<script setup lang="ts">
import type { IItem } from '@/components/types/Item.ts'

interface IInventoryItemProps {
  item: IItem;
  isSelected?: boolean;
}

const props = withDefaults(defineProps<IInventoryItemProps>(), {
  isSelected: false
})
</script>

<template>
  <div :class="['item', {'item--selected': isSelected}]"> {{ item.name }}</div>
</template>

<style scoped lang="scss">
.item {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &--selected {
    border: 1px solid black;
    background-color: #dcefcf;
  }
}


</style>
