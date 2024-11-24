<script setup lang="ts">
import { Skin } from '~/types'
import useExchangeItems from '@/store/exchangeItems'

const { setRightItem, addToLeft, removeFromLeft } = useExchangeItems()

interface Props {
  isLoading: boolean
  serverItems: Skin.Item[]
  inventoryItems: Skin.Item[]
}
defineProps<Props>()
</script>
z
<template>
  <div class="flex flex-col w-full h-full gap-3">
    <UiRow class="w-full gap-x-3">
      <BoardHeader />
    </UiRow>
    <UiRow class="w-full h-full gap-x-3">
      <BoardColumn>
        <p v-if="isLoading" />
        <template v-else>
          <SkinCard
            v-for="skin in inventoryItems"
            v-bind="skin"
            :key="skin.id"
            @select="addToLeft(skin)"
            @deselect="removeFromLeft(skin.id)"
          />
        </template>
      </BoardColumn>
      <BoardColumn>
        <p v-if="isLoading" />
        <template v-else>
          <SkinCard
            v-for="skin in serverItems"
            v-bind="skin"
            :key="skin.id"
            @select="setRightItem(skin)"
            @deselect="setRightItem(null)"
            is-single-selected
          />
        </template>
      </BoardColumn>
    </UiRow>
  </div>
</template>
