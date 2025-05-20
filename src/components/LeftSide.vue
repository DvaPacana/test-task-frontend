<script setup>

import BlockItem from "@/components/BlockItem.vue";
import {computed, ref} from "vue";
import {leftBlock} from "@/data/products.js";

const MAX_COUNT = 6
const selectedLeftBlockItems = ref([])

const selectLeftBlockItems = item => {
  const exist = existInSelected(item)

  if(exist > -1)  {
    selectedLeftBlockItems.value.splice(exist, 1)
  } else if(selectedLeftBlockItems.value.length < MAX_COUNT) {
    selectedLeftBlockItems.value.push(item)
  } else {
    alert('You can\'t choose more than 6')
  }
}

const selectedLength = computed(() => selectedLeftBlockItems.value.length)

const existInSelected = item => {
  return selectedLeftBlockItems.value.findIndex(i => i.id === item.id)
}
</script>

<template>
  <div>
    <div class="top-left bordered-block top-block">

      <div class="block-item_wrap">

        <BlockItem
            v-for="(item, i) in selectedLeftBlockItems"
            :key="i"
            :data="item"
        />

      </div>


      <div class="count">
        {{ selectedLength }} / {{ MAX_COUNT }}
      </div>

    </div>
    <div class="block-item_wrap bordered-block">
      <BlockItem
          v-for="(item, i) in leftBlock"
          :key="i"
          :data="item"
          :selected="existInSelected(item) > -1"
          @click="selectLeftBlockItems(item)"
      />
    </div>

  </div>
</template>

<style scoped>
.top-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}
.count {
  margin-left: 30px;
}
</style>