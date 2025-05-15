<script lang="ts" setup>
import {defineEmits, defineProps} from "vue";

defineProps({
  itemsList: {
    type: Array,
    required: true
  },
  selectedItems: {
    type: Set,
  },
  selectedItem: {
    type: Object,
  },
  maxItems: {
    type: Number,
  },
  multiple: {
    type: Boolean,
  }
})

defineEmits(['deleteItem', 'selectItem'])

</script>

<template>
  <div class="selector__wrapper">
    <div class="selected-items__wrapper">
      <div v-if="multiple" class="selected-items-list">
        <div v-if="selectedItems?.size < 1" class="selected_item__skeleton">
          <slot name="skeletonDescription"><p>Please add items</p></slot>
        </div>
        <div v-else v-for="item in selectedItems" class="selected_item" @click.prevent.stop="$emit('deleteItem', item)">
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div v-if="!multiple" class="selected-items-list">
        <div v-if="selectedItem === null" class="selected_item__skeleton">
          <slot name="skeletonDescription"><p>Please add items</p></slot>
        </div>
        <div v-else class="selected_item" @click="$emit('selectItem', selectedItem)">
          <p>{{ selectedItem.name }}</p>
        </div>
      </div>
      <slot name="itemsListDescription"/>
    </div>
    <div class="items-for-select__wrapper">
      <article class="item" :class="selectedItems?.has(item) || item?.id === selectedItem?.id ? 'selected' : ''" v-for="item in itemsList" @click="$emit('selectItem', item)">
        <h2>{{ item.name }}</h2>
        <template v-if="selectedItems">
          <button v-if="selectedItems?.has(item)" @click.prevent.stop="$emit('deleteItem', item)" type="button"
                  class="item_delete-btn">&times;
          </button>
        </template>
      </article>
    </div>
  </div>

</template>

<style scoped>
.selector__wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1;
}

.selected-items__wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 1rem;
  background-color: #eee;
  flex-direction: column;
  gap: 1rem;
}

.selected-items-list {
  border: 1px dashed #ccc;
  padding: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  display: flex;
  align-self: flex-start;
}

.items-place_items-for-select__wrapper {
  display: flex;
  gap: 1rem;
}

.items-for-select__wrapper {
  display: flex;
  flex: 1 1;
  flex-direction: column;
  background-color: #eee;
  padding: 1rem;
  gap: 1rem;
}

/*ItemComponent*/
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ddd;
}

.selected {
  background-color: #ccc;
}

.item:hover {
  background-color: #ccc;
  cursor: pointer;
}

.item_delete-btn {
  font-size: 1rem;
  color: #863838;
  border: 0;
  background-color: #e75656;
  width: 35px;
  height: 35px;
}

.item_delete-btn:hover {
  background-color: #cb3e3e;
}

.selected_item {
  cursor: pointer;
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #afcb95;
}

.selected_item__skeleton {
  display: flex;
  height: 100px;
  width: 100px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex: 1 1;
}

</style>