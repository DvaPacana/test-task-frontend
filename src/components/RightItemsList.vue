<template>
  <div class="flex-1 border-2 border-gray-800 p-3 flex flex-col">
    <h2 class="text-lg font-medium mb-2">Вещи на выбор:</h2>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="item in availableRightItems"
        :key="item.id"
        @click="selectRight(item)"
        :class="[
          'cursor-pointer select-none border rounded px-3 py-2',
          isRightSelected(item)
            ? 'bg-green-200 border-green-400'
            : 'bg-white border-gray-400 hover:bg-gray-100'
        ]"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useItemsStore, Item } from '../stores/itemsStore'

const itemsStore = useItemsStore()
const availableRightItems = computed(() => itemsStore.availableRightItems)
const isRightSelected = (item: Item) => itemsStore.isRightSelected(item)
const selectRight = (item: Item) => {
  itemsStore.selectRightItem(item)
}
</script>
