<script setup>
import items from "../assets/items/shopItems.json";
import { ref } from "vue";

const shopItems = ref(items);
const addedItem = ref(null);

function addItem({ target: { id } }) {
  const currentItem = shopItems.value.find((i) => i.id === +id);
  shopItems.value = shopItems.value.filter((i) => i.id !== +id);
  addedItem?.value && shopItems.value.push(addedItem.value);
  addedItem.value = currentItem;
}

function removeItem({ target: { id } }) {
  shopItems.value.push(addedItem.value);
  addedItem.value = null;
}
</script>

<template>
  <div class="inner-container">
    <div class="selected-container">
      <p v-if="addedItem" @click="removeItem" :id="addedItem.id">
        {{ addedItem.name }}
      </p>
      <p v-else>Select an item</p>
    </div>

    <ul class="not-selected">
      <li @click="addItem" :id="item.id" v-for="item in shopItems">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.selected-container {
  width: 50%;
  margin-bottom: 10px;
  margin-left: auto;
  & p {
    text-align: center;
    min-height: 150px;
    font-size: 30px;
    cursor: pointer;
    border: var(--border);
  }
}
</style>
