<template>
  <header class="header"></header>
  <main class="main">
    <section class="section"></section>
    <section class="section"></section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh - $header-height);

  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
}

.section {
  min-height: calc(100vh - $header-height);

  @media (min-width: 992px) {
    flex: 1;
  }
}

.header {
  position: sticky;
  top: 0;
  padding: $padding-container;
  display: flex;
  justify-content: space-between;

  height: $header-height;
  z-index: 1;
}
</style>
