<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const slots = useSlots()
const hasMeta = computed(() => Boolean(slots.meta))
const showHeader = computed(() => Boolean(props.title) || hasMeta.value)
</script>

<template>
  <section class="panel">
    <header v-if="showHeader" class="panel__header">
      <h2 v-if="title" class="panel__title">{{ title }}</h2>
      <div v-if="hasMeta" class="panel__meta">
        <slot name="meta" />
      </div>
    </header>
    <div class="panel__content">
      <slot />
    </div>
  </section>
</template>
