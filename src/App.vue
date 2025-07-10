<script setup lang="ts">
import { ref } from 'vue'

// Типы данных
interface Item {
  id: number
  name: string
}

// Коллекции для нижних блоков
const userItems: Item[] = [
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" }
]

const choiceItems: Item[] = [
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" }
]

// Состояние выбранных items
const selectedUserItems = ref<Item[]>([])
const selectedChoiceItem = ref<Item | null>(null)

// Логика обработки кликов
const selectUserItem = (item: Item) => {
  // Проверяем, не выбран ли уже этот item
  const isAlreadySelected = selectedUserItems.value.some(selected => selected.id === item.id)
  
  if (!isAlreadySelected && selectedUserItems.value.length < 6) {
    selectedUserItems.value.push(item)
  }
}

const selectChoiceItem = (item: Item) => {
  selectedChoiceItem.value = item
}

// Удаление выбранного item (для удобства)
const removeUserItem = (item: Item) => {
  selectedUserItems.value = selectedUserItems.value.filter(selected => selected.id !== item.id)
}

const clearChoiceItem = () => {
  selectedChoiceItem.value = null
}
</script>

<template>
  <div class="app">
    <h1>Тестовое задание Vue.js</h1>
    
    <div class="container">
      <!-- Верхние блоки -->
      <div class="top-section">
        <!-- Верхний левый: выбранные вещи пользователя -->
        <div class="block selected-user-items">
          <h3>Выбранные вещи пользователя ({{ selectedUserItems.length }}/6)</h3>
          <div class="items-grid">
            <div 
              v-for="item in selectedUserItems" 
              :key="item.id"
              class="item selected"
              @click="removeUserItem(item)"
            >
              {{ item.name }}
              <span class="remove-hint">✕</span>
            </div>
          </div>
          <div v-if="selectedUserItems.length === 0" class="empty-state">
            Выберите вещи из блока снизу-слева
          </div>
        </div>

        <!-- Верхний правый: выбранная вещь из коллекции -->
        <div class="block selected-choice-item">
          <h3>Выбранная вещь из коллекции</h3>
          <div class="items-grid">
            <div 
              v-if="selectedChoiceItem"
              class="item selected"
              @click="clearChoiceItem"
            >
              {{ selectedChoiceItem.name }}
              <span class="remove-hint">✕</span>
            </div>
          </div>
          <div v-if="!selectedChoiceItem" class="empty-state">
            Выберите вещь из блока снизу-справа
          </div>
        </div>
      </div>

      <!-- Нижние блоки -->
      <div class="bottom-section">
        <!-- Нижний левый: вещи пользователя -->
        <div class="block user-items">
          <h3>Вещи пользователя</h3>
          <div class="items-grid">
            <div 
              v-for="item in userItems" 
              :key="item.id"
              class="item"
              :class="{ 
                'already-selected': selectedUserItems.some(selected => selected.id === item.id),
                'disabled': selectedUserItems.length >= 6 && !selectedUserItems.some(selected => selected.id === item.id)
              }"
              @click="selectUserItem(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>

        <!-- Нижний правый: вещи на выбор -->
        <div class="block choice-items">
          <h3>Вещи на выбор</h3>
          <div class="items-grid">
            <div 
              v-for="item in choiceItems" 
              :key="item.id"
              class="item"
              :class="{ 'active': selectedChoiceItem?.id === item.id }"
              @click="selectChoiceItem(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-section,
.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.block {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  min-height: 250px;
}

.block h3 {
  margin: 0 0 15px 0;
  color: #495057;
  font-size: 16px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}

.item {
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
  position: relative;
  color: #000;
}

.item:hover {
  background-color: #e9ecef;
  border-color: #adb5bd;
}

.item.selected {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.item.already-selected {
  background-color: #d1ecf1;
  border-color: #bee5eb;
  color: #0c5460;
  cursor: default;
}

.item.disabled {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  cursor: not-allowed;
  opacity: 0.6;
}

.item.active {
  background-color: #fff3cd;
  border-color: #ffc107;
  color: #856404;
}

.remove-hint {
  position: absolute;
  top: 2px;
  right: 6px;
  font-size: 12px;
  opacity: 0.7;
}

.empty-state {
  color: #6c757d;
  font-style: italic;
  text-align: center;
  padding: 40px 20px;
}

/* Блоки разных цветов для лучшего различия */
.selected-user-items {
  border-color: #28a745;
  background-color: #f8fff9;
}

.selected-choice-item {
  border-color: #ffc107;
  background-color: #fffef5;
}

.user-items {
  border-color: #17a2b8;
  background-color: #f1fcfd;
}

.choice-items {
  border-color: #6f42c1;
  background-color: #f8f5ff;
}

@media (max-width: 768px) {
  .top-section,
  .bottom-section {
    grid-template-columns: 1fr;
  }
  
  .items-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
</style>
