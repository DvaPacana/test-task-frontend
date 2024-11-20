<script lang="ts" setup>
import type { Item } from '@/types'

const props = withDefaults(
  defineProps<{ item: Item; selectable?: boolean; selected?: boolean; disabled?: boolean }>(),
  {
    selectable: true,
    selected: false,
    disabled: false,
  },
)
</script>
<template>
  <button
    :disabled="props.disabled"
    v-if="selectable"
    class="base-item"
    :class="{ 'base-item--selected': props.selected, 'base-item--disabled': props.disabled }"
  >
    {{ props.item.name }}
  </button>
  <div v-else class="base-item base-item--readonly">
    <p>
      {{ props.item.name }}
    </p>
  </div>
</template>
<style scoped>
.base-item {
  border: 1px solid black;
  padding: 0.5rem;
  text-wrap: nowrap;
  background-color: white;
  cursor: pointer;
}
.base-item--readonly {
  cursor: default;
}
.base-item--disabled {
  cursor: not-allowed;
}

.base-item:not(.base-item--disabled):hover .base-item:not(.base-item--disabled):focus-visible {
  background-color: rgb(206, 206, 206);
}
.base-item--selected {
  background-color: rgb(216, 216, 216);
}
</style>
