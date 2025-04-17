<template>
  <div class="singleSelect">
    <div class="selectedItem">
      <ItemCard
        v-if="selectedItem"
        v-bind="selectedItem" />
    </div>
    <div class="items">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        v-bind="item"
        :selected="item.id === selectedItem?.id"
        @click="selectedItem = item" />
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

const selectedItem: Ref<Card | null> = ref(null)

const { items } = defineProps<Props>()
</script>

<style scoped lang="scss">
.singleSelect {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
}

.selectedItem {
  height: 122px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 16px;
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
