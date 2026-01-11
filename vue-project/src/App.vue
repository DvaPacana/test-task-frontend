<script setup lang="ts">
import ListItems from "@/components/list-items.vue";
import {logicPage} from '@/logicPage.ts'
const logic = logicPage()



</script>

<template>
  <main class="main">
    <section class="main__preview">
      <div class="main__preview-items">
        <list-items @click-item="logic.deleteItems($event)" class="main__preview-list" :arr-items="logic.selectedItems"/>
        <div>selected {{logic.selectedItems.length}}/6</div>
      </div>
      <div class="main__preview-item">{{!logic.selectedItem.value.length ? 'SELECTED ITEM' : logic.selectedItem.value[0]?.name }}</div>
    </section>
    <section class="main__content">
      <list-items @click-item="logic.addItems($event)" class="main__content-list" :arr-items="logic.arrItems"/>
      <list-items @click-item="logic.reassignItem($event)" class="main__content-list" :arr-items="logic.arr2Items"/>
    </section>
  </main>
</template>

<style lang="scss">
.main {
  height: 95vh;
  display: flex;
  flex-direction: column;

  &__preview {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 50px;
    min-height: 160px;

    &-items {
      width: fit-content;
      border: 4px solid;
      padding: 10px;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      text-align: center
    }

    &-list {
      flex: 1
    }


    &-item {
      border: 4px solid;
      padding: 20px;
      width: 160px;
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    flex: 1;

    &-list {
      flex: 1;
      height: 100%;
      padding: 10px;
      border: 4px solid;
    }
  }
}

</style>
