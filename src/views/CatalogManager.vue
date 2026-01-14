<template>
  <template v-if="isLoading">
    <div class="loading">Loading</div>
  </template>
  <template v-else>
    <header class="header">
      <ItemsSelected
        :items="selectedUserItems"
        @remove-item="removeUserItem"
        :max-items="MAX_LENGTH.USER_CATALOG"
      />
      <ItemsSelected
        :items="selectedCatalogItems"
        @remove-item="removeCatalogItem"
        :max-items="MAX_LENGTH.CATALOG"
      />
    </header>
    <main class="main">
      <section class="section">
        <ItemsList
          :items="userCatalogItems"
          :selected-items="selectedUserItems"
          @select-item="selectUserItem"
          @remove-item="removeUserItem"
          :max-items="MAX_LENGTH.USER_CATALOG"
          :selection-disabled="isUserSelectionFull"
        />
      </section>
      <section class="section">
        <ItemsList
          :items="catalogItems"
          :selected-items="selectedCatalogItems"
          @select-item="selectCatalogItem"
          @remove-item="removeCatalogItem"
          :max-items="MAX_LENGTH.CATALOG"
          :selection-disabled="isCatalogSelectionFull"
        />
      </section>
    </main>
  </template>
</template>

<script setup>
import ItemsList from '@/components/ItemsList.vue';
import ItemsSelected from '@/components/ItemsSelected.vue';
import { MAX_LENGTH } from '@/constants';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isLoading = computed(() => store.state.catalogManager.isLoading);
const userCatalogItems = computed(() => store.state.catalogManager.userCatalogItems);
const catalogItems = computed(() => store.state.catalogManager.catalogItems);
const selectedUserItems = computed(() => store.state.catalogManager.selectedUserCatalogItems);
const selectedCatalogItems = computed(() => store.state.catalogManager.selectedCatalogItems);

const isUserSelectionFull = computed(() => store.getters['catalogManager/isUserSelectionFull']);
const isCatalogSelectionFull = computed(
  () => store.getters['catalogManager/isCatalogSelectionFull'],
);

const fetchData = () => store.dispatch('catalogManager/fetchAllData');
const selectUserItem = (item) => store.dispatch('catalogManager/selectUserItem', item);
const removeUserItem = (itemId) => store.dispatch('catalogManager/removeUserItem', itemId);
const selectCatalogItem = (item) => store.dispatch('catalogManager/selectCatalogItem', item);
const removeCatalogItem = (itemId) => store.dispatch('catalogManager/removeCatalogItem', itemId);

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  @include flex-center;
}
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
