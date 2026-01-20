<script lang="ts" setup>
import { store, type StoreItem } from '@/state'
import Item from './VItem.vue'

const props = defineProps<{
  items: StoreItem[]
  withCounter?: boolean
  forPreview?: boolean
  selectionTip?: string
}>()
</script>

<template>
  <div class="box">
    <div v-if="props.items.length" class="items-box">
      <Item
        v-for="item in props.items"
        :key="item.id"
        :data="item"
        :is-preview="props.forPreview"
      />
    </div>
    <div v-else>
      {{ props.selectionTip }}
    </div>
    <div v-if="props.withCounter && props.items.length" class="counter">
      Selected: {{ props.items.length }} / {{ store.leftSelectionLimit }}
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}
.items-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
