<script setup lang="ts">
import type { IProduct } from '@/types/IProduct.ts'

defineProps<{ product: IProduct }>()
</script>

<template>
  <button class="flex h-17 w-17 items-center justify-center border-4 text-sm">
    {{ product.name }}
  </button>
</template>
