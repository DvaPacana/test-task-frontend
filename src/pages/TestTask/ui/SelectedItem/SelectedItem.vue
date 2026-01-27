<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../../model/itemsStore';

const itemsStore = useItemsStore();

const { selectedItem } = storeToRefs(itemsStore);
</script>

<template>
    <div v-if="selectedItem" class="selected-item">
        <p>Selected item</p>
        <p>{{ selectedItem.name }}</p>
    </div>
</template>

<style scoped>
.selected-item {
    font-size: 24px;
    border: 5px solid #000;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
