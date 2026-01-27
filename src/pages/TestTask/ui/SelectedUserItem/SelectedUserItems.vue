<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserItemsStore } from '../../model/userItemsStore';
import ItemComponent from '../Item/ItemComponent.vue';

const itemsStore = useUserItemsStore();

const { selectedItems } = storeToRefs(itemsStore);
</script>

<template>
    <div class="selected-items">
        <p>Selected items</p>
        <div class="container">
            <div v-for="item in selectedItems">
                <ItemComponent
                    :key="item.id"
                    :item="item"
                    v-on:click="itemsStore.removeItem"
                />
            </div>
        </div>
        <p class="number">Selected: {{ selectedItems.length || 'N/A' }}</p>
    </div>
</template>

<style scoped>
.selected-items {
    display: flex;
    flex-direction: column;
    border: 5px solid #000;
}
.container {
    width: 400px;
    min-height: 100px;
    max-height: 200px;
    margin-bottom: 10px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.number {
    margin-top: auto;
}
</style>
