<script setup lang="ts">
import { provide, watch } from 'vue'
import { useSelectionSingle } from '../model/useSelectionSingle.ts'
import type { TileScheme } from '@/entities/tile'
import {
  PanelSource,
  PROVIDE_SELECTION_STATE,
  type SelectionState,
  type SingleSelectedModel,
} from '@/features/selection/selection-shared'

const props = defineProps<{
  items: TileScheme[]
}>()

const selected = defineModel<SingleSelectedModel>({ required: true })

const state = useSelectionSingle(props.items)
const { selectedItems } = state
provide<SelectionState>(PROVIDE_SELECTION_STATE, {
  ...state,
})

watch(
  selectedItems,
  (list) => {
    selected.value = list.length > 0 ? (list[0]?.name ?? '') : null
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
