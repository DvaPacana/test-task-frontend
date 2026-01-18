<script setup lang="ts">
import { useItemsStore } from '@/stores/items'
import SelectedUserItems from '@/components/SelectedUserItems.vue'
import SelectedAvailableItem from '@/components/SelectedAvailableItem.vue'
import ItemsGrid from '@/components/ItemsGrid.vue'

const store = useItemsStore()

const isUserItemDisabled = (id: number): boolean =>
  !store.isUserItemSelected(id) && !store.canSelectMoreUserItems
</script>

<template>
  <main class="app-container" role="main">
    <h1 class="visually-hidden">Clothing Selection</h1>

    <!-- Top Row: Selected Items Display -->
    <div class="top-row">
      <SelectedUserItems
        :items="store.selectedUserItems"
        :max-items="store.maxUserItems"
      />
      <SelectedAvailableItem :item="store.selectedAvailableItem" />
    </div>

    <!-- Bottom Row: Item Selection Grids -->
    <div class="bottom-row">
      <div class="panel">
        <ItemsGrid
          :items="store.userItems"
          :is-item-selected="store.isUserItemSelected"
          :is-item-disabled="isUserItemDisabled"
          label="Your items - select up to 6"
          @select="store.toggleUserItem"
        />
      </div>
      <div class="panel">
        <ItemsGrid
          :items="store.availableItems"
          :is-item-selected="store.isAvailableItemSelected"
          label="Available items - select one"
          @select="store.toggleAvailableItem"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 900px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.top-row,
.bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.panel {
  padding: var(--spacing-lg);
  border: var(--border-width) solid var(--color-border);
}

@media (max-width: 768px) {
  .top-row,
  .bottom-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .app-container {
    gap: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .panel {
    padding: var(--spacing-md);
  }
}
</style>