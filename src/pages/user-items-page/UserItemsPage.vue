<script lang="ts" setup>
import { PanelLayout } from '@/shared'
import { UserItems, UserSelectedItems } from '@/widgets'
</script>

<template>
  <PanelLayout>
    <template #top>
      <UserSelectedItems />
    </template>
    <template #bottom>
      <Suspense :timeout="0">
        <UserItems />
        <template #fallback> Loading... </template>
      </Suspense>
    </template>
  </PanelLayout>
</template>

<style lang="scss"></style>
