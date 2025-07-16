<script setup lang="ts">
  import { Button } from '@/components/UI/Button';

  defineEmits<{
    (e: 'reset'): void;
  }>();
</script>

<template>
  <div class="mt-8 flex justify-center">
    <Button
      @click="$emit('reset')"
      variant="destructive"
      class="px-8 py-2 text-base font-bold transition-all hover:scale-105 hover:shadow-lg"
    >
      Сбросить выбор
    </Button>
  </div>
</template>
