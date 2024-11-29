<template>
    <div class="container">
      <TheBlock :model-value="topLeftList" @update:model-value="updateLeftList" />
      <TheBlock :model-value="topRightList" @update:model-value="updateRightList" />
      <TheBlock :model-value="leftList" @update:model-value="updateLeftList"/>
      <TheBlock :model-value="rightList" @update:model-value="updateRightList" />
    </div>
</template>

<script setup lang="ts">
import TheBlock from './components/TheBlock.vue'
import {computed, ref} from "vue";
import LEFT_LIST from './db/left.json'
import RIGHT_LIST from './db/right.json'

interface IListItem {
  id: number,
  isActive: boolean,
  name: string,
}

const leftList = ref<IListItem[]>(LEFT_LIST.map(item => {
  return {
    ...item,
    isActive: false
  }
}))
const rightList = ref<IListItem[]>(RIGHT_LIST.map(item => {
  return {
    ...item,
    isActive: false
  }
}))

const topLeftList = ref<IListItem[]>([])
const topRightList = ref<IListItem[]>([])

const updateLeftList = (_: IListItem[], id: number) => {
  const leftListLength = leftList.value.filter(item => item.isActive).length
  if(leftListLength > 6) {
    const index = leftList.value.findIndex(item => item.id === id)
    leftList.value[index].isActive = !leftList.value[index].isActive
    return
  }
  if (topLeftList.value.length > leftListLength) {
    const index = topLeftList.value.findIndex(item => item.id === id)
    topLeftList.value.splice(index, 1)
  } else if (topLeftList.value.length < leftListLength) {
    const index = leftList.value.findIndex(item => item.id === id)
    topLeftList.value.push(leftList.value[index])
  }
}

const updateRightList = (_: IListItem[], id: number) => {
  if(rightList.value.filter(item => item.isActive).length > 1) {
    rightList.value = rightList.value.map(item => ({...item, isActive: item.id === id}))
  }
  topRightList.value = rightList.value.filter(item => item.isActive)
}
</script>

<style scoped lang="scss">
.container {
  padding: 8px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  gap: 8px;
  background-color: #181818;

}
</style>
