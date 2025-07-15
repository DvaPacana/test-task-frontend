<template>
    <div :class="panelClass">
        <div v-for="item in items" :key="item.id" class="item" :class="{ selected: selectedIds.includes(item.id) }"
            @click="onClick(item.id)">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Item } from '../types/item'
import type { PropType } from 'vue'

const props = defineProps({
    panelClass: { type: String, required: true },
    items: { type: Array as PropType<Item[]>, required: true },
    selectedIds: { type: Array as PropType<number[]>, required: true },
})
const emit = defineEmits(['changeSelected'])

const onClick = (id: number) => {
  let newList = [...props.selectedIds]
  if (newList.includes(id)) {
    newList = newList.filter(i => i !== id)
  } else if (newList.length < 6) {
    newList.push(id)
  }
  emit('changeSelected', newList)
}
</script>

<style scoped>
.item {
    display: inline-block;
    margin: 4px 8px 4px 0;
    padding: 6px 10px;
    border: 3px solid #000;
    background: #fff;
    cursor: pointer;
}

.selected {
    background: #d0eaff;
    border-color: #3399ff;
}
</style>
