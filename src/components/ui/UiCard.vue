<template>
  <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
    <UiHeader v-if="title" tag="h2" :title="title" />
    <slot />
  </div>
</template>

<script setup>
import UiHeader from '@/components/ui/UiHeader.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
