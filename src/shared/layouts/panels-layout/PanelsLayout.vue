<script lang="ts" setup></script>

<template>
  <main class="panels_layout p-4 g-4">
    <aside class="panels_layout-panel">
      <RouterView name="left" />
    </aside>
    <aside class="panels_layout-panel">
      <RouterView name="right" />
    </aside>
  </main>
</template>

<style lang="scss" scoped>
.panels_layout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  &-panel {
    display: flex;
    flex-direction: column;
  }
}
</style>
