<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <div
        tabindex="0"
        class="small-item-preview"
    >
        {{ name }}
    </div>
</template>

<style scoped>
.small-item-preview {
    text-align: center;
    border: 0.2rem solid #000;
    padding: 0.25rem;
    cursor: pointer;
}
</style>
