<script lang="ts" setup>
import type { ItemType } from '@/entities'

const props = defineProps<{
  item: ItemType
}>()
</script>

<template>
  <li class="item_li p-3 fw-medium">
    {{ item.name }}
  </li>
</template>

<style lang="scss" scoped>
.item_li {
  border: 1px solid var(--n-second-100);
  color: var(--n-brand);
}
</style>
