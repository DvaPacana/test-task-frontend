<script setup>
import Item from './Item.vue'
import { store } from '../state'
defineProps({
    items: Array,
    withCounter: Boolean,
    forPreview: Boolean,
    selectionTip: String,
})
</script>

<template>
    <div class="box">
        <div v-if="items.length" class="items-box">
            <Item v-for="item in items" :key="item.id" :data="item" :is-preview="forPreview" />
        </div>
        <div v-else>
            {{ selectionTip }}
        </div>
        <div v-if="withCounter && items.length" class="counter">
            Selected: {{ items.length }} / {{ store.leftSelectionLimit }}
        </div>

    </div>
</template>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

.items-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}
</style>