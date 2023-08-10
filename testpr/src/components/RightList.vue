<template>
  <div class="list">
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.name }}
      <button @click="selectItem(item.id)">Show</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Item } from "../utils/types";
import { rightItems } from "@/store/right";

export default defineComponent({
  name: "RightListComp",
  data() {
    return {
      selected: {} as Item | undefined,
      items: rightItems as Item[],
    };
  },
  methods: {
    selectItem(id: number) {
      this.selected = this.items?.find((item) => item.id === id);
      this.$emit("send-selected", this.selected);
    },
  },
});
</script>

<style scoped>
.list {
  width: 80%;
  height: 100%;
  border: 1px solid black;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 150px;
}

.item {
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  flex: 0 0 calc(50% - 20px);
  width: calc(50% - 20px);
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
