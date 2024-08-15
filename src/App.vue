<template>
  <div id="app" class="app">
    <div class="container">
      <PageHello />
    </div>
  </div>
</template>

<script>
import PageHello from "./components/PageHello.vue"

export default {
  name: 'App',
  components: { PageHello }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 90vh;
}

.container {
  max-width: 1024px; 
  width: 100%; 
  padding: 16px;
}
</style>
