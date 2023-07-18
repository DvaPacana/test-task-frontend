<script lang="ts" setup></script>

<template>
  <div class="panel_layout f fd-col g-4">
    <section class="panel_layout-section panel_layout-section-top p-2">
      <slot name="top" />
    </section>
    <section class="panel_layout-section panel_layout-section-bottom p-2">
      <slot name="bottom" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.panel_layout {
  flex-grow: 1;
  &-section {
    border: 1px solid var(--n-second-50);
    &-bottom {
      flex-grow: 1;
    }
  }
}
</style>
