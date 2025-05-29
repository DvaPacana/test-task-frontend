<script setup lang="ts">
import { ref } from 'vue'
import { MAX_SELECT } from '@/constants/common'
import { type Item } from '@/types/Item'
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import SelectedItems from '@/components/SelectedItems.vue'
import SelectedItem from '@/components/SelectedItem.vue'
import LeftPane from '@/components/LeftPane.vue'
import RightPane from '@/components/RightPane.vue'

const rightItem = ref({} as Item)
const leftItems = ref([] as Item[])

function onRightSelect(value: Item) {
  rightItem.value = value
}
function onLeftSelect(value: Item) {
  if (leftItems.value.length < MAX_SELECT) {
    leftItems.value.push(value)
  }
}
</script>

<template>
  <BaseLayout>
    <template v-slot:selectedItems>
      <SelectedItems v-model="leftItems"> </SelectedItems>
    </template>
    <template v-slot:selectedItem>
      <SelectedItem v-model="rightItem"> </SelectedItem>
    </template>
    <template v-slot:leftPane>
      <LeftPane @selected="onLeftSelect"></LeftPane>
    </template>
    <template v-slot:rightPane>
      <RightPane @selected="onRightSelect"></RightPane>
    </template>
  </BaseLayout>
</template>
