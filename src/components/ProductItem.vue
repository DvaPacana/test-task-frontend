<script setup lang="ts">
interface Props {
  id: number
  name: string
  selected: boolean
}
defineProps<Props>()
</script>

<template>
  <div class="item" :class="{ selected }">
    {{ name }}
  </div>
</template>

<style scoped>
.item {
  width: fit-content;
  height: fit-content;

  border: 1px solid black;
  padding: 5px;
  cursor: pointer;

  transition: background-color 0.1s ease-in;
}

.selected {
  background-color: gray;
}
</style>
