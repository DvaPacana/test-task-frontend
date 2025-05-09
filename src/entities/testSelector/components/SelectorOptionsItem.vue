<script setup lang="ts">
import type { IOptionsItem } from '@/entities/testSelector/types/types'

const props = defineProps({
  item: {
    type: Object as () => IOptionsItem,
    required: true
  }
})
</script>

<template>
  <li class="selector-options-item">
    <p>{{ item.name }}</p>
  </li>
</template>

<style scoped lang="scss">
.selector-options-item {
  border: 1px solid lightgray;
  width: auto;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &.selected {
    border: 1px solid gray;
    background-color: lightgray;
    cursor: no-drop;
  }

  &:hover:not(.selected) {
    border: 1px solid green;
  }
}
</style>
