<script setup lang="ts" generic="T">
interface Props {
  max: number
  selected: Set<T>
}

defineProps<Props>()
</script>
<template>
  <div class="counter">
    <div class="items">
      <div v-for="item in selected" :key="String(item)">
        <slot v-bind="{ item }"></slot>
      </div>
    </div>
    selected: {{ selected.size }} / {{ max }}
  </div>
</template>

<style scoped>
.counter {
  width: 600px;
  height: 400px;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
