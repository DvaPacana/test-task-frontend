<template>
  <div class="h-screen bg-gray-200 px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 grid-rows-fr gap-4 mx-auto">
      <div class="flex flex-wrap overflow-hidden bg-white shadow sm:rounded-lg p-8">
        <div  v-for="i in selectedItems" :key="`items-${i}`" class="h-16 bg-gray-50 px-4 py-5 mr-6 mb-6">
          <dt class="text-sm font-medium text-gray-500">{{ i.name }}</dt>
        </div>
        <p class="flex basis-full text-sm text-gray-500"> Selected: {{ selectedItemsCount }}</p>
      </div>
      <div  class="flex flex-wrap overflow-hidden bg-white shadow sm:rounded-lg p-8">
        <dt v-if="selectedItemRight" class="text-sm font-medium text-gray-500">{{ selectedItemRight.name }}</dt>
      </div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg flex flex-wrap flex-col p-8">
        <RadioGroup v-model="selectedItemLeft">
          <RadioGroupLabel class="sr-only">Choose left item </RadioGroupLabel>
          <div class="grid grid-cols-4 grid-rows-2 gap-4">
            <RadioGroupOption as="template" v-for="item in itemsLeft" :key="item.id" :value="item" v-slot="{ active, checked }">
              <div :class="[active ? 'ring-2 ring-indigo-500' : '', 'bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1']">
                <RadioGroupLabel as="span">{{ item.name }}</RadioGroupLabel>
                <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']" aria-hidden="true" />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
        <button
          type="submit"
          :class="[selectedItemLeft ? 'bg-indigo-600' : 'pointer-events-none bg-gray-50 text-gray-200 cursor-not-allowed', 'mt-6 w-full h-12 items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']"
          @click="chooseItemLeft"
          >
            Add to bag
        </button>
      </div>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg flex flex-wrap flex-col p-8">
        <RadioGroup v-model="selectedItemRight">
          <RadioGroupLabel class="sr-only">Choose a right item </RadioGroupLabel>
          <div class="grid grid-cols-4 grid-rows-2 gap-4">
            <RadioGroupOption as="template" v-for="item in itemsRight" :key="item.id" :value="item" v-slot="{ active, checked }">
              <div :class="[active ? 'ring-2 ring-indigo-500' : '', 'bg-white shadow-sm text-gray-900 cursor-pointer group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1']">
                <RadioGroupLabel as="span">{{ item.name }}</RadioGroupLabel>
                <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']" aria-hidden="true" />
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {RadioGroupLabel, RadioGroup, RadioGroupOption} from "@headlessui/vue";

interface Item {
  id: number;
  name: string;
}

import itemsLeft from "../data/itemsLeft.json"
import itemsRight from "../data/itemsRight.json"

let selectedItems = ref<Item[]>([]);
let selectedItemLeft = ref<Item | null>(null)
let selectedItemRight = ref<Item | null>(null)

let selectedItemsCount = computed<number | null>(() => {
  return selectedItems.value.length
})

function chooseItemLeft():void {
  if(selectedItemLeft.value !== null){
    selectedItems.value.push(selectedItemLeft.value)
    selectedItemLeft.value = null
  }
}
</script>
