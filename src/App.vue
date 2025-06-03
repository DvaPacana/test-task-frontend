<template>
  <div class="p-4 space-y-6 font-sans">
    <!-- Верхний ряд -->
    <div class="flex gap-4">
      <SelectedLeft />
      <SelectedRight />
    </div>

    <!-- Нижний ряд -->
    <div class="flex gap-4">
      <LeftItemsList />
      <RightItemsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectedLeft from './components/SelectedLeft.vue'
import SelectedRight from './components/SelectedRight.vue'
import LeftItemsList from './components/LeftItemsList.vue'
import RightItemsList from './components/RightItemsList.vue'
</script>
