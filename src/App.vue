<template>
  <MultipleSelector v-model="multipleSelected" :list="firstData" :max="6" />
  <SingleSelector v-model="singleSelected" :list="secondData" />
</template>

<script setup lang="ts">
import MultipleSelector from '@/components/MultipleSelector.vue'
import SingleSelector from '@/components/SingleSelector.vue'
import mockData from '@/mock/index.json'
import type { IClothItem } from '@/types'
import { ref } from 'vue'

const { firstData, secondData } = mockData

const multipleSelected = ref<IClothItem[]>([])
const singleSelected = ref<IClothItem | null>(null)
</script>

<style scoped></style>
