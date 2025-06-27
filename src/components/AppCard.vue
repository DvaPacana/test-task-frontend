<template>
  <div class="app-card">
    <slot />
  </div>
</template>

<style scoped>
.app-card {
  flex: 1;
  background: #fff;
  padding: var(--spacing-xl);
  min-height: 120px;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
}
</style>
