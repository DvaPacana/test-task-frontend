<script setup lang="ts">
    const props = defineProps<{ title?: string }>()
</script>

<template>
    <div>
        <slot/>
        <span v-if="title">{{ props.title }}</span>
    </div>
</template>

<style scoped>
    span {
        position: fixed;
        transform: translateY(-24px);
        pointer-events: none;
        background-color: white;
        font-weight: 900;
        padding: 0px 12px;
        font-size: 12px;
        line-height: 12px;
    }
    div {
        container-type: inline-size;
        --gap: 8px;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 12px;
        padding-top: 18px;
        border-radius: 12px;
        gap: var(--gap);
        border: 1px darkgray solid;
        overflow: auto;
    }
</style>