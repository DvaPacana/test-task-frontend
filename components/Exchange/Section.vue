<script setup lang="ts">
const { data: serverItems, pending: isLoadingServerItems } = await useAsyncData(
  'server-items',
  async () => $fetch('/api/server-items').then((res) => res.data),
  {
    immediate: true
  }
)

const { data: inventoryItems, pending: isLoadingInventoryItems } = await useAsyncData(
  'inventory-items',
  async () => $fetch('/api/inventory-items').then((res) => res.data),
  {
    immediate: true
  }
)

const isLoadingItems = computed<boolean>(() => isLoadingInventoryItems.value || isLoadingInventoryItems.value)
</script>

<template>
  <div class="h-full p-6">
    <Board :is-loading="isLoadingItems" :server-items="serverItems" :inventory-items="inventoryItems" />
  </div>
</template>

<style scoped></style>
