<script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <button
    class="w-full p-4 rounded bg-slate-200 text-center transition-colors hover:enabled:bg-slate-300 disabled:opacity-50"
    type="button">
    <div class="text-3xl">
      {{ icon }}
    </div>
    <div class="text-sm">
      {{ label }}
    </div>
  </button>
</template>
