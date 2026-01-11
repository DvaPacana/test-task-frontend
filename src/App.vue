<template>
  <main class="app-grid">
    <SelectedUserItems :items="selectedUserItems" :limit="SELECTED_USER_ITEMS_LIMIT" />
    <SelectedTradeItem :item="selectedTradeItem" />
    <ItemCardList :items="selectableUserItems" @select-item="selectUserItem" />
    <ItemCardList :items="selectableTradeItems" @select-item="selectTradeItem" />
  </main>
</template>

<script lang="ts" setup>
import {useSelectableTradeItems} from '@/composables/useSelectableTradeItems.ts';
import {useSelectableUserItems} from '@/composables/useSelectableUserItems.ts';
import SelectedUserItems from '@/components/SelectedUserItems.vue';
import SelectedTradeItem from '@/components/SelectedTradeItem.vue';
import {useTradeItemsStore} from '@/stores/useTradeItemsStore.ts';
import {useUserItemsStore} from '@/stores/useUserItemsStore.ts';
import {SELECTED_USER_ITEMS_LIMIT} from '@/configs/config.ts';
import ItemCardList from '@/components/ItemCardList.vue';
import {getTradeItems} from '@/api/apiTradeItems.ts';
import {getUserItems} from '@/api/apiUserItems.ts';
import {storeToRefs} from 'pinia';

// UserItems
const userItemsStore = useUserItemsStore();
const { selectedUserItems } = storeToRefs(userItemsStore);
const { fetchUserItems, selectUserItem } = userItemsStore;

const apiUserItems = getUserItems();
fetchUserItems(apiUserItems);

const { selectableUserItems } = useSelectableUserItems();

// TradeItems
const tradeItemsStore = useTradeItemsStore();
const { selectedTradeItem } = storeToRefs(tradeItemsStore);
const { fetchTradeItems, selectTradeItem } = tradeItemsStore;

const apiTradeItems = getTradeItems();
fetchTradeItems(apiTradeItems);

const { selectableTradeItems } = useSelectableTradeItems();
</script>

<style lang="scss" scoped>
.app-grid {
  height: 100%;

  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(max-content, 250px) 1fr;
  gap: 20px;
}
</style>
