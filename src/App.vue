<script setup lang="ts">
import { ref, computed } from 'vue'
import ItemCard from './components/ItemCard.vue'

interface Item {
  id: number
  name: string
}

const MAX_USER_ITEMS = 6

const userItems = ref<Item[]>([
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
])

const availableItems = ref<Item[]>([
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' },
])

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
            v-for="item in userItems"
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
            v-for="item in availableItems"
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
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

.top-row,
.bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  min-height: 150px;
  padding: 16px;
  border: 2px solid #333333;
}

.selected-user-panel {
  display: flex;
  flex-direction: column;
}

.selected-items-grid {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.selected-items-grid {
  flex: 0 0 auto;
}

.counter {
  margin-top: 12px;
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
  color: #333333;
}

.items-panel {
  min-height: 300px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>
