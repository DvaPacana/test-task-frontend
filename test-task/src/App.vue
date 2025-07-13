<template>
  <div :class="$style.root">
    <div :class="$style.topContainer">
      <div :class="$style.topLeft">
        <div :class="$style.selectedCount">
          selected: {{ selectedUserItems.length }} / {{ maxUserItemsToSelect }}
        </div>
        <ItemList :items="selectedUserItems" :multiSelect="false" />
      </div>
      <div :class="$style.topRight">
        <SelectedItem :item="selectedAvailableItem" />
      </div>
    </div>

    <div :class="$style.bottomContainer">
      <div :class="$style.bottomLeft">
        <h3 :class="$style.sectionTitle">User's Items</h3>
        <ItemList
          :items="userItems"
          :selectedItems="selectedUserItems"
          :multiSelect="true"
          :maxSelections="maxUserItemsToSelect"
          @update:selectedItems="updateSelectedUserItems"
        />
      </div>
      <div :class="$style.bottomRight">
        <h3 :class="$style.sectionTitle">Available Items</h3>
        <ItemList
          :items="availableItems"
          :selectedItems="selectedAvailableItem"
          @update:selectedItems="updateSelectedAvailableItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Item } from './types'
import ItemList from './components/ItemList.vue'
import SelectedItem from './components/SelectedItem.vue'
import { userItems, availableItems } from './data/items'

const maxUserItemsToSelect = 6

const selectedUserItems = ref<Item[]>([])
const selectedAvailableItem = ref<Item | null>(null)

const updateSelectedUserItems = (items: Item[] | Item | null) => {
  if (Array.isArray(items)) {
    selectedUserItems.value = items
  }
}

const updateSelectedAvailableItem = (item: Item | Item[] | null) => {
  if (!Array.isArray(item)) {
    selectedAvailableItem.value = item
  }
}
</script>

<style module>
.root {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.sectionTitle {
  margin-bottom: 15px;
  font-size: 18px;
  color: var(--dark-gray);
  font-weight: 600;
}

.topContainer,
.bottomContainer {
  display: flex;
  gap: 30px;
}

.topLeft,
.topRight,
.bottomLeft,
.bottomRight {
  border-radius: var(--border-radius);
  padding: 20px;
  flex: 1;
  min-height: 150px;
  background-color: white;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  position: relative;
}

.selectedCount {
  margin-bottom: 15px;
  font-weight: 500;
  color: var(--dark-gray);
  background-color: var(--light-gray);
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
}

.bottomLeft,
.bottomRight {
  min-height: 300px;
}

.bottomLeft {
  border-top: 4px solid var(--primary-color);
}

.bottomRight {
  border-top: 4px solid var(--accent-color);
}

.topLeft {
  border-bottom: 4px solid var(--primary-color);
}

.topRight {
  border-bottom: 4px solid var(--accent-color);
}

@media (max-width: 768px) {
  .topContainer,
  .bottomContainer {
    flex-direction: column;
  }
}
</style>
