<script lang="ts" setup>
import { type Item } from '@/types/Item'

const { value } = defineProps(['value'])
const emit = defineEmits<{
  (e: 'selected', value: Item): void
}>()

function onClick(value: Item) {
  emit('selected', value)
}
</script>

<template>
  <div class="border">
    <div class="p-3" @click="onClick(value)">{{ value.name }}</div>
  </div>
</template>
