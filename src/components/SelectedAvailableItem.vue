<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import type { Item } from '@/types'

interface Props {
  item: Item | null
}

defineProps<Props>()
</script>

<template>
  <section
    class="selected-available-panel"
    aria-label="Selected available item"
  >
    <div
      v-if="item"
      class="selected-single-item"
      role="status"
      aria-live="polite"
    >
      <ItemCard :name="item.name" :interactive="false" :selected="true" />
    </div>
    <p v-else class="placeholder" role="status" aria-live="polite">
      SELECTED ITEM
    </p>
  </section>
</template>

<style scoped>
.selected-available-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-lg);
  border: var(--border-width) solid var(--color-border);
}

.selected-single-item {
  width: 100%;
  max-width: 150px;
}

.placeholder {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

@media (max-width: 480px) {
  .selected-available-panel {
    min-height: 100px;
  }

  .placeholder {
    font-size: 16px;
  }
}
</style>
