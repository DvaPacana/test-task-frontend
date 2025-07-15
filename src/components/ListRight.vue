<template>
    <div :class="panelClass">
        <div v-for="item in items" :key="item.id" class="item" :class="{ selected: selectedId === item.id }"
            @click="emit('changeSelected', item.id)">
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
    selectedId: { type: Number as PropType<number | null>, default: null },
})

const emit = defineEmits(['changeSelected'])
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
