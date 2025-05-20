<template>
  <div
    class="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg cursor-pointer"
    @click="emit('selectItem', item)"
  >
    <h3 class="text-lg font-bold">{{ item.name }}</h3>
  </div>
</template>

<script setup lang="ts" generic="T extends ListItem">
const props = defineProps<{
  item: T[];
}>();

const emit = defineEmits<{
  (e: "selectItem", item: T): void;
}>();
</script>
