<template>
  <div class="list">
    <div v-if="selectedItem?.name" class="item">{{ selectedItem.name }}</div>
        
        <div v-else class="hint">
            Select item below
        </div>
  </div>
</template>

<script lang="ts">
import type { Item } from "@/utils/types";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "SelectedItemComp",
  props: {
      selectedItem: {} as PropType<Item>,
  },
  data() {
    return {};
  },
});
</script>

<style scoped>
.list {
    width: 20%;
    height: 100%;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    margin: 20px
}

.item {
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    width: calc(50% - 20px);
    margin: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hint {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
