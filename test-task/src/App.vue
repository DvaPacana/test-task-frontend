<script setup>
import SelectorPanel from '@/panels/SelectorPanel.vue'
import { userItems, otherItems } from '@/mock/items.js'
import DisplayPanel from '@/panels/DisplayPanel.vue'
import { ref } from 'vue'
import ItemToken from '@/elements/ItemToken.vue'

const itemToPreview = ref(null)
function setItemToPreview(item) {
  itemToPreview.value = item
}

const itemsToDisplay = ref(new Set())
const ITEMS_DISPLAY_LIMIT = 6
function setItemToDisplay(item) {
  if (itemsToDisplay.value.size >= ITEMS_DISPLAY_LIMIT) return
  itemsToDisplay.value.add(item)
}
function removeItemFromDisplay(item) {
  itemsToDisplay.value.delete(item)
}
</script>

<template>
  <div class="app">
    <div class="container">
      <div class="row">
        <DisplayPanel
          :items-list="itemsToDisplay"
          :items-limit="ITEMS_DISPLAY_LIMIT"
          @item-select="removeItemFromDisplay"
        />
        <ItemToken v-if="itemToPreview" :item-model="itemToPreview" :full-size="true" />
      </div>
      <div class="row">
        <SelectorPanel :items-list="userItems" @item-select="setItemToDisplay" />
        <SelectorPanel :items-list="otherItems" @item-select="setItemToPreview" />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #2e2f38;
  margin: 0;
}

.app {
  display: flex;
  justify-content: center;
  color: white;

  .container {
    padding: 20px;
    width: 800px;
    height: calc(100vh - 40px);
    display: grid;
    grid-template-rows: 30% 70%;
    gap: 15px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
}

.panel {
  background-color: #262933;
  border-radius: 15px;
  padding: 10px;
}
</style>
