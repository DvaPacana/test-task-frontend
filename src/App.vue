<template>
  <div id="app">
    <h1>Welcome to my tesk-task project</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <top-left-box></top-left-box>
        </div>
        <div class="col-6">
          <top-right-box></top-right-box>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <bottom-left-box></bottom-left-box>
        </div>
        <div class="col-6">
          <bottom-right-box></bottom-right-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopLeftBox from './components/TopLeftBox'
  import BottomLeftBox from './components/BottomLeftBox'
  import TopRightBox from "./components/TopRightBox";
  import BottomRightBox from './components/BottomRightBox'

export default {
  name: 'App',
  components: {
    TopLeftBox,
    BottomLeftBox,
    TopRightBox,
    BottomRightBox
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
}
.box {
  border: 2px solid black;
  padding: 20px;
  margin: 20px 0;
}
</style>
