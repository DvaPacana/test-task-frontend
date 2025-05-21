<template>
  <header class="mb-8">
    <UiHeader tag="h1" :title="title" />
  </header>
</template>

<script setup>
import UiHeader from '@/components/ui/UiHeader.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
