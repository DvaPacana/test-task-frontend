<template>
  <div class="app-container">
    <LeftBlock />
    <RightBlock />
  </div>
</template>

<script setup>
import LeftBlock from './components/LeftBlock.vue';
import RightBlock from './components/RigthBlock.vue';
</script>

<style>

.app-container {
  gap: 2rem;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
