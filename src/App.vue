<template>
  <div class="h-[100dvh] p-4 min-h-full flex flex-col">
    <main class="h-full grid grid-rows-[2fr_6fr] gap-4">
      <div class="grid grid-cols-[1fr_300px] gap-8">
        <div class="flex flex-wrap gap-4 p-4">
          <TransitionGroup
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
          >
            <div v-for="item of selectLeft" :key="item.id" class="h-30 w-30" @click="onUnselectLeft(item)">
              <CardItem>
                {{ item.name }}
              </CardItem>
            </div>
          </TransitionGroup>
        </div>

        <div class="p-4">
          <CardItem>
            {{ selectRight.name }}
          </CardItem>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="grid grid-cols-[repeat(auto-fill,_minmax(110px,_1fr))] gap-4 p-4">
            <div v-for="item of left" :key="item.id" class="h-30 w-30">
              <CardItem :isSelect="isSelect(item, selectLeft)" @click="onSelectLeft(item)">
                {{ item.name }}
              </CardItem>
            </div>
          </div>

          <div class="grid grid-cols-[repeat(auto-fill,_minmax(110px,_1fr))] gap-4 p-4">
            <div v-for="item of right" :key="item.id" class="h-30 w-30">
              <CardItem :isSelect="isSelect(item, [selectRight])" @click="onSelectRight(item)">
                {{ item.name }}
              </CardItem>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import type { TypeItem } from '@/types.ts';

import { ref } from 'vue';

import { left, right } from '@/temp/data.ts';

import CardItem from '@/components/cards/CardItem.vue';

const selectRight: Ref<TypeItem> = ref(right[0]);
const selectLeft: Ref<TypeItem[]> = ref([]);

const isSelect = ({ id }: TypeItem, items: TypeItem[]) => items.find((i) => i.id === id);

const onSelectRight = (item: TypeItem) => (selectRight.value = item);

const onSelectLeft = (item: TypeItem) => {
  if (selectLeft.value.length >= 6) return;
  selectLeft.value.push(item);
};

const onUnselectLeft = (item: TypeItem) => (selectLeft.value = selectLeft.value.filter((i) => i.id !== item.id));
</script>
