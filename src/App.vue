<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import defaultLayout from "./layouts/default.vue";

const layout = computed(() => {
  return defaultLayout;
});
</script>
