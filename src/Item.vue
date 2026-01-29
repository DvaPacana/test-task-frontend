<script setup lang="ts">
const props = defineProps<{name: string; isSelected: boolean}>();
</script>

<template>
  <div class="item" :class="{item_selected: props.isSelected}">
    {{props.name}}
  </div>
</template>

<style scoped>
.item {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 2px solid black;
  border-color: black;
  text-align: center;
  cursor: pointer;
}

.item_selected {
  border-color: chartreuse;
}
</style>