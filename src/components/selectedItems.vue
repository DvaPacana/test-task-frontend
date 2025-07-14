<script setup lang="ts">
import {IItems} from "../types/item";

const removeItem = (index: number): void => {
  selectedItems.value.splice(index, 1)
}

const selectedItems = defineModel<IItems[]>('selectedItems')

</script>

<template>
    <div class="border staff">
      <div
          class="border"
          v-for="(item,i) in selectedItems"
          :key="item.id"
          @click="removeItem(i)"
      >
        {{ item.name}}
      </div>

      <slot></slot>
    </div>
</template>

<style scoped>

</style>