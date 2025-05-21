<template>
  <div
    class="flex items-center justify-center rounded-lg border-2 border-indigo-100 bg-indigo-50 p-6"
  >
    <span class="font-medium text-indigo-700">{{ name }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    default: 0,
  },
})
</script>
