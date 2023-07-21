<script setup>
import items from "../assets/items/userItems.json";
import { ref } from "vue";

const usersItems = ref(items);
const addedItems = ref([]);

function addItem({ target: { id } }) {
  const currentItem = usersItems.value.find((i) => i.id === +id);
  usersItems.value = usersItems.value.filter((i) => i.id !== +id);
  addedItems.value.push(currentItem);
}

function removeItem({ target: { id } }) {
  const currentItem = addedItems.value.find((i) => i.id === +id);
  addedItems.value = addedItems.value.filter((i) => i.id !== +id);
  usersItems.value.push(currentItem);
}
</script>

<template>
  <div class="inner-container">
    <div class="selected-container">
      <ul class="selected">
        <li @click="removeItem" :id="item.id" v-for="item in addedItems">
          {{ item.name }}
        </li>
      </ul>
      <span
        >Selected:
        {{ Math.round((addedItems.length / items.length) * 100) }}%</span
      >
    </div>

    <ul class="not-selected">
      <li @click="addItem" :id="item.id" v-for="item in usersItems">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.selected-container {
  position: relative;
  width: 50%;
  margin-bottom: 10px;
  & span {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: bisque;
  }
  .selected {
    height: 150px;
    overflow: auto;
  }
}
</style>
