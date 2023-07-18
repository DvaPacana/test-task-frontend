<template>
  <div
    id="item"
    :data-cy="`item-${item.id}`"
    class="item"
    :class="{ selected: item.selected }"
  >
    {{ item.name }}
  </div>
</template>

<script lang="ts" setup>
import type { ItemInterface } from '~/interfaces/item.interface'

/// ///
// Props
defineProps<{
  item: ItemInterface
}>()
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  user-select: none;
  border: $border;
  padding: calc($padding / 2);
  margin: calc($margin / 2);
}
.selected {
  background-color: #212121;
  color: #fefefe;
}
</style>
