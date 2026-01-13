<script setup lang="ts">
import { ref } from 'vue';
import ItemSelector from './components/ItemSelector.vue';


// Данные из задания
const userItems = [
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" }
];

const offerItems = [
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" }
];

const selectedUserItems = ref<typeof userItems>([]);
const selectedOfferItem = ref<{ id: number; name: string } | null>(null);
</script>

<template>
  <div class="app">
    <div class="top-section">
      <!-- Выбранные вещи (слева-сверху) -->
      <div class="selected-user-items">
        <h3>Выбранные вещи пользователя</h3>
        <div class="items-grid">
          <div v-for="item in selectedUserItems" :key="item.id" class="item-box">
            {{ item.name }}
          </div>
        </div>
      </div>

      <!-- Выбранная вещь из предложенных (справа-сверху) -->
      <div class="selected-offer-item">
        <h3>Выбранная вещь из предложенных</h3>
        <div v-if="selectedOfferItem" class="item-box">
          {{ selectedOfferItem.name }}
        </div>
        <div v-else class="placeholder">Ничего не выбрано</div>
      </div>
    </div>

    <div class="bottom-section">
      <!-- Вещи у пользователя (слева-снизу) -->
      <ItemSelector
        :items="userItems"
        :max-selected="6"
        :multi-select="true"
        @update:selected="selectedUserItems = $event"
      />

      <!-- Вещи на выбор (справа-снизу) -->
      <ItemSelector
        :items="offerItems"
        :max-selected="1"
        :multi-select="false"
        @update:selected="selectedOfferItem = $event[0] || null"
      />
    </div>
  </div>
</template>



<style scoped>
.app {
  padding: 20px;
  font-family: sans-serif;
}

.top-section,
.bottom-section {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.selected-user-items,
.selected-offer-item {
  flex: 1;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.item-box,
.placeholder {
  background: #f0f0f0;
  color: #000;
  padding: 8px;
  text-align: center;
  border-radius: 4px;
}

.placeholder {
  color: #999;
}
</style>