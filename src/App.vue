<script setup lang="ts">
import { useItemsStore } from '@/stores/items'
import CartPreviewBlock from '@/components/CartPreviewBlock.vue'
import ItemPreviewBlock from '@/components/ItemPreviewBlock.vue'
import ShowcaseBlock from '@/components/ShowcaseBlock.vue'

const itemsStore = useItemsStore()
</script>

<template>
    <main class="app">
        <div class="app__previews-wrapper">
            <cart-preview-block
                :selected-count="itemsStore.selectedFromCart.length"
                @remove="(id) => itemsStore.removeFromCartSelection(id)"
            />
            <item-preview-block
                :name="itemsStore.selectedPreview?.name"
                @remove="() => itemsStore.removeFromPreview()"
            />
        </div>
        <div class="app__previews-wrapper">
            <showcase-block
                :items="itemsStore.normalizedCartItems"
                @select="(id) => itemsStore.selectFromCart(id)"
            />
            <showcase-block
                :items="itemsStore.normalizedItems"
                @select="(id) => itemsStore.selectForPreview(id)"
            />
        </div>
    </main>
</template>

<style scoped>
.app {
    width: max-content;
    margin: auto;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
}

.app__previews-wrapper {
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 1.5rem;
}
</style>
