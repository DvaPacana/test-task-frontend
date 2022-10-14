<script setup>
import { onBeforeMount, toRef } from "vue";
import List from "./components/List.vue";
import { useItemsStore } from "./stores/useItemsStore";
import { MAX_USER_SELECT } from "./core/config";

const itemsStore = useItemsStore();

const userClothers = toRef(itemsStore.clothing, 'user');
const allClothers = toRef(itemsStore.clothing, 'all');

const selectedUserClothes = toRef(itemsStore.selected, 'user');
const selectedAllClothers = toRef(itemsStore.selected, 'all');

const selectItemHandler = (item, category) => itemsStore.selectItem(item, category);
const deleteItemHandler = (item, category) => itemsStore.unSelectItem(item, category);

onBeforeMount(() => {
  itemsStore.get();
});
</script>

<template>
  <main class="main">
    <div class="section section-top">
      <div class="section-col" :class="{empty: !selectedUserClothes.length}">
        <List :items="selectedUserClothes" category="user" @onSelect="deleteItemHandler" />
        <div class="section-col-bottom">
          selected: {{ selectedUserClothes.length }}/{{ MAX_USER_SELECT }}
        </div>
      </div>
      <div class="section-col" :class="{empty: !selectedAllClothers}">
        <div
          v-if="selectedAllClothers"
          class="all-item"
          @click="deleteItemHandler(selectedAllClothers, 'all')"
        >
          {{ selectedAllClothers.name }}
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-col">
        <List
          :items="userClothers"
          category="user"
          :class="{ disable: selectedUserClothes.length === MAX_USER_SELECT }"
          @onSelect="selectItemHandler"
        />
      </div>
      <div class="section-col">
        <List :items="allClothers" category="all" @onSelect="selectItemHandler" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.section:not(:last-child) {
  margin-bottom: 25px;
}

.section-col-bottom {
  width: 100%;
  text-align: center;
  margin-top: 25px;
  user-select: none;
}

.section-col {
  width: 45%;
  border-radius: 6px;
  border: 2px solid #000;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}

.section-top .section-col {
  width: 25%;
  min-height: 250px;
}

.section-top .section-col.empty {
  cursor: no-drop;
}

.section-col.empty {
  border-style: dashed;
  opacity: .2;
}

.all-item {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;
  user-select: none;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .section-col {
    width: 50%;
  }

  .section-top .section-col {
    width: 35%;
  }
}

@media screen and (max-width: 767px) {
  .section-top .section-col {
    width: 50%;
  }
}

@media screen and (max-width: 561px) {
  .section {
    flex-wrap: wrap;
  }
  .section-col,
  .section-top .section-col {
    width: 100%;
    min-height: unset;
  }
  .all-item {
    min-height: 50px;
  }
}
</style>
