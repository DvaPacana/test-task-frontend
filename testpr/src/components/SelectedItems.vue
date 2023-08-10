<template>
  <div class="list">
    <div
      v-if="selectedItems && selectedItems.length > 0"
      v-for="selectedItem in selectedItems"
      :key="selectedItem.id"
      class="item"
    >
      {{ selectedItem.name }}
      <button @click="deleteItem(selectedItem.id)">-</button>
    </div>
    <div v-else class="hint">No items selected</div>
  </div>
</template>

<script lang="ts">
import type { Item } from "@/utils/types";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "SelectedItemsComp",
  props: {
    selectedItems: [] as PropType<Item[]>,
  },
  methods: {
    deleteItem(id: number) {
      const index: any = this.selectedItems?.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.selectedItems?.splice(index, 1);
      }
    },
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
  margin: 20px;
}

.item {
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  flex: 0 0 calc(50% - 20px);
  width: calc(50% - 20px);
  margin: 10px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.hint {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
