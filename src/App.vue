<script setup lang="ts">
import MainPage from './components/MainPage.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-content class="content">
      <div class="container">
        <MainPage />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  background: #f5f5f5;
}

.content {
  width: 100%;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
</style>
