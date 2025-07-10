<template>
  <div class="App">
    <div class="App__container">
      <LeftPanel />
      <RightPanel />
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "@/components/widgets/LeftPanel.vue";
import RightPanel from "@/components/widgets/RightPanel.vue";

</script>

<style lang="scss">
.App {
  min-height: 100vh;
  display: flex;
  justify-content: center;

  &__container {
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
</style>
