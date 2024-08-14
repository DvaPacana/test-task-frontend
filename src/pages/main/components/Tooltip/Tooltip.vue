<script setup lang="ts">

import {computed, nextTick, onBeforeUnmount, onMounted, ref} from "vue";
import { TooltipTypeEnum, TooltipModel } from "@/pages";

/** Сообщение в тултипе */
const tooltipMessage = ref<string>('')
/** Вид тултипа */
const tooltipType = ref<undefined | TooltipTypeEnum >(undefined)

const tooltipStyle = computed(() => ({
  backgroundColor: tooltipType.value == TooltipTypeEnum.Error ? 'red' : 'orange',
}))


onMounted(() => {
  /** Подписка необходимость показать tooltip */
  document.addEventListener('set-tooltip-data', runTooltipVisibility)
  document.addEventListener('click', hideTooltip)
})

let timer

/** Управление видимостью тултипа */
const runTooltipVisibility = async (event: CustomEvent<TooltipModel>) => {
  if ( timer && tooltipMessage.value) {
    clearTimeout(timer)
    clearTooltipData()
  }

  setTimeout(() => {
    tooltipMessage.value = event.detail.Text
    tooltipType.value = event.detail.Type

    timer = setTimeout(() => {
      clearTooltipData()
    }, 3000)
  }, 0)
}

/** Очистить значения tooltip */
const clearTooltipData = () => {
  tooltipType.value = undefined
  tooltipMessage.value = ''
}

/** Скрыть тултип при клике вне его */
function hideTooltip (e: Event) {
  if (!document.querySelector('.tooltip') || e.target.closest('.available-items .item')) return

  const isClickOutsideTooltip = !e.target.closest('.tooltip')

  if ( tooltipMessage.value && isClickOutsideTooltip) {
    clearTimeout(timer)
    clearTooltipData()
  }
}
</script>

<template>
  <div
      class="tooltip"
      :class="{
         'tooltip_visible': tooltipType
      }"
      :style="tooltipStyle"
  >
    {{ tooltipMessage }}
  </div>
</template>

<style scoped lang="scss">
.tooltip {
  position: fixed;
  padding: 16px;
  z-index: 1000;
  transition: opacity 0s;
  opacity: 0;
  top: 50%;
  left: 50%;
 transform: translateX(-50%);
  min-width: 200px;
  font-size: 20px;
  color: white;
}

.tooltip_visible {
  opacity: 1;
  transition: opacity 0.3s;
}
</style>
