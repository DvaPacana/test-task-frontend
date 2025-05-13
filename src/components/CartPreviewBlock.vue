<script setup lang="ts">
import { computed } from 'vue'
import { MAX_SELECTED_CART_ITEMS } from '@/constants/limitations'
import { useItemsStore } from '@/stores/items'
import SmallItemPreview from '@/components/SmallItemPreview.vue'

const props = defineProps<{
    selectedCount: number
}>()

const emit = defineEmits<{
    remove: [number]
}>()

const itemsStore = useItemsStore()

const selectedLabel = computed(() => `${props.selectedCount} / ${MAX_SELECTED_CART_ITEMS}`)
</script>

<template>
    <div class="cart-preview-block">
        <div class="cart-preview-block__selected-wrapper">
            <small-item-preview
                v-for="item of itemsStore.selectedFromCart"
                :key="item.id"
                :name="item.name"
                @click="emit('remove', item.id)"
            />
        </div>
        <div class="cart-preview-block__selected-count">selected: {{ selectedLabel }}</div>
    </div>
</template>

<style scoped>
.cart-preview-block {
    width: 15rem;
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 0.2rem solid #000;
    padding: 0.25rem;
}

.cart-preview-block__selected-wrapper {
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>
