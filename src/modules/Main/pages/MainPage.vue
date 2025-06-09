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
import { useCreateSelectionHandler } from '../lib/useCreateSelectionHandler'

const selectedUserStore = ref<Item[]>([])
const selectedUnUserStore = ref<Item[]>([])
const userStore = ref<Item[]>([])
const unUserStore = ref<Item[]>([])

const { data: stores, isLoading } = useQuery({
  queryKey: ['store'],
  queryFn: getStore,
})

const { add: onSelectUserStore, remove: onRemoveUserStore } = useCreateSelectionHandler(
  userStore,
  selectedUserStore,
  6,
)
const { add: onSelectUnUserStore, remove: onRemoveUnUserStore } = useCreateSelectionHandler(
  unUserStore,
  selectedUnUserStore,
  1,
)

watch(stores, (data) => {
  userStore.value = data?.left || []
  unUserStore.value = data?.right || []
})
</script>

<style scoped></style>
