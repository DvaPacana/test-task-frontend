<template>
  <div
      class="item"
      :class="{
        selected: isSelected,
        selectable: isSelectable && !isSelected,
      }"
      :style="{
        height: height,
        width: width,
      }"
      @click="onClick"
  >
    {{ data.name }}
  </div>
</template>
<script setup lang="ts">
export interface Item {
  id: number;
  name: string;
}

interface Props {
  data: Item;
  isSelected?: boolean;
  isSelectable?: boolean;
  height?: string;
  width?: string;
}
const {
  data,
  isSelected = false,
  isSelectable = false,
  height = '100%',
  width = '100%',
} = defineProps<Props>();
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1677ff;
  color: white;
  border: 1px solid black;
}

.item.selected {
  background: #0958d9;
}

.item.selectable {
  cursor: pointer;
}
</style>