<template>
  <template v-if="isLoading">
    <p>Loading...</p>
  </template>
  <template v-else>
    <div class="container">
      <div class="top">
        <SelectedItems :items="userItemsSelected" @remove-item="index => userItemsSelected.splice(index, 1)">
          <template #count>
            <p class="count">selected: {{ userItemsSelected.length }}/6</p>
          </template>
        </SelectedItems>
        <SelectedItems :items="itemsToChooseSelected" @remove-item="index => itemsToChooseSelected.splice(index, 1)"/>
      </div>
      <div class="content">
        <ItemsContainer v-if="userItems" :items="userItemsFiltered" @select-item="e => userItemsSelected.push(e)" :disabled="isMaxUserItems"/>
        <ItemsContainer v-if="itemsToChoose" :items="itemsToChooseFiltered" @select-item="e => itemsToChooseSelected.push(e)" :disabled="isMaxItemsToChoose"/>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getUserItems, getItemsToChoose } from './api/users';
import type { ItemsType } from './types/users';
import SelectedItems from './components/SelectedItems.vue';
import ItemsContainer from './components/ItemsContainer.vue';

const userItems = ref<null | ItemsType[]>(null);
const userItemsSelected = ref<ItemsType[]>([]);
const itemsToChoose = ref<null | ItemsType[]>(null);
const itemsToChooseSelected = ref<ItemsType[]>([]);
const isLoading = ref<boolean>(true);

const userItemsFiltered = computed(() => {
  if (!userItems.value) return [];
  return userItems.value.filter(item => !userItemsSelected.value.find(selected => selected.id === item.id));
});

const itemsToChooseFiltered = computed(() => {
  if (!itemsToChoose.value) return [];
  return itemsToChoose.value.filter(item => !itemsToChooseSelected.value.find(selected => selected.id === item.id));
});

const isMaxUserItems = computed(() => userItemsSelected.value.length === 6);
const isMaxItemsToChoose = computed(() => itemsToChooseSelected.value.length === 1);

onMounted(async () => {
  userItems.value = await getUserItems();
  itemsToChoose.value = await getItemsToChoose();
  isLoading.value = false;
});
</script>

<style scoped>
  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 30px;
  }

  .content, .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    gap: 50px;
  }

  .content {
    flex-grow: 1;
  }
</style>
