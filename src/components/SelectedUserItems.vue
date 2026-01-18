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
  <section class="panel selected-user-panel" aria-label="Selected user items">
    <div class="grid-4-cols" role="list" aria-label="Your selected items">
      <div v-for="item in items" :key="item.id" role="listitem">
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
}

.counter {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 14px;
  text-align: left;
}

@media (max-width: 480px) {
  .selected-user-panel {
    min-height: 120px;
  }
}
</style>
