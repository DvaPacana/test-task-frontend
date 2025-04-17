<template>
  <div
    class="itemCard"
    :class="{ selected }">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/types'

interface Props extends Card {
  selected?: boolean
}

const { name, selected } = defineProps<Props>()
</script>

<style scoped lang="scss">
.itemCard {
  width: fit-content;
  background: lightcoral;
  padding: 16px;
  border-radius: 8px;
  transition: 0.5s ease background;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: coral;
  }

  &.selected {
    background: darkred;
  }
}
</style>
