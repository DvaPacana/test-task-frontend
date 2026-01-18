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
    <div class="row-2-cols">
      <SelectedUserItems
        :items="store.selectedUserItems"
        :max-items="store.maxUserItems"
      />
      <SelectedAvailableItem :item="store.selectedAvailableItem" />
    </div>

    <!-- Bottom Row: Item Selection Grids -->
    <div class="row-2-cols">
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

@media (max-width: 768px) {
  .app-container {
    gap: var(--spacing-lg);
  }
}
</style>
