<script setup lang="ts">
import { computed } from 'vue'
import ItemCard from './ItemCard.vue'
import type { Item } from '../types'

interface Props {
  title: string
  items: Item[]
  selectedItems?: Item[]
  emptyMessage?: string
  readonly?: boolean
  maxSelection?: number
  singleSelection?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  selectedItems: () => [],
  emptyMessage: 'Нет выбранных вещей',
  readonly: false,
  maxSelection: undefined,
  singleSelection: false
})

const emit = defineEmits<{
  itemClick: [item: Item]
}>()

const isItemSelected = (item: Item) => {
  return props.selectedItems.some(i => i.id === item.id)
}

const isItemDisabled = (item: Item) => {
  if (props.readonly || props.singleSelection) {
    return false
  }
  if (props.maxSelection && !isItemSelected(item)) {
    return props.selectedItems.length >= props.maxSelection
  }
  return false
}

const handleItemClick = (item: Item) => {
  if (!props.readonly) {
    emit('itemClick', item)
  }
}

const displayItems = computed(() => {
  return props.readonly ? props.selectedItems : props.items
})

const sectionId = computed(() => {
  return `section-${props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
})
</script>

<template>
  <section class="items-section" :aria-labelledby="sectionId">
    <h3 :id="sectionId">{{ title }}</h3>
    <ul 
      v-if="displayItems.length > 0"
      class="items-container"
      :aria-label="`${title} list`"
    >
      <li 
        v-for="item in displayItems" 
        :key="item.id"
      >
        <button
          v-if="!readonly"
          class="item-button"
          :disabled="isItemDisabled(item)"
          :aria-pressed="isItemSelected(item)"
          :aria-disabled="isItemDisabled(item)"
          :aria-label="`${isItemSelected(item) ? 'Deselect' : 'Select'} ${item.name}`"
          :aria-describedby="sectionId"
          @click="handleItemClick(item)"
        >
          <ItemCard
            :item="item"
            :selected="isItemSelected(item)"
          />
        </button>
        <ItemCard
          v-else
          :item="item"
          :selected="true"
          :aria-label="`${item.name}, selected`"
        />
      </li>
    </ul>
    <p 
      v-if="displayItems.length === 0" 
      class="empty-message" 
      role="status"
      aria-live="polite"
      aria-atomic="true"
      :aria-label="emptyMessage"
    >
      {{ emptyMessage }}
    </p>
    <slot name="footer" />
  </section>
</template>

<style lang="scss" scoped>
@import '../styles/variables';

.items-section {
  border: 0.1rem solid $border-medium;
  border-radius: $section-border-radius;
  padding: $section-padding;
  background-color: $bg-gray-light;
}

h3 {
  margin-top: 0;
  margin-bottom: $heading-margin-bottom;
  font-size: $font-size-heading;
  color: $text-heading;
}

.items-container {
  display: grid;
  gap: $gap-small;
  min-height: $items-container-min-height;
  align-items: start;
  align-content: start;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(2, 1fr);

  li {
    margin: 0;
  }
}

.item-button {
  width: 100%;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  transition: all $transition-time;
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(.item-card) {
    width: 100%;
    display: block;
  }

  &:hover:not(:disabled) :deep(.item-card:not(.selected)) {
    border-color: $primary;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);
  }

  &:focus,
  &:focus-visible {
    outline: 0.1rem solid $primary-dark;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.empty-message {
  color: $text-disabled;
  font-style: italic;
  padding: $section-padding;
}
</style>
