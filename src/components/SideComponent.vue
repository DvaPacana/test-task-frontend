<template>
  <div id="items" class="padding" :class="{ right: !multiple }">
    <SelectedItem
      :selected="selectedComputed"
      :max="max"
      :data-cy="`selected-${multiple ? 'multiple' : ''}`"
    />
    <ItemsList :items="itemsList" @selected="handleSelected" />
  </div>
</template>

<script lang="ts" setup>
import type { ItemInterface } from '~/interfaces/item.interface'

/// ///
// Props
const props = defineProps<{
  fetchUrl?: string
  multiple?: boolean
  max?: number
}>()

/// ///
// Components
const SelectedItem = defineAsyncComponent(
  () => import('@components/SelectedComponent.vue')
)
const ItemsList = defineAsyncComponent(
  () => import('@components/ItemsListComponent.vue')
)

/// ///
// Variables
const selected = props.multiple
  ? ref<Set<number>>(new Set([]))
  : ref<number | undefined>()

const items = ref<ItemInterface[]>([])

const itemsList = computed(() => {
  return items.value.map((item, index) => {
    return {
      ...item,
      selected:
        props.multiple && selected.value instanceof Set
          ? selected.value.has(index)
          : index === selected.value
    }
  })
})

const selectedComputed = computed(() => {
  if (selected.value instanceof Set) {
    return Array.from(selected.value).map((i) => items.value[i])
  } else {
    return selected.value !== undefined
      ? items.value[selected.value]
      : undefined
  }
})

/// ///
// Methods
function handleSelected(index: number) {
  if (!props.multiple) {
    selected.value = selected.value !== index ? index : undefined
  } else {
    if (selected.value instanceof Set) {
      if (selected.value?.has(index)) {
        selected.value?.delete(index)
      } else {
        if (props.max && selected.value?.size >= props.max) {
          const firstElement = selected.value?.values().next().value
          selected.value?.delete(firstElement)
        }
        selected.value?.add(index)
      }
    }
  }
}

if (props.fetchUrl) {
  fetchItems(props.fetchUrl, items)
}
</script>

<style lang="scss" scoped>
#items {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.right {
  align-items: end;
}
</style>
