<script setup lang="ts">
import { Skin } from '@/types'
import useExchangeItems from '@/store/exchangeItems'

type Props = Skin.Item & { size?: Skin.Size; isSingleSelected?: boolean; hasVisibleSelected?: boolean }

const props = withDefaults(defineProps<Props>(), {
  size: Skin.Size.LARGE,
  isSingleSelected: false,
  hasVisibleSelected: true
})

const { checkIsSelectedRightItem, checkIsSelectedLeftItems } = useExchangeItems()

interface Emits {
  (event: 'select'): void
  (event: 'deselect'): void
}

const sizeClasses: Record<Skin.Size, string> = {
  [Skin.Size.LARGE]: 'w-[175px] h-[175px]',
  [Skin.Size.SMALL]: 'w-[100px] h-[100px]'
} as const

const isSelectedItem = computed<boolean>(() => {
  if (props.isSingleSelected) {
    return checkIsSelectedRightItem(props.id)
  }
  return checkIsSelectedLeftItems(props.id)
})

const computedSizeClasses = computed<(string | { [key: string]: boolean })[]>(() => [
  sizeClasses[props.size],
  { 'shadow-md shadow-red-700': props.hasVisibleSelected && isSelectedItem.value }
])

const emit = defineEmits<Emits>()

const computedSkinID = computed<string>(() => `ID: ${props.id} `)
const computedSkinName = computed<string>(() => `Name: ${props.name} `)

const handleSelectItem = (): void => {
  if (isSelectedItem.value) {
    emit('deselect')
  } else {
    emit('select')
  }
}
</script>

<template>
  <div
    :class="computedSizeClasses"
    class="border border-solid border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer"
    @click="handleSelectItem"
  >
    <div v-text="computedSkinID" />
    <div v-text="computedSkinName" />
  </div>
</template>
