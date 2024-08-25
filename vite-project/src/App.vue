<template>
  <div class="container">
    <SelectedItems 
      :selectedUserItems="selectedUserItems" 
      :selectedItem="selectedItem" 
    />

    <div class="items">
      <ItemList 
        :items="userItems" 
        :selectedItems="selectedUserItems"
        @select="selectUserItem"
      />
      <ItemList 
        :items="availableItems" 
        :selectedItems="[selectedItem]"
        @select="selectAvailableItem"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SelectedItems from './components/SelectedItems.vue';
import ItemList from './components/ItemList.vue';

const userItems = ref([
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
]);

const availableItems = ref([
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' },
]);

const selectedUserItems = ref([]);
const selectedItem = ref(null);

function selectUserItem(item) {
  if (selectedUserItems.value.includes(item)) {
    selectedUserItems.value = selectedUserItems.value.filter(i => i.id !== item.id);
  } else if (selectedUserItems.value.length < 6) {
    selectedUserItems.value.push(item);
  }
}

function selectAvailableItem(item) {
  selectedItem.value = item;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.items {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
