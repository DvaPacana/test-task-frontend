<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <div :class="`panel panel--${variant}`">
    <slot />
  </div>
</template>

<style scoped>
@import 'Panel.style.css';
</style>
