<template>
  <div class="rounded p-4 bg-gray-100 dark:bg-gray-800 w-full h-full" :class="getClass" @click="onClick">
    <slot>{{ name }}</slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id: number;
  name: string;
  isSelect: boolean;
}

const { id = 0, name = '', isSelect = false } = defineProps<Props>();

const emit = defineEmits<{
  (e: 'click', value: Event): void;
}>();

const getClass = computed(() => [isSelect ? 'opacity-40 cursor-default' : 'cursor-pointer']);

const onClick = (e: Event) => {
  if (isSelect) return;
  emit('click', e);
};
</script>
