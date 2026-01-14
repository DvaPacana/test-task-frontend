<template>
  <header class="header">
    <ItemsSelected :count="6" />
    <ItemsSelected :count="1" />
  </header>
  <main class="main">
    <section class="section">
      <ItemsList :items="userCatalogItems" />
    </section>
    <section class="section">
      <ItemsList :items="catalogItems" />
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
