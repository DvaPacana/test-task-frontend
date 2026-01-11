<template>
  <div class="root">
    <div class="root__column">
      <div class="root__column-items">
        <Item
          v-for="item in selectedUserItems"
          :key="item.id"
          :name="item.name"
          :idx="item.id"
          :click-handler="removeFromArray"
        />
      </div>
      <div class="root__column-items">
        <Item
          v-for="item in userItems"
          :key="item.id"
          :idx="item.id"
          :name="item.name"
          :click-handler="addToArray"
        />
      </div>
    </div>
    <div class="root__column">
      <div class="root__column-items">
        <Item
          v-if="selectedItem"
          :key="selectedItem.id"
          :name="selectedItem.name"
          :click-handler="itemClick"
        />
      </div>
      <div class="root__column-items">
        <Item
          v-for="item in items"
          :key="item.id"
          :idx="item.id"
          :name="item.name"
          :click-handler="itemClick"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Item from '@/components/MainItem.vue'
import { items, userItems } from '@/components/data.ts'
import { computed, ref } from 'vue'

const activeItem = ref(-1)
const selectedUserItems = ref<Array<{ id: number; name: string }>>([])

const itemClick = (id?: number) => {
  if (id) {
    activeItem.value = id
  } else {
    activeItem.value = -1
  }
}

const addToArray = (id?: number) => {
  if (id && selectedUserItems.value.length < 6) {
    const clickedItem = userItems.find((item) => item.id === id)
    if (clickedItem) {
      if (!selectedUserItems.value.some((i) => i.id === id)) {
        selectedUserItems.value.push(clickedItem)
      }
    }
  }
}

const removeFromArray = (id?: number) => {
  if (id) {
    const index = selectedUserItems.value.findIndex((i) => i.id === id)
    selectedUserItems.value.splice(index, 1)
  }
}

const selectedItem = computed(() => {
  return items.find((item) => item.id === activeItem.value)
})
</script>
<style lang="scss">
.root {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  &__column {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 48%;
    height: 100%;
    align-items: flex-start;
    &:nth-child(2) {
      align-items: flex-end;
    }
  }
  &__column-items {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    min-height: 200px;
    width: auto;
    min-width: 200px;
    border: 3px solid #000;
    align-content: baseline;
    &:last-child {
      flex-grow: 1;
      width: 100%;
    }
  }
}
</style>
