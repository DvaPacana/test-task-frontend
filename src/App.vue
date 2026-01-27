<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
#app {
  min-width: 100%;
  min-height: 100%;
  background-color: #000000;
  content: '';
  padding: 0px;
  margin: 0px;
  display: block;
}

body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  display: block;
}
</style>
