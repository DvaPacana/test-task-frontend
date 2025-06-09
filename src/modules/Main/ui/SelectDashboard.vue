<template>
  <div class="border-4 border-black rounded-xl p-6">
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="item in data"
        :key="item.id"
        class="w-28 h-20 flex items-center justify-center bg-white border-4 border-black rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl animate-fade-in cursor-pointer"
        @click="onHandleSelect(item)"
      >
        <span class="text-lg font-medium">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../api/types'

const $emit = defineEmits<{
  (e: 'select', item: Item): void
}>()

const onHandleSelect = (item: Item) => {
  $emit('select', item)
}

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
