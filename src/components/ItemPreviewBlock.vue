<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    name: string | undefined
}>()

const emit = defineEmits<{
    remove: []
}>()

const normalizedName = computed(() => props.name || 'Please select smth')
</script>

<template>
    <div
        class="item-preview-block"
        :class="{ 'item-preview-block_selected': name !== undefined }"
        @click="emit('remove')"
    >
        {{ normalizedName }}
    </div>
</template>

<style scoped>
.item-preview-block {
    width: 15rem;
    min-height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border: 0.2rem solid #000;
    padding: 0.25rem;
}

.item-preview-block_selected:hover {
    cursor: pointer;
}
</style>
