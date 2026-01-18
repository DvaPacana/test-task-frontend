<script setup lang="ts">
import type { Item } from '~/types/item'

interface Props {
  item: Item
  selected?: boolean
  size?: 'normal' | 'large'
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  size: 'normal',
  clickable: true,
})

const emit = defineEmits<{
  click: [item: Item]
}>()

const handleClick = () => {
  if (props.clickable) {
    emit('click', props.item)
  }
}
</script>

<template>
  <div
    class="item-box"
    :class="[
      size === 'large' ? 'item-box--large' : 'item-box--normal',
      selected ? 'item-box--selected' : '',
      clickable ? 'item-box--clickable' : '',
    ]"
    :aria-label="`Select ${item.name}`"
    role="button"
    :tabindex="clickable ? 0 : -1"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <span class="item-box__label">{{ item.name }}</span>
  </div>
</template>

<style scoped lang="scss">
.item-box {
  @apply border-2 border-black flex items-center justify-center text-center bg-white;
  @apply transition-all duration-150 ease-in-out;
  @apply select-none;

  &--normal {
    @apply w-16 h-16 sm:w-20 sm:h-20;
  }

  &--large {
    @apply w-24 h-24 sm:w-32 sm:h-32;
  }

  &--selected {
    @apply bg-gray-300 border-gray-600;
  }

  &--clickable {
    @apply cursor-pointer;

    &:hover {
      @apply bg-gray-100 border-gray-500;
    }

    &:active {
      @apply bg-gray-200 scale-95;
    }

    &:focus-visible {
      @apply outline-2 outline-offset-2 outline-blue-500;
    }
  }

  &__label {
    @apply text-xs sm:text-sm font-medium leading-tight px-1;
  }
}
</style>
