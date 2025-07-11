<script setup lang="ts">
import UserInventory from '@/components/UserInventory.vue'
import { leftItems } from '@/components/mocks/leftItems.ts'
import { rightItems } from '@/components/mocks/rightItems.ts'
</script>

<template>
  <div class="container">
    <user-inventory :items="leftItems" :max-selected-count="6" />
    <user-inventory :items="rightItems" />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 1023px) {
  .container {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
}
</style>
