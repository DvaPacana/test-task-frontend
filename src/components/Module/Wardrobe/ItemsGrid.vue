<script setup lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/UI/Card';
  import { ScrollArea } from '@/components/UI/ScrollArea';
  import type { TItem } from '@/types';

  const props = defineProps<{
    items: TItem[];
    isSelected: (item: TItem) => boolean;
    title: string;
    color: 'green' | 'blue';
  }>();

  defineEmits<{
    (e: 'itemClick', item: TItem): void;
  }>();

  const borderColorClass =
    props.color === 'green'
      ? 'border-green-500 bg-green-50'
      : 'border-blue-500 bg-blue-50';

  const titleColorClass =
    props.color === 'green' ? 'text-green-800' : 'text-blue-800';
</script>

<template>
  <div class="border-2 border-gray-300 rounded-xl p-4 bg-white shadow-md">
    <div class="pb-2">
      <h3
        class="text-lg font-bold"
        :class="titleColorClass"
      >
        {{ title }}
      </h3>
    </div>

    <ScrollArea class="h-[350px]">
      <div class="p-2">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div
            v-for="item in items"
            :key="item.id"
            @click="$emit('itemClick', item)"
          >
            <Card
              :class="[
                'cursor-pointer transition-all duration-300 overflow-hidden',
                isSelected(item)
                  ? `border-2 ${borderColorClass}`
                  : 'border border-gray-200',
              ]"
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
                  class="w-full h-16 object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  </div>
</template>
