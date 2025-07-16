<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/UI/Card';
  import type { TItem } from '@/types';

  defineProps<{
    selectedStoreItem: TItem | null;
  }>();
</script>

<template>
  <div class="border-2 border-gray-300 rounded-xl p-4 bg-white shadow-md">
    <div class="pb-2">
      <h3 class="text-lg font-bold text-blue-800">
        Выбранная вещь из магазина
      </h3>
    </div>

    <div
      class="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200"
    >
      <Transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="selectedStoreItem"
          key="selected"
          class="w-full h-full flex items-center justify-center p-4"
        >
          <Card
            class="border-2 border-blue-500 shadow-md transform hover:scale-105 transition-transform duration-300 max-w-xs w-full overflow-hidden"
          >
            <CardHeader class="p-4 pb-2">
              <CardTitle class="text-center text-blue-700">
                {{ selectedStoreItem.name }}
              </CardTitle>
            </CardHeader>
            <CardContent
              class="p-4 pt-0 flex flex-col items-center justify-center"
            >
              <img
                :src="selectedStoreItem.image"
                :alt="selectedStoreItem.name"
                class="w-full max-h-32 object-contain"
              />
            </CardContent>
          </Card>
        </div>
        <div
          v-else
          key="empty"
          class="text-2xl font-bold text-gray-400"
        >
          Выберите вещь из магазина
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
