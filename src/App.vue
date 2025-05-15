<script setup lang="ts">
import { ref } from 'vue'
import ItemsBlock from './components/ItemsBlock.vue'
import { userItemsData, availableItemsData } from './data/itemsData'
import type { Item } from './types'

const userAvailableItems = ref([...userItemsData])
const userPickedItems = ref<Item[]>([])
const pickUserItem = (item: Item) => {
    if (userPickedItems.value.length < 6) {
        removeItemFromList(item, userAvailableItems.value)
        userPickedItems.value.push(item)
    }
}
const removeUserPickedItem = (item: Item) => {
    removeItemFromList(item, userPickedItems.value)
    userAvailableItems.value.push(item)
}

const otherAvailableItems = ref(availableItemsData)
const otherPickedItem = ref<Item | null>(null)
const pickOtherItem = (item: Item) => {
    if (otherPickedItem.value) {
        otherAvailableItems.value.push(otherPickedItem.value)
    }
    removeItemFromList(item, otherAvailableItems.value)
    otherPickedItem.value = item
}
const removeOtherPickedItem = (item: Item) => {
    otherPickedItem.value = null
    otherAvailableItems.value.push(item)
}

const removeItemFromList = (item: Item, list: Item[]) => {
    const itemIndex = list.findIndex(it => it.id === item.id)
    list.splice(itemIndex, 1)
}
</script>

<template>
    <div class="wrapper">
        <main>
            <div class="row">
                <ItemsBlock
                    :items="userPickedItems"
                    class="row-block"
                    @pick-item="removeUserPickedItem"
                >
                    SELECTED {{ `${userPickedItems.length}/6` }}
                </ItemsBlock>
                <ItemsBlock
                    :items="otherPickedItem ? [otherPickedItem] : null"
                    class="row-block"
                    @pick-item="removeOtherPickedItem"
                />
            </div>
            <div class="row">
                <ItemsBlock
                    :items="userAvailableItems"
                    @pick-item="pickUserItem"
                    class="row-block"
                />
                <ItemsBlock
                    :items="otherAvailableItems"
                    @pick-item="pickOtherItem"
                    class="row-block"
                />
            </div>
        </main>
    </div>
</template>

<style scoped>
main {
    min-height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.row {
    display: flex;
    gap: 50px;
}

.row-block {
    flex: 1;
}
</style>
