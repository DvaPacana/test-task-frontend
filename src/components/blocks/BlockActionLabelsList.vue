<template>
  <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    <UiActionLabel
      v-for="item in items"
      :key="item.id"
      :item="item"
      :is-selected="isItemSelected(item)"
      @click="emitSelection(item)"
    />
  </ul>
</template>

<script setup>
import UiActionLabel from '@/components/ui/UiActionLabel.vue'

defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => 'id' in item && 'name' in item),
  },
  isItemSelected: {
    type: Function,
    default: () => false,
  },
})

// emits
const emit = defineEmits(['item-selected'])

// methods
const emitSelection = (item) => {
  emit('item-selected', item)
}
</script>
