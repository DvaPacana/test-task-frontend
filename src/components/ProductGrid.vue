<template>
    <div class="grid">
        <TopPanel 
            panelClass="panel-tl" 
            :items="pickedLeftProducts" 
            showCounter :max="6" 
        />

        <TopPanel 
            panelClass="panel-tr" 
            :items="pickedRightProduct ? [pickedRightProduct] : []" 
        />

        <ListLeft 
            panelClass="panel-bl" 
            :items="leftItems" 
            :selectedIds="selectedLeftIds"
            @changeSelected="selectedLeftIds = $event" 
        />

        <ListRight 
            panelClass="panel-br" 
            :items="rightItems" 
            :selectedId="selectedRightId"
            @changeSelected="selectedRightId = $event" 
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Item } from '../types/item'
import TopPanel from './TopPanel.vue'
import ListLeft from './ListLeft.vue'
import ListRight from './ListRight.vue'

const leftItems: Item[] = [
    { id: 1, name: 'Shoes 1' },
    { id: 2, name: 'Shoes 2' },
    { id: 3, name: 'Shoes 3' },
    { id: 4, name: 'Shoes 4' },
    { id: 5, name: 'T-shirt 1' },
    { id: 6, name: 'T-shirt 2' },
    { id: 7, name: 'T-shirt 3' },
    { id: 8, name: 'T-shirt 4' },
]

const rightItems: Item[] = [
    { id: 11, name: 'Jacket 1' },
    { id: 12, name: 'Jacket 2' },
    { id: 13, name: 'Jacket 3' },
    { id: 14, name: 'Jacket 4' },
    { id: 15, name: 'Hoodie 1' },
    { id: 16, name: 'Hoodie 2' },
    { id: 17, name: 'Hoodie 3' },
    { id: 18, name: 'Hoodie 4' },
]

const selectedLeftIds = ref<number[]>([])
const selectedRightId = ref<number | null>(null)

const pickedLeftProducts = computed(() =>
    leftItems.filter(i => selectedLeftIds.value.includes(i.id))
)
const pickedRightProduct = computed(() =>
    rightItems.find(i => i.id === selectedRightId.value) ?? null
)
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 16px;
    padding: 16px;
    height: 90vh;
}
</style>
