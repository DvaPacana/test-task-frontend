<script setup>

import BlockItem from "@/components/BlockItem.vue";
import {rightBlock} from "@/data/products.js";
import {ref} from "vue";
const selectedRightItem = ref(null)


const selectRightBlockItem = item => {
  selectedRightItem.value = item
}

</script>

<template>
  <div>

    <div class="top-right block-item_wrap bordered-block top-block">
      <BlockItem
          v-if="selectedRightItem"
          :data="selectedRightItem"
      />
    </div>

    <div class="block-item_wrap bordered-block">
      <BlockItem
          v-for="(item, i) in rightBlock"
          :key="i"
          :data="item"
          :selected="selectedRightItem?.id === item.id"
          @click="selectRightBlockItem(item)"
      />

    </div>

  </div>
</template>

<style scoped>
.top-right {
  justify-content: flex-end;
  margin-bottom: 20px;
}
</style>