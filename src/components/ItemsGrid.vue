<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import type { Item } from '@/types'

const {
  items,
  label,
  isItemSelected,
  isItemDisabled = () => false,
} = defineProps<{
  items: readonly Item[]
  label: string
  isItemSelected: (id: number) => boolean
  isItemDisabled?: (id: number) => boolean
}>()

defineEmits<{ select: [item: Item] }>()

const getItemAriaLabel = (item: Item): string => {
  const status = isItemSelected(item.id) ? 'selected' : 'not selected'
  return `${item.name}, ${status}`
}
</script>

<template>
  <section class="items-grid-section" :aria-label="label">
    <div class="grid-4-cols" role="group" :aria-label="label">
      <ItemCard
        v-for="item in items"
        :name="item.name"
        :selected="isItemSelected(item.id)"
        :disabled="isItemDisabled(item.id)"
        :aria-label="getItemAriaLabel(item)"
        :key="item.id"
        @click="$emit('select', item)"
      />
    </div>
  </section>
</template>

<style scoped>
.items-grid-section {
  min-height: 300px;
}

@media (max-width: 480px) {
  .items-grid-section {
    min-height: 200px;
  }
}
</style>
