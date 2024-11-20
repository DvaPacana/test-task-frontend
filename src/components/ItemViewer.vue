<script lang="ts" setup>
import BaseItem from '@/components/BaseItem.vue'
import type { Item } from '@/types'

const items = defineModel<Item[]>()
const props = defineProps<{ limit?: number }>()
</script>
<template>
  <div class="item-viewer">
    <div class="item-viewer__empty" v-if="!items?.length"><p>No items selected</p></div>
    <div class="item-viewer__content">
      <BaseItem :selectable="false" v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div class="item-viewer__counter" v-if="items?.length && props.limit">
      {{ `${items?.length} / ${props.limit}` }}
    </div>
  </div>
</template>
<style scoped>
.item-viewer {
  border: 1px solid black;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.item-viewer__content {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-content: flex-start;
  flex: 1;
}
.item-viewer__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.item-viewer__counter {
  align-self: flex-end;
}
</style>
