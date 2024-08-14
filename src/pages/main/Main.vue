<script lang="ts" setup>
import {SelectedItems, BlockWithItems, ItemModel, Item, Tooltip} from "@/pages";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {leftBlockData, rightBlockData} from "@/shared";
import {ItemSizeEnum} from "@/pages/main/enums";

/** Выбранные items слева */
const selectedItems = ref<ItemModel[]>([])
/** Выбранный item справа */
const rightSelectedItem = ref<ItemModel>(new ItemModel())
/** Ширина окна */
const windowWidth = ref()

/** Items слева для выбора */
const leftItems = computed<ItemModel[]>(() => selectedItems.value.length ?
    leftBlockData.filter(item => !selectedItems.value.map(selected=> selected.id).includes(item.id) ) :
    leftBlockData)
/** Общее количетсво items слева, чтобы выбрать */
const totalLeftItems = computed<number>(() => leftItems.value.length + selectedItems.value.length)
/**  Items справа для выбора */
const rightItems = computed<ItemModel[]>(() => rightSelectedItem.value.name ?
    rightBlockData.filter(item =>  item.id != rightSelectedItem.value.id) :
    rightBlockData)

/** После монтирования компонента */
onMounted(() => {
  selectedItems.value = leftItems.value.slice(0,4)
  rightSelectedItem.value = rightItems.value[0]
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})

/** До размонтирования компонента */
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

/** Добавить item слева в выбранные */
const addItemToSelected  = (itemId: number) => {
  const itemToAdd:ItemModel = leftItems.value.find(item => item.id == itemId)
  selectedItems.value =  [...selectedItems.value, itemToAdd]
}

/** Убрать item слева из выбранных */
const removeItemFromSelected = (itemId: number) => {
  selectedItems.value =  selectedItems.value.filter(item => item.id != itemId)
}

/** Выбрать item справа */
const addItemToSelectedRight = (itemId: number) => {
  const itemToSelect:ItemModel = rightItems.value.find(item => item.id == itemId)
  rightSelectedItem.value =  itemToSelect
}
/** Задание ширины экрана */
const updateWindowWidth = () =>   windowWidth.value = document.body.offsetWidth
</script>

<template>
 <main
     class="main"
     :class="{
       'mobile': windowWidth <= 700
     }"
 >
   <div class="main__left">
      <SelectedItems
          class="main__selected-items"
          :items="selectedItems"
          :totalItems="totalLeftItems"
          @removeItemFromSelected="removeItemFromSelected"
      />
      <BlockWithItems
          :items="leftItems"
          :currentSelected="selectedItems.length"
          @selectItem="addItemToSelected"
      />
   </div>

   <div class="main__right">
      <Item
          class="main__right__selected-item"
          :size="ItemSizeEnum.Big"
          :item="rightSelectedItem"/>

      <BlockWithItems
          :items="rightItems"
          @selectItem="addItemToSelectedRight"
      />
   </div>

   <Tooltip/>
 </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  padding: 16px;
  width: calc(100% - (4px + 2px));
  border: 2px solid black;
  margin: 1px;
}

.main__left,
.main__right {
  width: 100%;
  min-height: calc(100dvh - (32px + 6px));
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
}

.main__left {
  margin-right: 24px;
  align-items: flex-start;
}

.main__right {
  align-items: flex-end;
}
.main__selected-items {
  margin-bottom: 16px;
  width: calc(50% - 8px)
}

.main__right__selected-item {
  width: 60%;
  margin-bottom: 16px;
}

.mobile  {
    display: block;

  .main__left,
  .main__right {
    min-height: auto;
    margin-bottom: 16px;
    align-items: center;
  }
}
</style>
