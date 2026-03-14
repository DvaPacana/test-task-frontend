<script lang="ts" setup>
import type { Item } from "../stores/items";

type Props = {
  title: string;
  items: Item[];
  selectedIds: number[] | null;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "itemClick", item: Item): void;
}>();

const handleClick = (item: Item) => {
  emit("itemClick", item);
};
</script>

<template>
  <section class="column">
    <h2 class="column__title">{{ props.title }}</h2>
    <ul class="column__list">
      <li
        v-for="item in props.items"
        :key="item.id"
        class="column__item"
        :class="{ 'column__item--active': props.selectedIds?.includes(item.id) }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.column__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.column__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.column__item {
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    transform 0.05s ease;
  font-size: 14px;
}

.column__item:hover {
  background-color: #eef2ff;
  border-color: #6366f1;
}

.column__item--active {
  background-color: #4f46e5;
  border-color: #4338ca;
  color: #f9fafb;
}
</style>

