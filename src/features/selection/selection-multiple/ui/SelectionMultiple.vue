<script setup lang="ts">
import { provide, watch } from 'vue'
import type { TileScheme } from '@/entities/tile'
import { useSelectionMultiple } from '../model/useSelectionMultiple.ts'
import {
  PanelSource,
  PROVIDE_SELECTION_STATE,
  type SelectionState,
  type MultipleSelectedModel,
} from '@/features/selection/selection-shared'

const props = withDefaults(
  defineProps<{
    items: TileScheme[]
    maxSelectedCount?: number
  }>(),
  {
    maxSelectedCount: 6,
    theme: 'primary',
  },
)

const selected = defineModel<MultipleSelectedModel>({ required: true })

const state = useSelectionMultiple(props.items, props.maxSelectedCount)
const { selectedItems } = state
provide<SelectionState>(PROVIDE_SELECTION_STATE, {
  ...state,
})

watch(
  selectedItems,
  (list) => {
    selected.value = list.map((item: TileScheme) => item.name)
  },
  {
    deep: true,
  },
)
</script>

<template>
  <PanelSource />
</template>

<style scoped></style>
