<script setup lang="ts">
import useExchangeItems from '@/store/exchangeItems'
import { Skin } from '@/types'

const exchangeItemsStore = useExchangeItems()

const { selectedRightItem, selectedLeftItems, totalCountItems } = storeToRefs(exchangeItemsStore)

const computedSelectedText = computed<string>(
  () => `Selected: ${selectedLeftItems.value.length} / ${totalCountItems.value}`
)
</script>

<template>
  <div class="flex items-center justify-between w-full">
    <div class="w-[350px] h-[350px] border border-solid border-gray-950 p-3">
      <Transition name="fade" mode="out-in">
        <div
          v-if="selectedLeftItems.length"
          class="grid grid-cols-3 auto-rows-max items-center justify-between flex-1 h-[80%] gap-2"
        >
          <SkinCard
            class="w-full"
            v-for="skin in selectedLeftItems"
            v-bind="skin"
            :key="skin.id"
            :size="Skin.Size.SMALL"
            :has-visible-selected="false"
          />
        </div>
        <p v-else class="antialiased font-medium text-lg mt-auto flex-auto text-center w-full h-[80%]">
          Please, Select Items
        </p>
      </Transition>

      <div class="antialiased font-medium text-2xl mt-auto flex-auto text-center" v-text="computedSelectedText" />
    </div>
    <div class="w-[350px] h-[350px] border border-solid border-gray-950 p-3">
      <Transition name="fade" mode="out-in">
        <SkinCard
          v-if="selectedRightItem"
          v-bind="selectedRightItem"
          :key="selectedRightItem.id"
          :size="Skin.Size.SMALL"
          class="h-full w-full"
          :has-visible-selected="false"
        />
        <p v-else class="antialiased font-medium text-lg mt-auto flex-auto text-center w-full h-[80%]">
          Please, Select Item
        </p>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
