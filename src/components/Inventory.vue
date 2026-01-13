<script setup lang="ts">
    import { useStatic } from '../composables/useStatic';
    import type { ItemType } from '../types/item.types';
    import Container from './Container.vue';
    import Item from './Item.vue';

    const props = withDefaults(defineProps<{ entity: 'user' | 'bot', multiple?: boolean, max?: number }>(), { max: 6 })
    const selected = defineModel<ItemType[]>({ required: true, default: [] })

    const data = (await useStatic<ItemType[]>(`${props.entity}.inventory`)).sort((a, b) => a.name.localeCompare(b.name))

    defineExpose({
        unset: (item: ItemType) => {
            if (!selected.value.length) return
            const i = selected.value.indexOf(item)
            if (i === -1) return
            selected.value.splice(i, 1)
        },
        data: data,
        max: props.max || data.length
    })
</script>

<template>
    <Container 
        :title="`${props.entity} inventory`" 
        class="inventory" 
        :data-disabled="
            selected.length >= Math.min(props.max, data.length) || 
            (!props.multiple && selected.length === 1) ||
            !data.filter(v => !selected.find(s => v.id === s.id)).length
        "
    >
        <Item :item v-for="item in data.filter(v => !selected.find(s => v.id === s.id))" @click="selected.push(item)"/>
    </Container>
</template>

<style scoped>
    .inventory {
        width: 100%;
        max-height: calc(100dvh - 100px - 48px - 12px);
        display: grid;
        --cols: 4; grid-template-columns: repeat(var(--cols), 1fr);
        grid-auto-flow: row dense;
        grid-auto-rows: auto;
        align-content: start;
        &[data-disabled="true"] { *, & {
            opacity: .4;
            pointer-events: none;
        }}
    }
</style>