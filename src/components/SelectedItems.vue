<script lang="ts" setup>
import { type Item } from '@/types/Item'
import UserItem from '@/components/UserItem.vue'
import { MAX_SELECT } from '@/constants/common'

type ModelItems = Item[] | undefined
const model = defineModel<ModelItems>()
</script>

<template>
  <div v-if="Array.isArray(model) && model.length == 0">No items selected</div>
  <div v-else>
    <div class="flex flex-row flex-wrap">
      <div v-for="item of model" :key="item.id" class="pr-3 pb-3">
        <UserItem :value="item" />
      </div>
    </div>
  </div>

  <div class="pt-4">Selected: {{ Array.isArray(model) && model.length }} / {{ MAX_SELECT }}</div>
</template>
