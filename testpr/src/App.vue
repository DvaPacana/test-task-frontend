<template>
  <div class="container">
    <div class="top-row">
      <SelectedItems :selectedItems="receivedSelectedArray"/>
      <SelectedItem :selectedItem="receivedSelected" />
    </div>
    <div class="bottom-row">
      <LeftList @send-selectedItems="selectedArrayHandler" />
      <RightList @send-selected="selectedHandler" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftList from "./components/LeftList.vue";
import RightList from "./components/RightList.vue";
import SelectedItem from "./components/SelectedItem.vue";
import SelectedItems from "./components/SelectedItems.vue";
import type { Item } from "./utils/types";

export default defineComponent({
  name: "App",
  components: { RightList, LeftList, SelectedItem, SelectedItems },
  data() {
    return {
      receivedSelected: {} as Item,
      receivedSelectedArray: [] as Item[],
    };
  },
  methods: {
    selectedHandler(selected: any) {
      this.receivedSelected = selected;
    },
    selectedArrayHandler(selectedArr: any) {
      this.receivedSelectedArray = selectedArr;
    },
    deleteHandler(id: number) {
        this.receivedSelectedArray = this.receivedSelectedArray.filter(item => item.id !== id)
    }
  },
});
</script>

<style scoped>
body {
    margin: 0;
  }

.container {
  display: grid;
  grid-template-rows: 30% 70%;
  height: 100vh;
  width: 100vw;
}

.top-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.bottom-row {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
}
</style>
