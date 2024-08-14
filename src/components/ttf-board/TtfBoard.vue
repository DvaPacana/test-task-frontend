<script setup lang="ts">
import TtfCard from '@/components/ttf-card/TtfCard.vue';
import TtfCart from '@/components/ttf-cart/TtfCart.vue';
import { useBoardStore } from '@/store/boardStore.ts';
import { storeToRefs } from 'pinia';
import type { TCartItem } from '@/components/ttf-cart/ttf-cart.types.ts';
import { computed } from 'vue';

const store = useBoardStore();
const {selectedCount, leftCart, selectedRightIndex} = storeToRefs(store);

const sortedLeftCart = computed(() => leftCart.value.sort((a: any, b: any) => a.id - b.id))
const selectedRightItem = computed(() => selectedRightIndex.value !== undefined ? [store.cols.right[selectedRightIndex.value]] : [])

function handlerLeftItem(item: TCartItem) {
  store.selectLeftCartItem(item.id)
}

function handlerRightItem(index: number) {
  store.selectRightCartItem(index)
}
</script>

<template>
  <div class="my-10 p-5 flex flex-col border-2 border-white/80 rd-md gap-5">
    <div class="font-black text-4xl">TTF Board</div>

    <div class="flex flex-wrap justify-between gap-5">
      <ttf-cart :data="sortedLeftCart"
                :selected-count="selectedCount"
                :total="store.cols.left.length"
                class="w-full max-w-md"
      />
      <ttf-cart :data="selectedRightItem"
                class="w-full max-w-md"
      />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <ttf-card class="flex flex-wrap gap-3">
        <ttf-card v-for="(i, index) in store.cols.left"
                  :key="index"
                  class="cursor-pointer hover:(bg-green/20) transition-colors active:(bg-red)"
                  :class="{ 'bg-yellow text-dark': leftCart.includes(i) }"
                  @click="handlerLeftItem(i)"
        >
          {{ i.name }}
        </ttf-card>
      </ttf-card>

      <ttf-card class="flex flex-wrap gap-3">
        <ttf-card v-for="(i, index) in store.cols.right"
                  :key="index"
                  class="cursor-pointer hover:(bg-amber/20) transition-colors active:(bg-red)"
                  :class="{ 'bg-yellow text-dark': selectedRightIndex === index }"
                  @click="handlerRightItem(index)"
        >
          {{ i.name }}
        </ttf-card>
      </ttf-card>
    </div>
  </div>
</template>

<style scoped>

</style>