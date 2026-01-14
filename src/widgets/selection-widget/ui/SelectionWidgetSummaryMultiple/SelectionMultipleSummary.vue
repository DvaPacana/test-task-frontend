<script setup lang="ts">
import { type MultipleSelectedModel } from '@/features/selection'

defineProps<{
  items: MultipleSelectedModel
  totalCount: number
}>()
</script>

<template>
  <div class="summary">
    <div class="summary__main">
      <template v-if="items.length">
        <span class="summary__tile" v-for="(name, index) in items" :key="`item-${index}`">{{
          name
        }}</span>
      </template>
      <span v-else class="summary_note">No items selected</span>
    </div>
    <footer class="summary__footer">Selected: {{ items.length }} / {{ totalCount }}</footer>
  </div>
</template>

<style scoped>
@import 'SelectionMultipleSummary.style.css';
</style>
