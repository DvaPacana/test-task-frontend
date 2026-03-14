<script lang="ts" setup>
import { computed } from "vue";
import type { Item } from "../stores/items";

type Props = {
  title: string;
  items: Item[] | Item | null;
};

const props = defineProps<Props>();

const displayItems = computed<Item[]>(() => {
  if (!props.items) {
    return [];
  }

  if (Array.isArray(props.items)) {
    return props.items;
  }

  return [props.items];
});
</script>

<template>
  <section class="panel">
    <h2 class="panel__title">{{ props.title }}</h2>
    <div class="panel__content">
      <template v-if="displayItems.length">
        <span v-for="item in displayItems" :key="item.id" class="panel__chip">
          {{ item.name }}
        </span>
      </template>
      <p v-else class="panel__placeholder">Ничего не выбрано</p>
    </div>
  </section>
</template>

<style scoped>
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.panel__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.panel__content {
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.panel__chip {
  padding: 6px 10px;
  border-radius: 999px;
  background-color: #eef2ff;
  color: #3730a3;
  font-size: 13px;
}

.panel__placeholder {
  margin: 0;
  font-size: 13px;
  color: #9ca3af;
}
</style>

