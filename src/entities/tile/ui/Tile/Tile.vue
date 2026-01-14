<script setup lang="ts">
import { type TileScheme } from '../../model/tile.types.ts'

const props = defineProps<{
  scheme: TileScheme
}>()

const emit = defineEmits<{
  click: [id: number]
}>()

const handleOnClick = () => {
  emit('click', props.scheme.id)
}
</script>

<template>
  <div :class="['tile', scheme.isSelected && 'tile--selected']" @click="handleOnClick">
    <span class="tile__name">{{ scheme.name }}</span>
  </div>
</template>

<style scoped>
@import 'Tile.style.css';
</style>
