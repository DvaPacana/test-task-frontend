<template>
  <div class="list">
    <div class="list__selected-items">
      <div
        class="list__selected-item"
        v-for="item in selectedItems"
        :key="item.id"
      >
        {{ item.name }}
      </div>
      <div class="list__header">
        <span class="list__title">{{ title }}</span>
        <span v-if="showCounter" class="list__counter">
          {{ selectedItems.length }} / {{ maxSelection || "∞" }}
        </span>
      </div>
    </div>
    <div class="list__items">
      <div
        class="list__item"
        v-for="item in items"
        :key="item.id"
        :class="{ 'list__item--selected': isSelected(item) }"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

interface Item {
  id: number;
  name: string;
}

const props = defineProps<{
  items: Item[];
  selectedItems: Item[] | Item | null;
  maxSelection?: number;
  singleSelection?: boolean;
  title: string;
  showCounter?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:selectedItems", value: Item[] | Item | null): void;
}>();

const selectedItems = computed(() => {
  if (Array.isArray(props.selectedItems)) {
    return props.selectedItems;
  } else if (props.selectedItems) {
    return [props.selectedItems];
  }
  return [];
});

const isSelected = (item: Item) => {
  if (Array.isArray(props.selectedItems)) {
    return props.selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );
  } else if (props.selectedItems) {
    return props.selectedItems.id === item.id;
  }
  return false;
};

const handleSelect = (item: Item) => {
  if (props.singleSelection) {
    emits("update:selectedItems", item);
  } else {
    let selectedArray = Array.isArray(props.selectedItems)
      ? [...props.selectedItems]
      : [];
    const index = selectedArray.findIndex(
      (selectedItem) => selectedItem.id === item.id
    );

    if (index !== -1) {
      selectedArray.splice(index, 1);
    } else if (
      !props.maxSelection ||
      selectedArray.length < props.maxSelection
    ) {
      selectedArray.push(item);
    }
    emits("update:selectedItems", selectedArray);
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
}

.list__header {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-weight: bold;
  gap: 4px;
}

.list__title {
  font-size: 16px;
}

.list__counter {
  font-size: 14px;
  color: #555;
}

.list__selected-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border: 1px solid #fff;
  padding: 8px;
  height: 100%;
}

.list__selected-item {
  padding: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  color: #000;
}

.list__items {
  display: flex;
  gap: 8px;
  padding: 8px;
  flex-wrap: wrap;
  border: 1px solid #fff;
  height: 100%;
}

.list__item {
  padding: 8px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.list__item:hover {
  background-color: #f0f0f0;
}

.list__item--selected {
  background-color: #d0d0f0;
  font-weight: bold;
  color: #000;
}
</style>
