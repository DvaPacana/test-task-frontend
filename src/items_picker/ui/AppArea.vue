<script setup lang="ts">
import type { Item } from '../../shared/types/item';

const props = defineProps<{
  items: Item[]
}>()

const emit = defineEmits<{
  (e: 'pick', item: Item): void
}>()
</script>

<template>
  <div :class="$style.PickableArea">
    <div :class="$style.PickableAreaContainer">
      <slot :name="`item(${item.id})`" v-for="item in items" :key="item.id"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.PickableArea {
  border: 2px solid #333;
  height: 100%;
}

.PickableAreaContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 8px;
  flex-grow: 1;
}
</style>