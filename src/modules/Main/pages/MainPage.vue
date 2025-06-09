<template>
  <LoaderWrapper :isLoading="isLoading">
    <div class="flex w-full gap-[20px] mb-4">
      <div class="flex-1 w-full">
        <ChooseDashboard :data="selectedUserStore" class="w-full" @select="onRemoveUserStore" />
      </div>
      <div class="flex-1 w-full">
        <ChooseDashboard :data="selectedUnUserStore" class="w-full" @select="onRemoveUnUserStore" />
      </div>
    </div>
    <div class="flex h-full gap-[20px] max-h-full">
      <div class="flex-1 h-full">
        <SelectDashboard :data="userStore" @select="onSelectUserStore" />
      </div>
      <div class="flex-1 h-full">
        <SelectDashboard :data="unUserStore" @select="onSelectUnUserStore" />
      </div>
    </div>
  </LoaderWrapper>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getStore } from '@/modules/Main/api/store'
import SelectDashboard from '../ui/SelectDashboard.vue'
import ChooseDashboard from '../ui/ChooseDashoboard.vue'
import { ref, watch } from 'vue'
import LoaderWrapper from '@/shared/ui/LoaderWrapper.vue'
import type { Item } from '../api/types'

const selectedUserStore = ref<Item[]>([])
const selectedUnUserStore = ref<Item[]>([])
const userStore = ref<Item[]>([])
const unUserStore = ref<Item[]>([])

const { data: stores, isLoading } = useQuery({
  queryKey: ['store'],
  queryFn: getStore,
})

watch(stores, (data) => {
  userStore.value = data?.left || []
  unUserStore.value = data?.right || []
})

const onSelectUserStore = (item: Item) => {
  const currentItem = userStore.value.find((i) => i.id === item.id)
  if (!currentItem || selectedUserStore.value.length === 6) return
  selectedUserStore.value = [...selectedUserStore.value, currentItem]
  userStore.value = userStore.value.filter((i) => i.id !== item.id)
}

const onRemoveUserStore = (item: Item) => {
  const currentItem = selectedUserStore.value.find((i) => i.id === item.id)
  if (!currentItem) return
  userStore.value = [...userStore.value, currentItem]
  selectedUserStore.value = selectedUserStore.value.filter((i) => i.id !== item.id)
}

const onSelectUnUserStore = (item: Item) => {
  const currentItem = unUserStore.value.find((i) => i.id === item.id)
  if (!currentItem || selectedUnUserStore.value.length === 1) return
  selectedUnUserStore.value = [...selectedUnUserStore.value, currentItem]
  unUserStore.value = unUserStore.value.filter((i) => i.id !== item.id)
}

const onRemoveUnUserStore = (item: Item) => {
  const currentItem = selectedUnUserStore.value.find((i) => i.id === item.id)
  if (!currentItem) return
  unUserStore.value = [...unUserStore.value, currentItem]
  selectedUnUserStore.value = selectedUnUserStore.value.filter((i) => i.id !== item.id)
}
</script>

<style scoped></style>
