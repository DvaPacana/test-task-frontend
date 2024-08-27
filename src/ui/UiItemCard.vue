<template>
    <div class="ui-item-card" :class="size, active ? 'active' : ''">
        <p>{{ name }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string,
    size?: "" | "big",
    active?: boolean
}>()
</script>

<style>
.ui-item-card {
    padding: 12px;
    cursor: pointer;
}

.ui-item-card:hover,
.ui-item-card.active {
    background-color: rgb(161 183 182);
}

.ui-item-card.active:hover {
    background: rgba(161, 183, 182, .6);
}

.ui-item-card.big {
    width: 100%;
}
</style>