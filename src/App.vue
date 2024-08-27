<script setup lang="ts">
import { ref, onMounted } from "vue";

import type { clothItem } from "@/type";
import { multiSelect, singleSelect } from "@/mock";

import UiItemCard from "@/ui/UiItemCard.vue";
import UiSection from "@/ui/UiSection.vue";

const multiItemsSelected = ref<clothItem[]>([])
const singleItemSelected = ref("Select select some item");

function addItem({ id, name }: clothItem): void {
  if (multiItemsSelected.value.some(el => el.id === id)) return;

  if (multiItemsSelected.value.length >= 6) {
    multiItemsSelected.value.shift();
  }

  multiItemsSelected.value.push({ id, name });
}

function removeItem(id: number): void {
  multiItemsSelected.value = multiItemsSelected.value.filter(el => el.id !== id);
}

function getLocal() {
  multiItemsSelected.value = JSON.parse(localStorage.getItem("multiItemsSelected") || "");
  singleItemSelected.value = JSON.parse(localStorage.getItem("singleItemSelected") || "");
}
function setLocal() {
  localStorage.setItem("multiItemsSelected", JSON.stringify(multiItemsSelected.value));
  localStorage.setItem("singleItemSelected", JSON.stringify(singleItemSelected.value));
}

onMounted(() => {
  getLocal();
  addEventListener("beforeunload", () => setLocal()), { once: true };
})
</script>

<template>
  <main class="main">

    <UiSection :count="multiItemsSelected.length" counter>
      <template v-slot:top>
        <UiItemCard v-for="({ id, name }) in multiItemsSelected" :key="id" :name @click="removeItem(id)" />
      </template>
      <template v-slot:bottom>
        <UiItemCard v-for="({ id, name }) in multiSelect" :key="id" :name @click="addItem({ id, name })" />
      </template>
    </UiSection>

    <UiSection>
      <template v-slot:top>
        <UiItemCard v-if="singleItemSelected" :name="singleItemSelected" size="big" />
      </template>
      <template v-slot:bottom>
        <UiItemCard v-for="({ id, name }) in singleSelect" :key="id" :name @click="() => singleItemSelected = name" />
      </template>
    </UiSection>

  </main>
</template>

<style>
.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  padding-top: 2rem;
  margin-inline: clamp(16px, 3vw, 10rem);
}
</style>
