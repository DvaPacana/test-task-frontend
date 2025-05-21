<template>
  <div
    :tabindex="0"
    :class="containerClasses"
    @click="handleClick"
    @keyup.enter="handleClick"
    @keyup.space="handleClick"
  >
    <span :class="textClasses">
      {{ item.name }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

// emits
const emit = defineEmits(['click'])

// computed
const containerClasses = computed(() => [
  'flex items-center justify-center rounded-lg border-2 p-4 focus:scale-[1.02] focus:outline-none',
  'hover:scale-[1.02] transform origin-center cursor-pointer transition-transform duration-200 ease-out',
  props.isSelected
    ? 'border-indigo-500 bg-indigo-100 shadow-lg shadow-indigo-200/40'
    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50 focus:border-indigo-300 focus:bg-gray-50',
])

const textClasses = computed(() => [
  'font-medium',
  props.isSelected ? 'text-indigo-700' : 'text-gray-700',
])

// methods
const handleClick = () => {
  emit('click', props.item)
}
</script>
