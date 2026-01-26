<template>
  <div class="page">
    <div class="top-panels">

      <div class="panel selected-user-items">
        <div class="selected-items-list">
          <ItemCard
            v-for="item in selectedUserItems"
            :key="item.id"
            :item="item"
          />
        </div>
        <div class="selected-counter">
          selected: {{ selectedUserItems.length }} / {{ maxUserSelection }}
        </div>
      </div>

      <div class="panel selected-available-item">
        <div v-if="selectedAvailableItem" class="single-selected">
          {{ selectedAvailableItem.name }}
        </div>
        <div v-else class="single-selected empty">
          Ничего не выбрано
        </div>
      </div>

    </div>

    <div class="bottom-panels">

      <div class="panel items-list">
        <div class="items-grid">
          <ItemCard
            v-for="item in userItems"
            :key="item.id"
            :item="item"
            :is-selected="isUserItemSelected(item)"
            @click="toggleUserItem(item)"
          />
        </div>
      </div>

      <div class="panel items-list">
        <div class="items-grid">
          <ItemCard
            v-for="item in availableItems"
            :key="item.id"
            :item="item"
            :is-selected="isAvailableItemSelected(item)"
            @click="selectAvailableItem(item)"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ItemCard from './components/ItemCard.vue'

export default {
  name: 'App',

  components: {
    ItemCard,
  },

  data() {
    return {
      maxUserSelection: 6,

      userItems: [
        { id: 1, name: 'Shoes 1' },
        { id: 2, name: 'Shoes 2' },
        { id: 3, name: 'Shoes 3' },
        { id: 4, name: 'Shoes 4' },
        { id: 5, name: 'T-shirt 1' },
        { id: 6, name: 'T-shirt 2' },
        { id: 7, name: 'T-shirt 3' },
        { id: 8, name: 'T-shirt 4' },
      ],

      availableItems: [
        { id: 11, name: 'Jacket 1' },
        { id: 12, name: 'Jacket 2' },
        { id: 13, name: 'Jacket 3' },
        { id: 14, name: 'Jacket 4' },
        { id: 15, name: 'Hoodie 1' },
        { id: 16, name: 'Hoodie 2' },
        { id: 17, name: 'Hoodie 3' },
        { id: 18, name: 'Hoodie 4' },
      ],

      selectedUserItems: [],
      selectedAvailableItem: null,
    }
  },

  methods: {
    isUserItemSelected(item) {
      return this.selectedUserItems.some(selected => selected.id === item.id)
    },

    toggleUserItem(item) {
      const index = this.selectedUserItems.findIndex(
        selected => selected.id === item.id
      )

      if (index !== -1) {
        this.selectedUserItems.splice(index, 1)
      } else if (this.selectedUserItems.length < this.maxUserSelection) {
        this.selectedUserItems.push(item)
      }
    },

    isAvailableItemSelected(item) {
      return this.selectedAvailableItem !== null
        && this.selectedAvailableItem.id === item.id
    },

    selectAvailableItem(item) {
      if (this.selectedAvailableItem && this.selectedAvailableItem.id === item.id) {
        this.selectedAvailableItem = null
      } else {
        this.selectedAvailableItem = item
      }
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  max-width: 800px;
  margin: 30px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, sans-serif;
}

.panel {
  border: 3px solid #333;
  padding: 16px;
}

.top-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.selected-user-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.selected-items-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.selected-counter {
  font-size: 14px;
  color: #555;
}

.selected-available-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
}

.single-selected {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.single-selected.empty {
  color: #999;
  font-weight: normal;
  font-size: 14px;
}

.bottom-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>
