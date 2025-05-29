<script lang="ts" setup>
import { type Item } from '@/types/Item'
import items from '@/constants/left.ts'
import UserItem from '@/components/UserItem.vue'

const emit = defineEmits<{
  (e: 'selected', value: Item): void
}>()

function onSelected(value: Item) {
  emit('selected', value)
}
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <div v-for="item of items" :key="item.id" class="p-3">
      <UserItem :value="item" @selected="onSelected" />
    </div>
  </div>
</template>
