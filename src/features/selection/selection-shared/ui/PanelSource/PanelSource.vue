<script setup lang="ts">
import { injectRequired } from '@/shared/lib'
import { PROVIDE_SELECTION_STATE } from '../../const/keys.ts'
import { Tile } from '@/entities/tile'

const { items, toggleItem } = injectRequired(PROVIDE_SELECTION_STATE)

const handleOnClick = (id: number) => {
  toggleItem(id)
}
</script>

<template>
  <div class="source">
    <Tile v-for="item in items" :scheme="item" :key="`item-${item.id}`" @click="handleOnClick" />
  </div>
</template>

<style scoped>
@import 'PanelSource.style.css';
</style>
