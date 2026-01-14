<script setup lang="ts">
import { type SingleSelectedModel } from '@/features/selection'

defineProps<{
  name: SingleSelectedModel
}>()
</script>

<template>
  <div class="summary">
    <div class="summary__title">
      <template v-if="name !== null">{{ name }}</template>
      <template v-else>No items selected</template>
    </div>
  </div>
</template>

<style scoped>
@import 'SelectionSingleSummary.style.css';
</style>
