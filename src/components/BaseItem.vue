<script setup lang="ts">
import type { Item } from '@/types'

defineProps<{
    item: Item
}>()
</script>

<template>
    <div class="base-item">
        <h2>{{ item.name }}</h2>
    </div>
</template>

<style scoped>
.base-item {
    padding: 15px;
    border: 3px solid #000;
    cursor: pointer;
}

.base-item:hover {
    background: #e1e1e1;
}
</style>
