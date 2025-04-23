<template>
  <div class="app">
    <h1>Выбор вещей</h1>
    <div class="container">
      <SelectedItems
        :user-selected="userSelected"
        :single-selected="singleSelected"
      />
      <ItemSelector
        :user-items="userItems"
        :available-items="availableItems"
        @select-user-item="selectUserItem"
        @select-available-item="selectAvailableItem"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SelectedItems from './components/SelectedItems.vue'
import ItemSelector from './components/ItemSelector.vue'

export default {
  components: {
    SelectedItems,
    ItemSelector
  },
  setup() {
    const userItems = ref([
      { id: 1, name: "Shoes 1" },
      { id: 2, name: "Shoes 2" },
      { id: 3, name: "Shoes 3" },
      { id: 4, name: "Shoes 4" },
      { id: 5, name: "T-shirt 1" },
      { id: 6, name: "T-shirt 2" },
      { id: 7, name: "T-shirt 3" },
      { id: 8, name: "T-shirt 4" }
    ])

    const availableItems = ref([
      { id: 11, name: "Jacket 1" },
      { id: 12, name: "Jacket 2" },
      { id: 13, name: "Jacket 3" },
      { id: 14, name: "Jacket 4" },
      { id: 15, name: "Hoodie 1" },
      { id: 16, name: "Hoodie 2" },
      { id: 17, name: "Hoodie 3" },
      { id: 18, name: "Hoodie 4" }
    ])

    const userSelected = ref([])
    const singleSelected = ref(null)

    const selectUserItem = (item) => {
      const index = userSelected.value.findIndex(i => i.id === item.id)
      if (index === -1) {
        if (userSelected.value.length < 6) {
          userSelected.value.push(item)
        }
      } else {
        userSelected.value.splice(index, 1)
      }
    }

    const selectAvailableItem = (item) => {
      singleSelected.value = singleSelected.value?.id === item.id ? null : item
    }

    return {
      userItems,
      availableItems,
      userSelected,
      singleSelected,
      selectUserItem,
      selectAvailableItem
    }
  }
}
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
