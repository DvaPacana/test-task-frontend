<script setup lang="ts">
import { useItemsStore } from '../../model/itemsStore';
import { useUserItemsStore } from '../../model/userItemsStore';
import ItemsContainer from '../ItemsContainer/ItemsContainer.vue';

const { items: userItems, addItem: addUserItem } = useUserItemsStore();

const { items, addItem } = useItemsStore();
</script>

<template>
    <div class="container">
        <div class="item">
            <ItemsContainer :items="userItems" :onClick="addUserItem" />
        </div>
        <div class="item">
            <ItemsContainer :items="items" :onClick="addItem" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.item {
    width: 100%;
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-grow: 1;
    margin-right: 25px;
}

.item:last-child {
    margin-right: 0;
}
</style>
