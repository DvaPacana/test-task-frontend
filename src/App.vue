<script setup lang="ts">
import { computed, reactive, ref, type Reactive, type Ref } from 'vue';

import Item from './components/Item.vue';
import Column from './components/Column.vue';

import { DEFAULT_LIST_LEFT, DEFAULT_LIST_RIGHT } from './constants';

import type { ItemTypes } from './types/item.types';

let listLeft: Reactive<ItemTypes[]> = reactive(DEFAULT_LIST_LEFT);
let listRight: Reactive<ItemTypes[]> = reactive(DEFAULT_LIST_RIGHT);
let listManySelectedItems: Reactive<ItemTypes[]> = reactive([]);
let listOnceSelectedItem: Reactive<ItemTypes[]> = reactive([]);

const isDisableOnceItem = computed((): boolean => {
    return listOnceSelectedItem.length === 1;
});

const isDisableManyItem = computed((): boolean => {
    return listManySelectedItems.length === 6;
});

const selectItem = (item: ItemTypes, once: boolean = false) => {
    if (once) {
        listRight = listRight.filter(
            (currentItem) => currentItem.id !== item.id,
        );
        listOnceSelectedItem.push(item);
        return;
    }

    listLeft = listLeft.filter((currentItem) => currentItem.id !== item.id);
    listManySelectedItems.push(item);
};

const removeItem = (item: ItemTypes, isLeftSide: boolean = false) => {
    if (isLeftSide) {
        const index = listManySelectedItems.findIndex(
            (currentItem) => currentItem.id === item.id,
        );
        listManySelectedItems.splice(index, 1);

        listLeft.push(item);
        return;
    }

    listOnceSelectedItem.splice(0, 1);
};
</script>

<template>
    <div class="app">
        <Column class="app__column-left">
            <template #head>
                <div class="app__wrapper-items-head">
                    <Item
                        v-for="item in listManySelectedItems"
                        :key="item.id"
                        :item="item"
                        is-selected
                        @remove-item="removeItem($event, true)"
                    />
                </div>
                <p v-if="listManySelectedItems.length">
                    Выбрано: {{ listManySelectedItems.length }} / 6
                </p>
            </template>

            <template #main>
                <Item
                    v-for="item in listLeft"
                    :key="item.id"
                    :item="item"
                    :is-disable="isDisableManyItem"
                    @select="selectItem($event)"
                />
            </template>
        </Column>

        <Column class="app__column-right">
            <template #head>
                <Item
                    v-for="item in listOnceSelectedItem"
                    :key="item.id"
                    :item="item"
                    is-selected
                    @remove-item="removeItem($event)"
                />
                <p v-if="listOnceSelectedItem.length">
                    Выбрано: {{ listOnceSelectedItem.length }} / 1
                </p>
            </template>

            <template #main>
                <Item
                    v-for="item in listRight"
                    :key="item.id"
                    :item="item"
                    :is-disable="isDisableOnceItem"
                    @select="selectItem($event, true)"
                />
            </template>
        </Column>
    </div>
</template>

<style scoped lang="scss">
.app {
    display: flex;
    justify-content: space-between;

    &__column-right {
        align-items: flex-end;
    }

    &__wrapper-items-head {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
    }
}
</style>
