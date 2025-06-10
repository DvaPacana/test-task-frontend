<template>
  <div class="h-full w-full max-h-full min-h-screen flex flex-col">
    <Loader v-if="isLoading" />
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import Loader from './Loader.vue'

const { isLoading } = defineProps<{
  isLoading: boolean
}>()
</script>
