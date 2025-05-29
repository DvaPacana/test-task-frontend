<script lang="ts" setup>
import { type Item } from '@/types/Item'
import UserItem from '@/components/UserItem.vue'
const model = defineModel<Item>()
</script>

<template>
  <div class="box-content size-32" v-if="model?.id">
    <UserItem :value="model" />
  </div>
  <div v-else>
    <div class="p-3">No item selected</div>
  </div>
</template>
