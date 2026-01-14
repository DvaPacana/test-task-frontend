<template>
  <header class="header">
    <ItemsSelected
      :items="selectedFromUserCatalog"
      @remove-item="removeFromUserCatalog"
      :max-items="MAX_LENGTH.USER_CATALOG"
    />
    <ItemsSelected
      :items="selectedFromCatalog"
      @remove-item="removeFromCatalog"
      :max-items="MAX_LENGTH.CATALOG"
    />
  </header>
  <main class="main">
    <section class="section">
      <ItemsList
        :items="userCatalogItems"
        :selected-items="selectedFromUserCatalog"
        @select-item="selectFromUserCatalog"
        @remove-item="removeFromUserCatalog"
        :max-items="MAX_LENGTH.USER_CATALOG"
        :selection-disabled="userCatalogSelectionDisabled"
      />
    </section>
    <section class="section">
      <ItemsList
        :items="catalogItems"
        :selected-items="selectedFromCatalog"
        @select-item="selectFromCatalog"
        @remove-item="removeFromCatalog"
        :max-items="MAX_LENGTH.CATALOG"
        :selection-disabled="catalogSelectionDisabled"
      />
    </section>
  </main>
</template>

<script setup>
import { getCatalogData, getUserCatalogData } from '@/api';
import ItemsList from '@/components/ItemsList.vue';
import ItemsSelected from '@/components/ItemsSelected.vue';
import { useCatalogManager } from '@/composables/useCatalogManager';
import { MAX_LENGTH } from '@/constants';

import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const userCatalogItems = ref([]);
const catalogItems = ref([]);

const {
  selectedItems: selectedFromUserCatalog,
  selectItem: selectFromUserCatalog,
  removeItem: removeFromUserCatalog,
  selectionDisabled: userCatalogSelectionDisabled,
} = useCatalogManager(MAX_LENGTH.USER_CATALOG);

const {
  selectedItems: selectedFromCatalog,
  selectItem: selectFromCatalog,
  removeItem: removeFromCatalog,
  selectionDisabled: catalogSelectionDisabled,
} = useCatalogManager(MAX_LENGTH.CATALOG);

// TODO: Вынести логику загрузки данных
const loadData = async () => {
  try {
    isLoading.value = true;
    [userCatalogItems.value, catalogItems.value] = await Promise.all([
      getUserCatalogData(),
      getCatalogData(),
    ]);
  } catch (error) {
    console.error('Failed to load data:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadData);
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
