<script setup lang="ts">
import itemsJson from "./items.json";
import { computed, ref } from "vue";

const itemsLeft = computed(() => itemsJson.items_left);
const itemsRight = computed(() => itemsJson.items_right);
const choiseItemsLeft = ref(
  itemsLeft.value.filter((item) => item.id > 0 && item.id < 4),
);
const choiseItemsridht = ref(itemsRight.value.find((item) => item.id == 11));
function choiseLeftItem(item: { id: number; name: string }) {
  if (choiseItemsLeft.value.length < 7) choiseItemsLeft.value.push(item);
}
function choiseRightItem(item: { id: number; name: string }) {
  choiseItemsridht.value = item;
}
</script>

<template>
  <div class="base flex">
    <div class="left_comumn">
      <div class="selected_box">
        <div class="select_item" v-for="item in choiseItemsLeft" :key="item.id">
          {{ item.name }}
        </div>
      </div>
      <div class="items">
        <div
          class="item"
          v-for="item in itemsLeft"
          :key="item.id"
          @click="choiseLeftItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="right_comumn">
      <div class="selected_box">
        <div class="select_itemR">
          {{ choiseItemsridht }}
        </div>
      </div>
      <div class="items">
        <div
          class="item"
          v-for="item in itemsRight"
          :key="item.id"
          @click="choiseRightItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.base {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  max-width: 800px;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
