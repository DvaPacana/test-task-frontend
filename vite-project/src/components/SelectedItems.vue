<template>
  <div class="selected-items">
    <div class="user-selected">
      <ItemList 
        :items="selectedUserItems" 
        :selectedItems="selectedUserItems"
        @select="removeUserItem"
      />
      <div class="selected-count">
        selected: {{ selectedUserItems.length }} / 6
      </div>
    </div>
    <div class="selected-item">
      <div v-if="selectedItem" class="item">
        {{ selectedItem.name }}
      </div>
      <div v-else class="item">
        SELECTED ITEM
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import ItemList from './ItemList.vue';

const props = defineProps({
  selectedUserItems: Array,
  selectedItem: Object,
});

function removeUserItem(item) {
  props.selectedUserItems.splice(props.selectedUserItems.indexOf(item), 1);
}
</script>

<style scoped>
.selected-items {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.user-selected, .selected-item {
  border: 1px solid black;
  padding: 10px;
  min-width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
