<template>
  <header class="header">
    <ItemsSelected
      :count="6"
      :items="selectedFromUserCatalog"
      @remove-item="removeFromUserCatalog"
    />
    <ItemsSelected
      :count="1"
      :items="selectedFromCatalog"
      @remove-item="removeFromCatalog"
    />
  </header>
  <main class="main">
    <section class="section">
      <ItemsList
        :items="userCatalogItems"
        :selected-items="selectedFromUserCatalog"
        @select-item="selectFromUserCatalog"
        @remove-item="removeFromUserCatalog"
      />
    </section>
    <section class="section">
      <ItemsList
        :items="catalogItems"
        :selected-items="selectedFromCatalog"
        @select-item="selectFromCatalog"
        @remove-item="removeFromCatalog"
      />
    </section>
  </main>
</template>

<script setup>
import { getCatalogData, getUserCatalogData } from '@/api';
import ItemsList from '@/components/ItemsList.vue';
import ItemsSelected from '@/components/ItemsSelected.vue';

import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const userCatalogItems = ref([]);
const catalogItems = ref([]);
const selectedFromUserCatalog = ref([]);
const selectedFromCatalog = ref([]);

const selectFromUserCatalog = (item) => {
  if (!selectedFromUserCatalog.value.find((i) => i.id === item.id)) {
    selectedFromUserCatalog.value.push(item);
  }
};

const selectFromCatalog = (item) => {
  if (!selectedFromCatalog.value.find((i) => i.id === item.id)) {
    selectedFromCatalog.value.push(item);
  }
};

const removeFromUserCatalog = (itemId) => {
  const idx = selectedFromUserCatalog.value.findIndex((i) => i.id === itemId);
  if (idx > -1) {
    selectedFromUserCatalog.value.splice(idx, 1);
  }
};

const removeFromCatalog = (itemId) => {
  const idx = selectedFromCatalog.value.findIndex((i) => i.id === itemId);
  if (idx > -1) {
    selectedFromCatalog.value.splice(idx, 1);
  }
};

onMounted(async () => {
  userCatalogItems.value = await getUserCatalogData();
  catalogItems.value = await getCatalogData();
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
}

.section {
  min-height: calc(100vh - $header-height);
  padding: $grid-gap;
  @media (min-width: 992px) {
    flex: 1;
  }
}

.header {
  position: sticky;
  top: 0;
  padding: $grid-gap;
  display: flex;
  justify-content: space-between;

  height: $header-height;
  z-index: 1;
}
</style>
