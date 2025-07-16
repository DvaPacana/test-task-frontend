<script setup lang="ts">
  import { useItems } from './composables/items';
  import * as Wardrobe from './components/Module/Wardrobe';

  const {
    userItems,
    storeItems,
    selectedUserItems,
    selectedStoreItem,
    toggleUserItem,
    selectStoreItem,
    isUserItemSelected,
    isStoreItemSelected,
    selectionInfo,
    resetState,
  } = useItems();
</script>

<template>
  <main class="container mx-auto p-6 max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Wardrobe.SelectedUserItems
        :selectedUserItems="selectedUserItems"
        :selectionInfo="selectionInfo"
      />

      <Wardrobe.SelectedStoreItem :selectedStoreItem="selectedStoreItem" />

      <Wardrobe.ItemsGrid
        :items="userItems"
        :isSelected="isUserItemSelected"
        title="Вещи пользователя"
        color="green"
        @itemClick="toggleUserItem"
      />

      <Wardrobe.ItemsGrid
        :items="storeItems"
        :isSelected="isStoreItemSelected"
        title="Вещи на выбор"
        color="blue"
        @itemClick="selectStoreItem"
      />
    </div>

    <Wardrobe.ResetButton @reset="resetState" />
  </main>
</template>
