<script setup lang="ts">
import type { VNodeChild } from 'vue'

defineProps<{
  title: string
  counter?: string
}>()

defineSlots<{
  default: () => VNodeChild
  actions?: () => VNodeChild
}>()
</script>

<template>
  <section class="panel">
    <header class="panel__header">
      <div class="panel__title">{{ title }}</div>
      <div v-if="counter" class="panel__counter">{{ counter }}</div>
    </header>

    <slot />

    <div v-if="$slots.actions" class="panel__actions">
      <slot name="actions" />
    </div>
  </section>
</template>

<style scoped>
.panel {
  border: 3px solid #222;
  border-radius: 4px;
  background: #fff;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 200px;
}

.panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.panel__title {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.panel__counter {
  font-size: 13px;
  color: #555;
}

.panel__actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}
</style>
