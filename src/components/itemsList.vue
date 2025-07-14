<script setup lang="ts">
import {IItems} from "../types/item";

interface IProps {
  items: IItems[]
  limit: number
}

const props = defineProps<IProps>()

const selectedItems = defineModel<IItems[]>('selectedItems')

const selectItem = (staff: IItems): void => {
  if (selectedItems.value.length >= props.limit || selectedItems.value.includes(staff)) {
    return
  }
  selectedItems.value.push(staff)
}
</script>

<template>
  <div class="border staff">
    <div
        class="border"
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>

</style>