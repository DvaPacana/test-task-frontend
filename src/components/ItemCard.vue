<script setup lang="ts">
import type { Item } from '../types'

interface Props {
  item: Item
  selected?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  selected: false,
  ariaLabel: undefined
})
</script>

<template>
  <span 
    :class="['item-card', { selected: selected }]"
    :aria-label="ariaLabel || item.name"
    :aria-current="selected ? 'true' : undefined"
  >
    {{ item.name }}
  </span>
</template>

<style lang="scss" scoped>
@import '../styles/variables';

.item-card {
  border: 0.1rem solid $border-light;
  border-radius: $card-border-radius;
  padding: $card-padding-vertical $card-padding-horizontal;
  text-align: center;
  transition: all $transition-time;
  background-color: $bg-white;
  font-size: inherit;
  font-family: inherit;
  display: flex;
  justify-content: center;

  &.selected {
    background-color: $primary;
    color: $text-white;
    border-color: $primary;
  }
}
</style>
