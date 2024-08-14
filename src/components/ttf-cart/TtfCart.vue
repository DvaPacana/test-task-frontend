<script setup lang="ts">
import TtfCard from '@/components/ttf-card/TtfCard.vue';
import type { TCartItem } from '@/components/ttf-cart/ttf-cart.types.ts';

defineProps<{
  data: TCartItem[];
  total?: number;
  selectedCount?: number;
}>()
</script>

<template>
  <div class="flex">
    <ttf-card v-if="typeof selectedCount === 'number'">
      <div class="flex flex-wrap gap-3">
        <ttf-card v-for="(i, index) in data"
                  :key="index"
                  :class="{ 'w-full h-full text-align-center' : typeof selectedCount === 'undefined'}"
        >
          {{ i.name }}
        </ttf-card>

        <ttf-card v-if="data.length === 0">
          No selected item
        </ttf-card>

        <div v-if="selectedCount" class="w-full">
          <div class="text-align-center">
            Selected:
            {{ selectedCount }} /
            {{ total }}
          </div>
        </div>
      </div>
    </ttf-card>
    <ttf-card v-else
              class="w-full h-full flex justify-center items-center text-4xl bg-white/40"
    >
      {{ data[0]?.name }}
    </ttf-card>
  </div>
</template>

<style scoped>

</style>