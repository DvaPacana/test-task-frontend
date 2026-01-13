<script setup lang="ts">
    import { computed } from 'vue';
    import type { ItemType } from '../types/item.types';
    import Container from './Container.vue';

    const props = defineProps<{ item: ItemType }>()

    const title = computed(() => {
        const [i0, i1] = props.item.name.split(' ')
        return `${(i0 || '')[0]}${(i1 || '')[0]}`
    })
</script>

<template>
    <Container class="item">
        <h3>{{ title }}</h3>
        <span>{{ props.item.name }}</span>
    </Container>
</template>

<style scoped>
    h3 { 
        margin: 0; 
        line-height: 10px;
    }
    .item {
        width: calc(
            (100cqi - (var(--gap) * (var(--cols) - 1)))
            / var(--cols)
        );
        height: calc(
            (100cqi - (var(--gap) * (var(--cols) - 1)))
            / var(--cols)
        );
        aspect-ratio: 1 / 1;
        cursor: pointer;
    }

    .item:hover {
        border-color: red;
    }
</style>