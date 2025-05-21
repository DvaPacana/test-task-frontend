<template>
  <div
    class="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-6"
  >
    <span class="text-gray-400">
      {{ text }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
