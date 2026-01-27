<script setup lang="ts">
import type { Item } from '../../model/types';

type ItemProps = {
    item: Item;
    onClick: (id: number) => void;
};

const { item, onClick } = defineProps<ItemProps>();
</script>

<template>
    <div class="item" :key="item.id" @click="onClick(item.id)">
        {{ item.name }}
    </div>
</template>

<style scoped>
.item {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
}
</style>
