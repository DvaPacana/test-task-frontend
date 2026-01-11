<template>
  <div class="app">
    <!-- Верхний блок -->
    <div class="top-section">
      <!-- Верхний левый блок: выбранные вещи пользователя -->
      <div class="top-left">
        <div class="items-container">
          <Item
            v-for="item in selectedUserItems"
            :key="item.id"
            :item="item"
            @click="deselectUserItem(item.id)"
          />
        </div>
        <div class="selected-counter">
          selected: {{ selectedUserItems.length }} / {{ MAX_SELECTED_ITEMS }}
        </div>
      </div>

      <!-- Верхний правый блок: выбранная вещь на выбор -->
      <div class="top-right">
        <div v-if="selectedAvailableItem" class="selected-item-name">
          id: {{ selectedAvailableItem.id }}<br>
          {{ selectedAvailableItem.name }}
        </div>
      </div>
    </div>

    <!-- Нижний блок -->
    <div class="bottom-section">
      <!-- Нижний левый блок: вещи пользователя -->
      <div class="bottom-left">
        <div class="items-container">
          <Item
            v-for="item in userItems"
            :key="item.id"
            :item="item"
            @click="toggleUserItem(item.id)"
          />
        </div>
      </div>

      <!-- Нижний правый блок: вещи на выбор -->
      <div class="bottom-right">
        <div class="items-container">
          <Item
            v-for="item in availableItems"
            :key="item.id"
            :item="item"
            @click="selectAvailableItem(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from './components/Item.vue';
import { userItems, availableItems } from './data/items';
import { useItemSelection } from './composables/useItemSelection';

const {
  selectedUserItems,
  selectedAvailableItem,
  MAX_SELECTED_ITEMS,
  toggleUserItem,
  deselectUserItem,
  selectAvailableItem,
} = useItemSelection(userItems);
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.top-section {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  height: 30%;
}

.top-left,
.top-right {
  flex: 1;
  border: 3px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.top-left .items-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.top-left .selected-counter {
  margin-top: auto;
  font-weight: bold;
}

.top-right {
  justify-content: center;
  align-items: center;
}

.items-container {
  overflow: auto;
}

.selected-item-label {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.selected-item-name {
  font-size: 16px;
  text-align: center;
}

.bottom-section {
  display: flex;
  gap: 20px;
  height: 70%;
}

.bottom-left,
.bottom-right {
  flex: 1;
  border: 3px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.bottom-left .items-container,
.bottom-right .items-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
