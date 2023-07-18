<script lang="ts" setup>
import { PanelLayout } from '@/shared'
import { ItemsForChoose, SelectedItemSorChoose } from '@/widgets'
</script>

<template>
  <PanelLayout>
    <template #top>
      <SelectedItemSorChoose />
    </template>
    <template #bottom>
      <Suspense :timeout="0">
        <ItemsForChoose />
        <template #fallback> Loading... </template>
      </Suspense>
    </template>
  </PanelLayout>
</template>

<style lang="scss"></style>
