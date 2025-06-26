<script setup lang="ts">
import UserProducts from '@/components/products/user-products/UserProducts.vue'
import ChoiceProducts from '@/components/products/choice-products/ChoiceProducts.vue'
</script>

<template>
  <div class="h-dvh p-5">
    <section class="mx-auto flex h-full max-w-1/2 justify-between gap-10 border-t-2 border-l-2 p-5">
      <UserProducts />
      <ChoiceProducts />
    </section>
  </div>
</template>
