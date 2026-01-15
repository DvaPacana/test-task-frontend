<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  static: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select'])

const componentTag = computed(() => (props.static ? 'div' : 'button'))
const tileClass = computed(() => [
  `item-tile--${props.size}`,
  {
    'is-selected': props.selected,
    'is-disabled': props.disabled,
    'is-static': props.static,
  },
])
const buttonType = computed(() => (props.static ? undefined : 'button'))
const disabledAttr = computed(() => (props.static ? undefined : props.disabled))
const ariaPressed = computed(() => (props.static ? undefined : props.selected))
const ariaDisabled = computed(() => (props.static ? undefined : props.disabled))
const itemLabel = computed(() => props.item.name)
const isInteractive = computed(() => !props.disabled && !props.static)

const handleClick = () => {
  if (!isInteractive.value) {
    return
  }
  emit('select', props.item)
}
</script>

<template>
  <component
    :is="componentTag"
    class="item-tile"
    :class="tileClass"
    :type="buttonType"
    :disabled="disabledAttr"
    :aria-pressed="ariaPressed"
    :aria-disabled="ariaDisabled"
    @click="handleClick"
  >
    <span class="item-tile__label">{{ itemLabel }}</span>
  </component>
</template>
