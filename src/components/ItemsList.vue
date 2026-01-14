<template>
  <ul class="items__list">
    <li
      v-for="item in items"
      :key="item.id"
      class="items__item"
      :class="{
        'items__item--selected': isSelected(item),
        'items__item--disabled': isSelectionDisabled && !isSelected(item),
      }"
      @click="handleSelect(item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  selectedItems: {
    type: Array,
    default: () => [],
  },
  maxItems: {
    type: Number,
    default: 6,
  },
  selectionDisabled: {
    default: false,
  },
});

const emit = defineEmits(['select-item', 'remove-item']);

const isSelected = computed(() => (item) => {
  return props.selectedItems?.some((selected) => selected.id === item.id) || false;
});

const isSelectionDisabled = computed(() => {
  return props.selectedItems.length >= props.maxItems || props.selectionDisabled.value;
});

const handleSelect = (item) => {
  if (isSelected.value(item)) {
    emit('remove-item', item.id);
    return;
  }
  if (isSelectionDisabled.value) {
    return;
  }
  emit('select-item', item);
};
</script>

<style lang="scss" scoped>
.items__list {
  @include list-none;

  display: grid;
  gap: $grid-gap;

  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.items__item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  @include flex-center;

  user-select: none;
  border: 2px dashed gray;
}

.items__item:not(.items__item--disabled):hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  cursor: pointer;
}

.items__item--selected {
  border-color: #10b981;
  background: #f0fdf4;
}

.items__item--disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.4;
}
</style>
