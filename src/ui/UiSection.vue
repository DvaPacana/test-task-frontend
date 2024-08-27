<template>
    <section class="wrapper">
        <div class="section">
            <div v-if="counter" class="count">Selected {{ count }}/6</div>
            <slot name=top></slot>
        </div>
        <div class="section">
            <slot name="bottom"></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    counter?: boolean,
    count?: number,
}>()
</script>

<style>
.wrapper {
    display: grid;
    grid-template-rows: 150px auto;
    gap: 16px;
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;

    border: 2px solid black;
    padding: 12px 24px;
}

.count {
    order: 6;
    flex-basis: 100%;
}
</style>