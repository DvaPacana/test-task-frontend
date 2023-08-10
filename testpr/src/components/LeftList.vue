<template>
    <div class="list">
      <div v-for="item in items" :key="item.id" class="item">
          {{ item.name }}
          <button @click="selectedItemsToArray(item.id)">+</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import type { Item } from "../utils/types"
  import { leftItems } from "@/store/left";
  
  export default defineComponent({
    name: "RightListComp",
    data() {
      return {
          selected: {} as Item | undefined,
          selectedItems: [] as Item[],
          items: leftItems as Item[]
      }
    },
    methods: {
      selectedItemsToArray(id: number) {
          this.selected = this.items?.find(item => item.id === id);
          // Проверка на то, что вещь уже существует в списке выбранных вещей
          const isItemExist = this.selectedItems.find(item => item.id === this.selected?.id)
          if (this.selected && this.selectedItems.length < 6 && !isItemExist) {
            this.selectedItems.push(this.selected)
          }
          this.$emit("send-selectedItems", this.selectedItems)
      }
    }
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
    margin-left: 20px;
  }
  
  .item {
    border: 1px solid black;
    padding: 10px;
    box-sizing: border-box;
    width: calc(50% - 20px);
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
  </style>
  