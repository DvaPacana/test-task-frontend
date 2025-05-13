<script setup lang="ts">
import SmallItemPreview from '@/components/SmallItemPreview.vue'
import type { IItem } from '@/stores/items'

defineProps<{
    items: IItem[]
}>()

const emit = defineEmits<{
    select: [number]
}>()
</script>

<template>
    <div class="showcase-block">
        <div class="showcase-block__items-wrapper">
            <small-item-preview
                v-for="item of items"
                :key="item.id"
                :name="item.name"
                @click="emit('select', item.id)"
            />
        </div>
    </div>
</template>

<style scoped>
.showcase-block {
    min-width: 30rem;
    max-width: 30rem;
    height: 50rem;
    border: 0.2rem solid #000;
    padding: 0.25rem;
}

.showcase-block__items-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
}
</style>
