<template>
  <div class="app">
    <div class="top-section">
      <div class="block top-left">
        <div class="selected-items">
          <ItemCard
            v-for="item in selectedUserItems"
            :key="item.id"
            :item="item"
            :is-selected="true"
            :clickable="false"
          />
        </div>
        <div class="counter">
          selected: {{ selectedUserItems.length }}/6
        </div>
      </div>

      <div class="block top-right">
        <div v-if="selectedAvailableItem" class="selected-item-large">
          {{ selectedAvailableItem.name }}
        </div>
        <div v-else class="selected-item-large placeholder">
          SELECTED ITEM
        </div>
      </div>
    </div>

    <div class="bottom-section">
      <div class="block bottom-left">
        <div class="items-grid">
          <ItemCard
            v-for="item in userItems"
            :key="item.id"
            :item="item"
            :is-selected="isUserItemSelected(item.id)"
            @click="toggleUserItem"
          />
        </div>
      </div>

      <div class="block bottom-right">
        <div class="items-grid">
          <ItemCard
            v-for="item in availableItems"
            :key="item.id"
            :item="item"
            :is-selected="selectedAvailableItem && selectedAvailableItem.id === item.id"
            @click="selectAvailableItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ItemCard from './ItemCard.vue'
import { userItems, availableItems } from './store.js'

export default {
  name: 'App',
  components: {
    ItemCard
  },
  setup() {

    const selectedUserItems = ref([])
    const selectedAvailableItem = ref(null)

    function isUserItemSelected(id) {
      for (const item of selectedUserItems.value) {
        if (item.id === id) {
          return true
        }
      }
      return false
    }

    const toggleUserItem = (item) => {
      const idx = selectedUserItems.value.findIndex(selected => selected.id === item.id)
      
      if (idx === -1) {
        if (selectedUserItems.value.length < 6) {
          selectedUserItems.value.push(item)
        }
      } else {
        selectedUserItems.value.splice(idx, 1)
      }
    }

    function selectAvailableItem(item) {
      if (selectedAvailableItem.value && selectedAvailableItem.value.id === item.id) {
        selectedAvailableItem.value = null
      } else {
        selectedAvailableItem.value = item
      }
    }

    return {
      userItems,
      availableItems,
      selectedUserItems,
      selectedAvailableItem,
      isUserItemSelected,
      toggleUserItem,
      selectAvailableItem
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
  min-height: 0;
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 2;
  min-height: 0;
}

.block {
  border: 3px solid #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.top-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.top-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-left,
.bottom-right {
  display: flex;
  flex-direction: column;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  flex: 1;
}


.selected-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
}

.selected-items .item {
  min-width: 100px;
  min-height: 60px;
}

.counter {
  margin-top: 10px;
  font-weight: bold;
}

.selected-item-large {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.selected-item-large.placeholder {
  color: #999;
}
</style>
