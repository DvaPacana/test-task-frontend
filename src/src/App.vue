<template>
  <div id="app">
    <the-page />
  </div>
</template>

<script>
import ThePage from "@/views/ThePage.vue";
export default {
  name: "App",
  components: {
    ThePage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
