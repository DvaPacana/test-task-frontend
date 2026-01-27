<script setup lang="ts">
import type { Item } from '../../model/types';
import ItemComponent from '../Item/ItemComponent.vue';

type ItemsContainerProps = {
    items: Item[];
    onClick: (id: number) => void;
};

const { items, onClick } = defineProps<ItemsContainerProps>();
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <ItemComponent
                v-for="item in items"
                :item="item"
                :key="item.id"
                :onClick="onClick"
            />
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    border: 5px solid #000;
    width: 100%;
}
.container {
    gap: 20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>
