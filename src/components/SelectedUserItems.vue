<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import type { Item } from '@/types'

interface Props {
  items: Item[]
  maxItems: number
}

defineProps<Props>()
</script>

<template>
  <section class="selected-user-panel" aria-label="Selected user items">
    <div
      class="selected-items-grid"
      role="list"
      aria-label="Your selected items"
    >
      <div v-for="item in items" role="listitem" :key="item.id">
        <ItemCard :name="item.name" :interactive="false" :selected="true" />
      </div>
    </div>
    <p class="counter" aria-live="polite">
      selected: {{ items.length }} / {{ maxItems }}
    </p>
  </section>
</template>

<style scoped>
.selected-user-panel {
  display: flex;
  flex-direction: column;
  min-height: 150px;
  padding: var(--spacing-lg);
  border: var(--border-width) solid var(--color-border);
}

.selected-items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
  flex: 1;
}

.counter {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 14px;
  text-align: left;
}

@media (max-width: 768px) {
  .selected-items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .selected-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .selected-user-panel {
    min-height: 120px;
  }
}
</style>
