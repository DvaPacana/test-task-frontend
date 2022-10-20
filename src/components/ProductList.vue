<script setup>
defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});

defineEmits(["select"]);
</script>

<template>
  <div class="flex flex-wrap gap-3 p-3">
    <div
      class="bg-teal-300 p-2 rounded cursor-pointer"
      v-for="item in items"
      :key="item.id"
      @click="$emit('select', item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped></style>
