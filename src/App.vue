<template>
  <div id="app">    
    <TestTask msg="Тестовое задание VueJS"/>
  </div>
</template>

<script setup>
  import TestTask from './components/TestTask.vue'
</script>

<style scoped>
  #app {
      height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      min-height: 600px;
      max-width: 2560px;
      min-width: 1366px;
      margin: 0 auto;
      background-color: #fff;
  }
</style>