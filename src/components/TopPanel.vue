<template>
    <div :class="panelClass" :data-count="showCounter ? items.length : null">
        <div v-for="item in items" :key="item.id" class="item">
            {{ item.name }}
        </div>
        <div v-if="showCounter" class="counter">
            selected: {{ items.length }} / {{ max }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Item } from '../types/item'
import type { PropType } from 'vue'

const props = defineProps({
    panelClass: { type: String, required: true },
    items: { type: Array as PropType<Item[]>, required: true },
    showCounter: { type: Boolean, default: false },
    max: { type: Number, default: 6 },
})
</script>

<style scoped>
.item {
    display: inline-block;
    margin: 4px 8px 4px 0;
    padding: 6px 10px;
    border: 3px solid #000;
    background: #fff;
}

.counter {
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
}
</style>
