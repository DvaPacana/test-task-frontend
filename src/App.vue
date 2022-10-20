<script setup>
import { onBeforeMount, toRef, reactive } from "vue";
import ProductList from "./components/ProductList.vue";
import { useSelectedStore } from "./stores/selected.js";

const selectedStore = useSelectedStore();
const items = reactive({
  user: [],
  all: [],
});

const selectedUserItems = toRef(selectedStore, "user");
const selectedAllItem = toRef(selectedStore, "all");

const selectUserItem = (item) => {
  if (
    selectedUserItems.value.length < 6 &&
    !selectedUserItems.value.find((e) => e.id == item.id)
  )
    selectedUserItems.value.push(item);
};
const selectAllItem = (item) => {
  if (!selectedAllItem.value || selectedAllItem.value.id != item.id)
    selectedAllItem.value = item;
};
const removeUserItem = (item) => {
  selectedUserItems.value = selectedUserItems.value.filter(
    (e) => e.id != item.id
  );
};
const removeAllItem = () => {
  selectedAllItem.value = null;
};

onBeforeMount(async () => {
  selectedStore.init();

  try {
    Object.assign(
      items,
      await fetch("./data.json").then((response) => response.json())
    );
  } catch (error) {
    alert("Не удалось загрузить данные!");
    console.error(error);
  }
});
</script>

<template>
  <div class="max-w-5xl p-2 sm:p-4">
    <div class="flex justify-between my-5">
      <div
        class="w-48 sm:w-60 flex flex-col justify-between border-2 border-neutral-400 rounded"
        :class="{
          'bg-lime-300': selectedUserItems.length,
          'bg-neutral-200': !selectedUserItems.length,
        }"
      >
        <ProductList
          :items="selectedUserItems"
          class="p-2"
          @select="removeUserItem"
        />
        <div class="text-center py-2">
          Выбрано: {{ selectedUserItems.length }}/{{ 6 }}
        </div>
      </div>
      <div
        class="w-28 h-60 sm:w-60 flex justify-center items-center border-2 border-neutral-400 rounded cursor-pointer"
        :class="{
          'bg-lime-300': selectedAllItem,
          'bg-neutral-200': !selectedAllItem,
        }"
        @click="removeAllItem"
      >
        <div v-if="selectedAllItem">
          {{ selectedAllItem.name }}
        </div>
        <div v-else>Ничего не выбрано</div>
      </div>
    </div>
    <div class="flex justify-between gap-3 sm:gap-5 my-5">
      <div class="w-1/2 border-2 border-neutral-400 rounded">
        <ProductList
          :items="items.user"
          class="bg-neutral-100"
          @select="selectUserItem"
        />
      </div>
      <div class="w-1/2 border-2 border-neutral-400 rounded">
        <ProductList
          :items="items.all"
          class="bg-neutral-100"
          @select="selectAllItem"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
