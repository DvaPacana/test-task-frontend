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
  if (choiseItemsLeft.value.length < 6) choiseItemsLeft.value.push(item);
}
function choiseRightItem(item: { id: number; name: string }) {
  choiseItemsridht.value = item;
}
const delItemSelect = (item: { id: number; name: string }) => {
  console.log("delItemSelect", item);
  choiseItemsLeft.value = choiseItemsLeft.value.filter((t) => t.id != item.id);
};
</script>

<template>
  <div class="base h-full flex">
    <div class="left w-[400px]">
      <div
        class="selected_box flex-wrap content-start comumn h-[190px] mb-3 flex py-2"
      >
        <div
          class="select_item box ml-4 mt-2"
          v-for="item in choiseItemsLeft"
          :key="item.id"
          @click="delItemSelect(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="items comumn h-[450px] flex flex-wrap content-start">
        <div
          class="item box m-2"
          v-for="item in itemsLeft"
          :key="item.id"
          @click="choiseLeftItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="right w-[400px]">
      <div class="selected_box h-[200px] flex flex-row-reverse py-2">
        <div
          class="select_itemR flex justify-center items-center h-[140px] w-[140px] border-4 border-black ml-2"
        >
          <p>SELECTED<br />{{ choiseItemsridht.name }}</p>
        </div>
      </div>
      <div class="items comumn h-[450px] ml-2 flex flex-wrap content-start">
        <div
          class="item box m-2"
          v-for="item in itemsRight"
          :key="item.id"
          @click="choiseRightItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.base {
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  max-width: 800px;
  border-top: 2px solid #010b0e;
  border-left: 2px solid #010b0e;
}
.comumn {
  width: 400px;
  border: 4px solid #010b0e;
}
.box {
  width: 80px;
  height: 80px;
  border: 4px solid #010b0e;
}
</style>
