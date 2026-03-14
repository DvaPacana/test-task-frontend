<script lang="ts" setup>
import { computed } from "vue";
import { useItemsStore } from "./stores/items";
import ItemsColumn from "./components/ItemsColumn.vue";
import SelectedPanel from "./components/SelectedPanel.vue";

const itemsStore = useItemsStore();

const selectedLeftIds = computed(() => itemsStore.selectedLeft.map((item) => item.id));
const selectedRightIds = computed(() =>
  itemsStore.selectedRight ? [itemsStore.selectedRight.id] : []
);

const handleLeftClick = (itemId: number) => {
  const item = itemsStore.leftItems.find((candidate) => candidate.id === itemId);
  if (!item) {
    return;
  }

  itemsStore.toggleLeftItem(item);
};

const handleRightClick = (itemId: number) => {
  const item = itemsStore.rightItems.find((candidate) => candidate.id === itemId);
  if (!item) {
    return;
  }

  itemsStore.selectRightItem(item);
};
</script>

<template>
  <main class="page">
    <header class="page__header">
      <SelectedPanel title="Выбранные вещи пользователя" :items="itemsStore.selectedLeft"/>
      <SelectedPanel title="Выбранная вещь из списка" :items="itemsStore.selectedRight"/>
    </header>

    <section class="page__grid">
      <ItemsColumn
        title="Вещи пользователя"
        :items="itemsStore.leftItems"
        :selected-ids="selectedLeftIds"
        @item-click="(item) => handleLeftClick(item.id)"
      />

      <ItemsColumn
        title="Вещи на выбор"
        :items="itemsStore.rightItems"
        :selected-ids="selectedRightIds"
        @item-click="(item) => handleRightClick(item.id)"
      />
    </section>
  </main>
</template>

<style scoped>
.page {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.page__header {
  display: flex;
  gap: 16px;
}

.page__grid {
  display: flex;
  gap: 16px;
}

@media (max-width: 768px) {
  .page__header,
  .page__grid {
    flex-direction: column;
  }
}
</style>

