<template>
  <div id="app">
    <div class="left">
      <selected-items></selected-items>
    </div>
    
    <div class="right">
      <selected-item></selected-item>
    </div>
  </div>
</template>

<script>
import SelectedItem from '@/components/SelectedItem'
import SelectedItems from '@/components/SelectedItems'

export default {
  name: 'App',
  components: {
    SelectedItem,
    SelectedItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

</style>
