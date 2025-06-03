<template>
  <div class="flex-1 border-2 border-gray-800 p-3 flex flex-col gap-2">
    <h2 class="text-lg font-medium">Выбранное (справа):</h2>
    <div v-if="!selectedRightItem" class="text-gray-500 italic">
      ничего не выбрано
    </div>
    <div
      v-else
      class="border border-gray-600 bg-gray-200 px-4 py-2 rounded text-center"
    >
      {{ selectedRightItem.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useItemsStore } from '../stores/itemsStore'

const itemsStore = useItemsStore()
const selectedRightItem = computed(() => itemsStore.selectedRightItem)
</script>
