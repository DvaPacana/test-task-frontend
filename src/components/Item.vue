<script setup>
import { computed } from 'vue'
import { store } from '../state'
defineProps({
    data: Object,
    isPreview: Boolean,
    isRemovable: Boolean,
})

const handleClick = (id) => {
    if (!id) return
    let item = store.left.find(item => item.id === id)
    if (item) {
        if (!item?.isSelected && leftSelectedCount.value >= store.leftSelectionLimit) return
        item.isSelected = !item?.isSelected
    } else {
        item = store.right.find(item => item.id === id)
        if (item?.isSelected) {
            item.isSelected = false
        } else {
            if (!item?.isSelected && rightSelectedCount.value >= store.rightSelectionLimit) {
                store.right.filter(item => item?.isSelected).forEach(item => item.isSelected = false)
            }
            item.isSelected = true
        }
    }
}
const leftSelectedCount = computed(() => {
    return store.left.filter(item => item?.isSelected).length
})
const rightSelectedCount = computed(() => {
    return store.right.filter(item => item?.isSelected).length
})
</script>

<template>
    <div :title="data?.isSelected ? 'Remove selection' : ''"
        :class="['item', { 'selected': data?.isSelected && !isPreview }]" @click="handleClick(data?.id)">
        <h5>{{ data?.name || 'Select one Item' }}</h5>
    </div>
</template>

<style scoped>
.item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    max-width: fit-content;
    cursor: pointer;
    user-select: none;
}

.item:hover {
    border: 1px solid rgb(107, 107, 107);
}
</style>