<script setup>
import ShopCollection from "./ShopCollection.vue";
import UserCollection from "./UserCollection.vue";
</script>

<template>
  <UserCollection />
  <ShopCollection />
</template>

<style scoped>
:deep(.not-selected),
:deep(.selected) {
  list-style: none;
  border: var(--border);
  padding: 10px 10px 20px 10px;

  :deep(& li) {
    display: inline-block;
    margin: 0 10px 10px 0;
    text-align: center;
    width: 50px;
    height: 50px;
    border: var(--border);
    cursor: pointer;
  }
}
:deep(.not-selected) {
  min-height: 400px;
  :deep(& li) {
    width: 100px;
    height: 100px;
  }
}
:global(.inner-container) {
  width: 40%;
}
</style>
