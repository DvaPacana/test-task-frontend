<script setup lang="ts">
import type { Item } from '~/types/item'

interface Props {
  item: Item | null
}

defineProps<Props>()

const emit = defineEmits<{
  remove: [item: Item]
}>()

const handleRemove = (item: Item) => {
  emit('remove', item)
}
</script>

<template>
  <div class="selected-single-item">
    <ItemBox v-if="item" :item="item" size="large" :clickable="true" @click="handleRemove" />
    <div v-else class="selected-single-item__placeholder">
      <span class="selected-single-item__placeholder-text">SELECTED ITEM</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected-single-item {
  @apply border-2 border-black p-3 sm:p-4 min-h-[120px] sm:min-h-[140px];
  @apply bg-white flex items-center justify-center;

  &__placeholder {
    @apply w-24 h-24 sm:w-32 sm:h-32 border-2 border-dashed border-gray-300;
    @apply flex items-center justify-center;
  }

  &__placeholder-text {
    @apply text-gray-400 text-xs sm:text-sm text-center px-2;
  }
}
</style>
