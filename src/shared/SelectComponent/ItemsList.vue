<script setup>
const props = defineProps({
  items: Array,
  selected: Array,
  mode: {
    type: String,
    default: 'single' // 'single' | 'multiple'
  },
  max: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['update:selected'])

function toggleItem(item) {
  if (props.mode === 'single') {
    emit('update:selected', [item])
    return
  }

  const exists = props.selected.find(i => i.id === item.id)

  if (exists) {
    emit(
        'update:selected',
        props.selected.filter(i => i.id !== item.id)
    )
    return
  }

  if (props.selected.length >= props.max) return

  emit('update:selected', [...props.selected, item])
}

function isDisabled(item) {
  if (props.mode === 'single') return false
  const exists = props.selected.find(i => i.id === item.id)
  return !exists && props.selected.length >= props.max
}
</script>

<template>
  <div class="box">
    <ul>
      <li
          v-for="item in items"
          :key="item.id"
          @click="toggleItem(item)"
          :class="{ disabled: isDisabled(item) }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
