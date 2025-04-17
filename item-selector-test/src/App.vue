<script setup lang="ts">
import { ref } from 'vue'
import ItemBox from './components/ItemBox.vue'
import type { Item } from './types'

const userItems = ref<Item[]>([
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" }
])

const storeItems = ref<Item[]>([
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" }
])

const selectedUserItems = ref<Item[]>([])
const selectedStoreItem = ref<Item | null>(null)

const isUserItemSelected = (item: Item): boolean => {
  return selectedUserItems.value.includes(item)
}

const toggleUserItem = (item: Item): void => {
  if (isUserItemSelected(item)) {
    selectedUserItems.value = selectedUserItems.value.filter(i => i.id !== item.id)
  } else if (selectedUserItems.value.length < 6) {
    selectedUserItems.value.push(item)
  }
}

const selectStoreItem = (item: Item): void => {
  selectedStoreItem.value = selectedStoreItem.value === item ? null : item
}
</script>

<template>
  <div class="app">
    <div class="items-group user-group">
      <div class="selected-user-items">
        <div class="items-grid">
          <template v-for="item in selectedUserItems" :key="item.id">
            <ItemBox 
              :item="item"
            />
          </template>
          <template v-for="n in (6 - selectedUserItems.length)" :key="`empty-${n}`">
            <div class="item-box empty" />
          </template>
        </div>
        <div class="selection-info">selected: {{ selectedUserItems.length }}/6</div>
      </div>

      <div class="user-items">
        <div class="items-grid">
          <template v-for="item in userItems" :key="item.id">
            <ItemBox 
              :item="item"
              :selected="isUserItemSelected(item)"
              @click="toggleUserItem(item)"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="items-group store-group">
      <div class="selected-store-item">
        <div class="items-grid single-item">
          <template v-if="selectedStoreItem">
            <ItemBox :item="selectedStoreItem" />
          </template>
          <template v-else>
            <div class="item-box empty" />
          </template>
        </div>
      </div>

      <div class="store-items">
        <div class="items-grid">
          <template v-for="item in storeItems" :key="item.id">
            <ItemBox 
              :item="item"
              :selected="item === selectedStoreItem"
              @click="selectStoreItem(item)"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  padding: 20px;
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.items-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.selected-user-items, .selected-store-item,
.user-items, .store-items {
  border: 2px solid #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

/* Верхние блоки */
.selected-user-items, .selected-store-item {
  min-height: 200px;
}

.selected-store-item .items-grid {
  height: 100%;
}

.selected-store-item .item-box {
  height: 100%;
  min-height: 170px;
}

.selected-user-items .items-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  flex: 1;
}

.selected-user-items .item-box {
  min-height: 80px;
  aspect-ratio: 1;
}

/* Нижние блоки */
.user-items .items-grid,
.store-items .items-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.user-items .item-box,
.store-items .item-box {
  min-height: 80px;
  aspect-ratio: 1;
}

.items-grid {
  display: grid;
}

.items-grid.single-item {
  grid-template-columns: 1fr;
}

.item-box.empty {
  border: 1px dashed #ccc;
  background: #f5f5f5;
}

.selection-info {
  margin-top: 15px;
  text-align: left;
  font-size: 14px;
  color: #666;
}

/* Планшеты */
@media (max-width: 1024px) {
  .user-items .items-grid,
  .store-items .items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Мобильные устройства */
@media (max-width: 768px) {
  .app {
    flex-direction: column;
    padding: 10px;
  }

  .selected-user-items .items-grid,
  .user-items .items-grid,
  .store-items .items-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .selected-user-items, .selected-store-item {
    min-height: 150px;
  }

  .selected-store-item .item-box {
    min-height: 120px;
  }

  .item-box {
    min-height: 60px;
  }
}

/* Маленькие экраны */
@media (max-width: 480px) {
  .app {
    padding: 5px;
    gap: 10px;
  }

  .items-group {
    gap: 10px;
  }

  .selected-user-items, .selected-store-item,
  .user-items, .store-items {
    padding: 10px;
  }

  .selected-user-items .items-grid,
  .user-items .items-grid,
  .store-items .items-grid {
    gap: 8px;
  }

  .item-box {
    min-height: 50px;
  }

  .selection-info {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
