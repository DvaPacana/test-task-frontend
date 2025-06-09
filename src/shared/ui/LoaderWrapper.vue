<template>
  <div>
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
