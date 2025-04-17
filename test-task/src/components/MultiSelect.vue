<template>
  <div class="singleSelect">
    <div class="selectedItems">
      <div class="selectedItemsContainer">
        <ItemCard
          v-for="item in selectedItems"
          :key="item.id"
          v-bind="item" />
      </div>
      <div class="selectedItemsCounter">
        selected: {{ selectedItems.length }} / {{ items.length }}
      </div>
    </div>
    <div class="items">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        :selected="selectedItems.includes(item)"
        @click="selectItem(item)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { Card } from '@/types'

import { ref } from 'vue'
import ItemCard from './ItemCard.vue'

interface Props {
  items: Array<Card>
}

const { items } = defineProps<Props>()
const selectedItems: Ref<Array<Card>> = ref([])

const selectItem = (card: Card) => {
  if (!selectedItems.value.some(({ id }) => id === card.id)) selectedItems.value.push(card)
}
</script>

<style scoped lang="scss">
.singleSelect {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
}

.selectedItems {
  height: 122px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 16px;
}

.selectedItemsContainer {
  height: 90px;
  display: flex;
  gap: 8px;
}

.items {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 16px;
}
</style>
