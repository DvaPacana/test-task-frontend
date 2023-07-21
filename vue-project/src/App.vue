<script setup>
import Bucket from "./components/Bucket.vue";
</script>

<template>
  <div class="container">
    <Bucket />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  border: var(--border);
  padding: 10px;
}
</style>
