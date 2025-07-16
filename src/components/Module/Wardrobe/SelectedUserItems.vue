<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/UI/Card';
  import { ScrollArea } from '@/components/UI/ScrollArea';
  import type { TItem } from '@/types';

  defineProps<{
    selectedUserItems: TItem[];
    selectionInfo: string;
  }>();
</script>

<template>
  <div class="border-2 border-gray-300 rounded-xl p-4 bg-white shadow-md">
    <div class="pb-2">
      <h3 class="text-lg font-bold text-green-800">
        Выбранные вещи пользователя
      </h3>
      <div class="text-right text-sm font-medium text-green-600">
        {{ selectionInfo }}
      </div>
    </div>

    <div class="h-64 bg-gray-50 rounded-lg border border-gray-200">
      <ScrollArea class="h-full">
        <div class="p-2">
          <TransitionGroup
            tag="div"
            name="items-fade"
            class="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            <div
              v-for="item in selectedUserItems"
              :key="item.id"
              class="transition-all duration-300"
            >
              <Card
                class="h-full overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-green-500 hover:shadow-lg"
              >
                <CardHeader class="p-2 pb-0">
                  <CardTitle class="text-xs text-center truncate">
                    {{ item.name }}
                  </CardTitle>
                </CardHeader>
                <CardContent
                  class="p-2 pt-0 flex flex-col items-center justify-center"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-24 object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </TransitionGroup>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<style scoped>
  .items-fade-move,
  .items-fade-enter-active,
  .items-fade-leave-active {
    transition: all 0.5s ease;
  }

  .items-fade-enter-from,
  .items-fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .items-fade-leave-active {
    position: absolute;
  }
</style>
