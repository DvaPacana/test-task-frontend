<template>
  <div class="item-grid">
    <div
        v-for="item in items"
        :key="item.id"
        class="item"
        :class="{ selected: isSelected(item) }"
        @click="handleClick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {type: Array, required: true},
  multiple: {type: Boolean, default: true},
  maxSelected: {type: Number, default: Infinity},
});

const selectedItems = defineModel({type: Array, required: true});

function isSelected(item) {
  return selectedItems.value.some(selected => selected.id === item.id);
}

function handleClick(item) {
  const exists = isSelected(item);

  if (exists) {
    selectedItems.value = selectedItems.value.filter(selected => selected.id !== item.id);
  } else {
    if (!props.multiple) {
      selectedItems.value = [item];
    } else if (selectedItems.value.length < props.maxSelected) {
      selectedItems.value = [...selectedItems.value, item];
    }
  }
}
</script>

<style scoped>
.item-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.item {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 2px solid black;
  cursor: pointer;
}

.selected {
  background-color: lightblue;
}
</style>
