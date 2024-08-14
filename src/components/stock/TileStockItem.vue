<template lang="pug">

.tile-stock-item(:class="classList")
  .tile-stock-item__title {{ name }}

</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
  id: {
    type: [String, Number],
    default: '',
  },

  name: {
    type: String,
    default: '',
  },

  primary: {
    type: Boolean,
    default: false,
  },

  selected: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  }
});

const classList = computed(() => {
  const base = 'tile-stock-item--';

  return {
    [base + 'primary']: props.primary,
    [base + 'selected']: props.selected,
    [base + 'disabled']: props.disabled,
  }
});

</script>

<style lang="scss">

.tile-stock-item {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100%;

  box-sizing: border-box;
  padding: 16px;

  background-color: #fff;

  user-select: none;

  &--primary {
    background-color: #ddd;
  }

  &--selected {
    outline: 1px solid blue;
  }

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

</style>
