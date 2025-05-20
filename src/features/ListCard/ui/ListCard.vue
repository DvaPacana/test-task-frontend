<template>
  <div class="border border-gray-700 p-4 rounded-lg">
    <h3 class="text-lg font-bold mb-3">{{ title }}</h3>

    <TransitionGroup
      name="list"
      tag="div"
      :class="clsx(`grid gap-4`)"
      :style="{ gridTemplateColumns: `repeat(${props.cols || 2}, 1fr)` }"
    >
      <ItemList
        v-for="item in list"
        :key="`${uniqueId}-${item.id}`"
        :item="item"
        @selectItem="(item) => emit('selectItem', item)"
      />
    </TransitionGroup>

    <div class="mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { List } from "@shared/types/listItem";
import ItemList from "@shared/ui/ItemList/ItemList.vue";
import clsx from "clsx";

const props = defineProps<{
  list: List;
  uniqueId: string;
  title: string;
  cols?: number;
}>();

const emit = defineEmits<{
  (e: "selectItem", item: ListItem): void;
}>();
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.list-leave-active {
  position: absolute;
}
</style>
