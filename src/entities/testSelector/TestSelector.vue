<script setup lang="ts">
import {ref} from 'vue'
import { useTestSelectorStore } from '@/stores/testSelectorStore'

import type { IOptionsItem } from '@/entities/testSelector/types/types'
import { userOptions, catalogOptions } from '@/entities/testSelector/mock/mock'

import SelectorResult from '@/entities/testSelector/components/SelectorResult.vue'
import SelectorOptions from '@/entities/testSelector/components/SelectorOptions.vue'
import SelectorOptionsGroup from '@/entities/testSelector/components/SelectorOptionsGroup.vue'
import SelectorOptionsItem from '@/entities/testSelector/components/SelectorOptionsItem.vue'

const {
  userListMax,
  globalListMax,
  userSelectedList,
  globalSelectedList,
  addToUserList,
  addToGlobalList,
  deleteItem
} = useTestSelectorStore()

const isSelected = (item: IOptionsItem, list: IOptionsItem[]) => {
  return list.indexOf(item) >= 0
}
</script>

<template>
  <div class="test-selector">
    <div class="test-selector__layout">
      <SelectorResult>
        <SelectorOptionsGroup>
          <template #header>
            <p>user selected (max: {{ userListMax }})</p>
          </template>
          <SelectorOptionsItem
            v-for="item in userSelectedList"
            :item="item"
            @click="deleteItem(item, userSelectedList)"
          />
          <template #footer>
            <p>selected: {{ userSelectedList.length }} / {{ userListMax }}</p>
          </template>
        </SelectorOptionsGroup>
        <SelectorOptionsGroup>
          <template #header>
            <p>global selected (max: {{ globalListMax }})</p>
          </template>
          <SelectorOptionsItem
            v-for="item in globalSelectedList"
            :item="item"
            @click="deleteItem(item, globalSelectedList)"
          />
          <template #footer>
            <p>selected: {{ globalSelectedList.length }} / {{ globalListMax }}</p>
          </template>
        </SelectorOptionsGroup>
      </SelectorResult>
      <SelectorOptions>
        <SelectorOptionsGroup>
          <template #header>
            <p>user options</p>
          </template>
          <SelectorOptionsItem
              v-for="item in userOptions"
              :class="{selected: isSelected(item, userSelectedList)}"
              :item="item"
              @click="addToUserList(item)"
            />
        </SelectorOptionsGroup>
        <SelectorOptionsGroup>
          <template #header>
            <p>user options</p>
          </template>
          <SelectorOptionsItem
              v-for="item in catalogOptions"
              :class="{selected: isSelected(item, globalSelectedList)}"
              :item="item"
              @click="addToGlobalList(item)"
            />
        </SelectorOptionsGroup>
      </SelectorOptions>
    </div>
  </div>

</template>
<style lang="scss">

.test-selector {
  height: 100%;

  &__layout {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 16px;
  }
}
</style>
