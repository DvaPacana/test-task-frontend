<template>
  <div v-if="items.length" class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <UiLabel v-for="item in items" v-bind="item" :key="item.id" />
  </div>
  <UiMessage v-else-if="message" :text="message" />
</template>

<script setup>
import UiMessage from '../ui/UiMessage.vue'
import UiLabel from '../ui/UiLabel.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
})
</script>
