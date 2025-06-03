<template>
  <div class="flex-1 border-2 border-gray-800 p-3 flex flex-col gap-2">
    <h2 class="text-lg font-medium">Выбранные (слева):</h2>
    <div v-if="leftCount === 0" class="text-gray-500 italic">
      ничего не выбрано
    </div>
    <ul v-else class="flex flex-wrap gap-2">
      <li
        v-for="item in selectedLeftItems"
        :key="item.id"
        class="border border-gray-600 bg-gray-200 px-3 py-1 rounded"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="mt-auto text-sm text-gray-600">
      selected: {{ leftCount }} / 6
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useItemsStore } from '../stores/itemsStore'

const itemsStore = useItemsStore()
const selectedLeftItems = computed(() => itemsStore.selectedLeftItems)
const leftCount = computed(() => itemsStore.leftCount)
</script>
