<script setup lang="ts">
import { computed } from 'vue'
import { userItems, pickItems, type Item } from './data/items.ts'
import { useSelections } from './composables/useSelections.ts'
import { TEXTS } from './constants/texts'
import Panel from './components/Panel.vue'
import SelectedArea from './components/SelectedArea.vue'
import ItemsGrid from './components/ItemsGrid.vue'

const {
  selectedUserItems,
  selectedPickItem,
  toggleUserItem,
  selectPickItem,
  resetUserSelection,
  maxUserSelections,
} = useSelections()

const selectedUserIds = computed(() => new Set(selectedUserItems.value.map((entry) => entry.id)))

const isUserItemSelected = computed(
  () => (item: Item) => selectedUserIds.value.has(item.id),
)
const isPickItemSelected = computed(
  () => (item: Item) => selectedPickItem.value?.id === item.id,
)

const selectedUserCount = computed(() => selectedUserItems.value.length)

const counterText = computed(
  () => `${TEXTS.SELECTED_COUNTER} ${selectedUserCount.value} / ${maxUserSelections}`,
)

const isUserItemDisabled = computed(
  () =>
    (item: Item) =>
      !isUserItemSelected.value(item) && selectedUserItems.value.length >= maxUserSelections,
)

const selectedPickItemArray = computed(() =>
  selectedPickItem.value ? [selectedPickItem.value] : [],
)

const isResetDisabled = computed(() => !selectedUserItems.value.length)
</script>

<template>
  <div class="page">
    <h1 class="title">{{ TEXTS.PAGE_TITLE }}</h1>

    <div class="grid grid--top">
      <Panel :title="TEXTS.SELECTED_USER_ITEMS_TITLE" :counter="counterText">
        <SelectedArea :items="selectedUserItems" />
        <template #actions>
          <button
            type="button"
            class="reset-button"
            :disabled="isResetDisabled"
            @click="resetUserSelection"
          >
            {{ TEXTS.RESET_BUTTON }}
          </button>
        </template>
      </Panel>

      <Panel :title="TEXTS.SELECTED_PICK_ITEM_TITLE">
        <SelectedArea
          :items="selectedPickItemArray"
          :empty-text="TEXTS.NOT_SELECTED"
          single
        />
      </Panel>
    </div>

    <div class="grid grid--bottom">
      <Panel :title="TEXTS.USER_ITEMS_TITLE">
        <ItemsGrid
          :items="userItems"
          :is-item-selected="isUserItemSelected"
          :is-item-disabled="isUserItemDisabled"
          @item-click="toggleUserItem"
        />
      </Panel>

      <Panel :title="TEXTS.PICK_ITEMS_TITLE">
        <ItemsGrid
          :items="pickItems"
          :is-item-selected="isPickItemSelected"
          @item-click="selectPickItem"
        />
      </Panel>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  margin: 0;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.reset-button {
  border: 2px solid #222;
  border-radius: 6px;
  background: #fff;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
}

.reset-button:focus-visible {
  outline: 3px solid #5b8def;
  outline-offset: 2px;
}

.reset-button:not(:disabled):hover {
  background: #111;
  color: #fff;
  transform: translateY(-1px);
}

.reset-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
