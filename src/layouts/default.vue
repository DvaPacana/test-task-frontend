<template>
  <div class="primary">
    <BaseHeader />
    <RouterView class="primary__content" />
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseHeader from "@/components/BaseHeader/index.vue";
import BaseFooter from "@/components/BaseFooter/index.vue";
</script>

<style lang="scss">
.primary {
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: $Roboto;
  &__content {
    flex-grow: 1;
  }
}
</style>
