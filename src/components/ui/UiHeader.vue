<template>
  <component :is="tag" :class="computedClasses">{{ title }}</component>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Houston, we have a problem [title props]',
  },
})

// computed
const computedClasses = computed(() => {
  switch (props.tag) {
    case 'h1':
      return 'text-center text-3xl font-bold text-gray-800'
    case 'h2':
      return 'mb-4 text-xl font-bold text-gray-800'
    default:
      return ''
  }
})
</script>
