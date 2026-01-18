<script setup lang="ts">
import type { Item } from '~/types/item'

interface Props {
  items: Item[]
  maxItems?: number
}

withDefaults(defineProps<Props>(), {
  maxItems: 6,
})

const emit = defineEmits<{
  remove: [item: Item]
}>()

const handleRemove = (item: Item) => {
  emit('remove', item)
}
</script>

<template>
  <div class="selected-items-row">
    <div class="selected-items-row__items">
      <ItemBox
        v-for="item in items"
        :key="item.id"
        :item="item"
        :clickable="true"
        @click="handleRemove"
      />
      <div
        v-for="n in Math.max(0, maxItems - items.length)"
        :key="`empty-${n}`"
        class="selected-items-row__empty-slot"
      />
    </div>
    <p class="selected-items-row__counter">selected: {{ items.length }} / {{ maxItems }}</p>
  </div>
</template>

<style scoped lang="scss">
.selected-items-row {
  @apply border-2 border-black p-3 sm:p-4 min-h-[120px] sm:min-h-[140px];
  @apply bg-white flex flex-col justify-between;

  &__items {
    @apply flex flex-wrap gap-1 sm:gap-2;
  }

  &__empty-slot {
    @apply w-16 h-16 sm:w-20 sm:h-20 border-2 border-dashed border-gray-200;
  }

  &__counter {
    @apply text-xs sm:text-sm text-gray-500 mt-2;
  }
}
</style>
