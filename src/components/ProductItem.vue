<script setup lang="ts">
const { name } = defineProps<{ name: string }>()
</script>

<template>
  <article class="item">
    {{ name }}
  </article>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-size: 1rem;
  border: 5px solid;
  cursor: pointer;
}

.item:is(:hover, :focus) {
  border-color: lightseagreen;
}
</style>
