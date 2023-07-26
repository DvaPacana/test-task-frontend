<template>
  <div id="app">
    <TestPage />
  </div>
</template>

<script>
import TestPage from './components/TestPage.vue'

export default {
  name: 'App',
  components: {
    TestPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
