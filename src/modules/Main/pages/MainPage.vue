<template>
  <div>MainPage</div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getStore } from '@/modules/Main/api/store'

const { data, isLoading } = useQuery({
  queryKey: ['store'],
  queryFn: getStore,
})
</script>

<style scoped></style>
