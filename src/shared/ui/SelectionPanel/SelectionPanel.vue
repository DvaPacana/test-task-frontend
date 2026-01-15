<script setup>
import { computed } from 'vue'
import Panel from '../Panel/Panel.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  meta: {
    type: String,
    default: '',
  },
})

const hasMeta = computed(() => Boolean(props.meta))
</script>

<template>
  <Panel :title="title">
    <template v-if="hasMeta" #meta>{{ meta }}</template>
    <slot />
  </Panel>
</template>
