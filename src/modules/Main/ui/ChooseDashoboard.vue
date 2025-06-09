<template>
  <div class="border-4 border-black rounded-xl p-6 w-full mx-auto">
    <div class="flex gap-6 mb-8">
      <div class="text-xl font-semibold text-center">
        selected:
        <span v-if="data.length === 0"> N / M </span>
        <div
          v-else
          v-for="item in data"
          :key="item.id"
          class="w-28 h-20 flex items-center justify-center bg-white border-4 border-black rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl animate-fade-in"
        >
          <span class="text-lg font-medium">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../api/types'

const { data } = defineProps<{
  data: Item[]
}>()
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fade-in 0.5s ease;
}
</style>
