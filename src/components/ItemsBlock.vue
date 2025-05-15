<script setup lang="ts">
import type { Item } from '@/types'
import BaseItem from './BaseItem.vue'

defineProps<{
    items: Item[] | null
}>()

const emit = defineEmits<{
    pickItem: [e: Item]
}>()
</script>

<template>
    <div class="items-block">
        <div class="items-list">
            <BaseItem
                v-for="item in items"
                :key="item.id"
                :item
                @click="emit('pickItem', item)"
            />
        </div>
        <p class="items-label">
            <slot />
        </p>
    </div>
</template>

<style scoped>
.items-block {
    padding: 20px;
    border: 3px solid #000;
}

.items-list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}

.items-label {
    font-size: 22px;
    text-align: right;
    margin-top: 20px;
}
</style>
