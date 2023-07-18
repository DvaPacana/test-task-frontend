<template>
  <div class="items-list card padding">
    <div class="items-list-wrapper" data-cy="items-list-wrapper">
      <Item
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        @click="$emit('selected', index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ItemInterface } from '~/interfaces/item.interface'

/// ///
// Props
defineProps<{
  items: ItemInterface[]
}>()

/// ///
// Emits
defineEmits(['selected'])

/// ///
// Components
const Item = defineAsyncComponent(() => import('@components/ItemComponent.vue'))
</script>

<style lang="scss" scoped>
.items-list {
  height: 100%;
  margin-top: $margin;

  &-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
