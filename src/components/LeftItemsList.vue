<template>
  <div class="flex-1 border-2 border-gray-800 p-3 flex flex-col">
    <h2 class="text-lg font-medium mb-2">Все Ваши вещи:</h2>
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="item in availableLeftItems"
        :key="item.id"
        @click="toggleLeft(item)"
        :class="[
          'cursor-pointer select-none border rounded px-3 py-2',
          isLeftSelected(item)
            ? 'bg-blue-200 border-blue-400'
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
const availableLeftItems = computed(() => itemsStore.availableLeftItems)
const isLeftSelected = (item: Item) => itemsStore.isLeftSelected(item)
const toggleLeft = (item: Item) => {
  itemsStore.toggleLeftItem(item)
}
</script>
