<template>
  <div class="selected-item-container card padding">
    <div v-if="!Array.isArray(selected)" class="selected-item">
      {{ selected?.name || 'Please select item' }}
    </div>
    <div v-else class="selected-items">
      <template v-if="selected.length">
        <Item v-for="item in selected" :key="item.id" :item="item" />
      </template>
      <template v-else> Please select items(max: {{ max }})</template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ItemInterface } from '~/interfaces/item.interface'

/// ///
// Components
const Item = defineAsyncComponent(() => import('@components/ItemComponent.vue'))

/// ///
// Props
defineProps<{
  selected?: ItemInterface | ItemInterface[]
  max?: number
}>()
</script>

<style lang="scss" scoped>
.selected-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
}
.selected-items {
  display: flex;
  flex-wrap: wrap;
}
</style>
