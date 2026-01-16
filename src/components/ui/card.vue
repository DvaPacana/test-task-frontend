<template>
  <div
    class="ui-card"
    :class="{ '--selected': selected }"
    @click="emit('click', data)"
  >
    <span class="ui-card__name">{{ data.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@api/products'
interface Props {
  data: Product
  selected?: boolean
}

interface Emits {
  (e: 'click', payload: Product): void
}

const props = withDefaults(
  defineProps<Props>(),
  { selected: false },
)
const emit = defineEmits<Emits>()
</script>

<style lang="scss">
.ui-card {
  border: 2px solid $border-color-light;
  padding: $spacing-small;
  border-radius: $border-radius-small;
  background-color: #fff;
  cursor: pointer;
  transition: all $transition-duration;
  text-align: center;

  &:hover {
    border-color: $border-color-hover;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &__name {
    font-size: 14px;
    font-weight: 500;
    color: $text-color;
  }

  &.--selected {
    border-color: $primary-color;
    background-color: $bg-selected;
  }
}
</style>
