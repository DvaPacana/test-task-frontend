<template>
  <div class="home-view">
    <!-- Верхние блоки -->
    <div class="home-view__top-blocks">
      <div class="container blocks-container top-left">
        <h2>Выбранные вещи</h2>
        <SelectedItems 
          @selectItem="deselectLeftTopBlockItem"
          :selectedItems="selectedLeftTopBlockItems"
          title="Выбранные вещи пользователя" 
        />
      </div>
      <div class="container blocks-container top-right">
        <h2>Выбранная вещь</h2>
        <ItemCard 
          v-if="selectedRightTopBlockItem"
          :item="selectedRightTopBlockItem" 
          title="Выбранная вещь"
          :isSelected="false"
          :imgSize="[30, 30]"
          @selectItem="deselectRightTopBlockItem"
        />
        <span v-else>Вещь не выбрана</span>
      </div>
    </div>

    <!-- Нижние блоки -->
    <div class="home-view__bottom-blocks">
      <div class="container blocks-container">
        <ItemList
          :items="leftBottomBlockItems"
          title="Вещи пользователя"
          multiple
          @selectItem="selectLeftBlockItem"
        />
      </div>
      <div class="container blocks-container">
        <ItemList
          :items="rightBottomBlockItems"
          title="Вещи на выбор"
          @selectItem="selectRightBlockItem"
        />
      </div>
    </div>
  </div>
  <ErrorMessage :timeShowSecond="2" @close-message="errorMessage = null" :message="errorMessage" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemsStore } from '@/stores/itemsStore';

import ItemList from '@/components/ItemList.vue';
import ItemCard from '@/components/ItemCard.vue';
import SelectedItems from '@/components/SelectedItems.vue';
import ErrorMessage from '@/components/errorMessage.vue';

const itemsStore = useItemsStore();

const { 
  selectedLeftTopBlockItems,
  selectedRightTopBlockItem,
  leftBottomBlockItems, 
  rightBottomBlockItems,
  errorMessage
} = storeToRefs(itemsStore);

const { 
  getBlocks, 
  selectLeftBlockItem, 
  selectRightBlockItem,
  deselectRightTopBlockItem,
  deselectLeftTopBlockItem
} = itemsStore;

onMounted(async () => await getBlocks());
</script>

<style lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__top-blocks {
    display: flex;
    justify-content: space-between;
  }

  &__bottom-blocks {
    display: flex;
    justify-content: space-between;
  }

  &__top-blocks,
  &__bottom-blocks {
    .blocks-container {
      flex: 1;
      padding: 1rem;
    }
  }
}
</style>