<script setup lang="ts">
import { ref, computed } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import type { Item } from '@/types'
import { USER_ITEMS, AVAILABLE_ITEMS, MAX_USER_ITEMS } from '@/data/items'

const selectedUserItems = ref<Item[]>([])
const selectedAvailableItem = ref<Item | null>(null)

const canSelectMoreUserItems = computed(
  () => selectedUserItems.value.length < MAX_USER_ITEMS
)

const isUserItemSelected = (id: number): boolean =>
  selectedUserItems.value.some((item) => item.id === id)

const isAvailableItemSelected = (id: number): boolean =>
  selectedAvailableItem.value?.id === id

const toggleUserItem = (item: Item): void => {
  const index = selectedUserItems.value.findIndex((i) => i.id === item.id)
  if (index !== -1) {
    selectedUserItems.value.splice(index, 1)
  } else if (canSelectMoreUserItems.value) {
    selectedUserItems.value.push(item)
  }
}

const toggleAvailableItem = (item: Item): void => {
  if (selectedAvailableItem.value?.id === item.id) {
    selectedAvailableItem.value = null
  } else {
    selectedAvailableItem.value = item
  }
}
</script>

<template>
  <div class="app-container">
    <!-- Top Row -->
    <div class="top-row">
      <!-- Selected User Items (top-left) -->
      <div class="panel selected-user-panel">
        <div class="selected-items-grid">
          <ItemCard
            v-for="item in selectedUserItems"
            :name="item.name"
            :key="item.id"
          />
        </div>
        <div class="counter">
          selected: {{ selectedUserItems.length }} / {{ MAX_USER_ITEMS }}
        </div>
      </div>

      <!-- Selected Available Item (top-right) -->
      <div class="panel selected-available-panel">
        <div v-if="selectedAvailableItem" class="selected-single-item">
          <ItemCard :name="selectedAvailableItem.name" />
        </div>
        <div v-else class="placeholder">SELECTED ITEM</div>
      </div>
    </div>

    <!-- Bottom Row -->
    <div class="bottom-row">
      <!-- User Items Grid (bottom-left) -->
      <div class="panel items-panel">
        <div class="items-grid">
          <ItemCard
            v-for="item in USER_ITEMS"
            :name="item.name"
            :selected="isUserItemSelected(item.id)"
            :disabled="!isUserItemSelected(item.id) && !canSelectMoreUserItems"
            :key="item.id"
            @click="toggleUserItem(item)"
          />
        </div>
      </div>

      <!-- Available Items Grid (bottom-right) -->
      <div class="panel items-panel">
        <div class="items-grid">
          <ItemCard
            v-for="item in AVAILABLE_ITEMS"
            :name="item.name"
            :selected="isAvailableItemSelected(item.id)"
            :key="item.id"
            @click="toggleAvailableItem(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 900px;
}

.top-row,
.bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.panel {
  min-height: 150px;
  padding: var(--spacing-lg);
  border: var(--border-width) solid var(--color-border);
}

.selected-user-panel {
  display: flex;
  flex-direction: column;
}

.selected-items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
}

.counter {
  margin-top: auto;
  font-size: 14px;
  text-align: left;
}

.selected-available-panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected-single-item {
  width: 100%;
  max-width: 150px;
}

.placeholder {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
}

.items-panel {
  min-height: 300px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
}
</style>
