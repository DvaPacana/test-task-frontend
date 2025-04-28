<template>
  <div class="page">
    <div class="top-blocks">
      <div class="selected-user-items">
        <SelectedItems
            :items="selectedUserItems"
            :maxSelected="6"
            emptyText="No user items selected"
        />
      </div>
      <div class="selected-choose-item">
        <SelectedItems
            :items="selectedChooseItem ? [selectedChooseItem] : []"
            :maxSelected="1"
            emptyText="No item chosen"
        />
      </div>
    </div>
    <div class="bottom-blocks">
      <div class="user-items">
        <ItemGrid
            v-model="selectedUserItems"
            :items="userItems"
            :multiple="true"
            :maxSelected="6"
        />
      </div>
      <div class="choose-items">
        <ItemGrid
            v-model="selectedChooseItemList"
            :items="chooseItems"
            :multiple="false"
            :maxSelected="1"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import ItemGrid from '@/components/ItemGrid.vue';
import SelectedItems from '@/components/SelectedItems.vue';

const userItems = ref([
  {id: 1, name: 'Shoes 1'},
  {id: 2, name: 'Shoes 2'},
  {id: 3, name: 'Shoes 3'},
  {id: 4, name: 'Shoes 4'},
  {id: 5, name: 'T-shirt 1'},
  {id: 6, name: 'T-shirt 2'},
  {id: 7, name: 'T-shirt 3'},
  {id: 8, name: 'T-shirt 4'},
]);

const chooseItems = ref([
  {id: 11, name: 'Jacket 1'},
  {id: 12, name: 'Jacket 2'},
  {id: 13, name: 'Jacket 3'},
  {id: 14, name: 'Jacket 4'},
  {id: 15, name: 'Hoodie 1'},
  {id: 16, name: 'Hoodie 2'},
  {id: 17, name: 'Hoodie 3'},
  {id: 18, name: 'Hoodie 4'},
]);

const selectedUserItems = ref([]);
const selectedChooseItemList = ref([]);
const selectedChooseItem = ref(null);

watch(selectedChooseItemList, (newList) => {
  selectedChooseItem.value = newList.length ? newList[0] : null;
});
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-blocks, .bottom-blocks {
  display: flex;
  gap: 20px;
}

.selected-user-items, .selected-choose-item, .user-items, .choose-items {
  border: 2px solid black;
  padding: 10px;
  flex: 1;
  min-height: 150px;
}

.item {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 2px solid black;
  cursor: pointer;
}

.selected {
  background-color: lightblue;
}
</style>
