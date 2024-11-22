<script setup lang="ts">
import type { ItemTypes } from '@/types/item.types';

const { isSelected, item, isDisable } = defineProps<{
    isSelected?: boolean;
    item: ItemTypes;
    isDisable?: boolean;
}>();

const emit = defineEmits<{
    (emit: 'select', item: ItemTypes): void;
    (emit: 'removeItem', item: ItemTypes): void;
}>();
</script>

<template>
    <div
        class="item"
        :class="{ 'is-disabled': isDisable }"
        @click="emit('select', item)"
    >
        <button
            v-if="isSelected"
            type="button"
            class="item__delete"
            @click="emit('removeItem', item)"
        />
        <img src="../assets/logo.svg" class="item__img" alt="Vue logo" />
        <p class="item__name">{{ item.name }}</p>
    </div>
</template>

<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    min-width: 90px;
    min-height: 50px;
    padding: 10px;
    transition: border-color 0.5ms ease;
    margin: 5px;
    background-color: transparent;
    position: relative;

    &:hover,
    &.is-active {
        border-color: blueviolet;
        cursor: pointer;
    }

    &.is-disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    &__name {
        margin-top: 10px;
    }

    &__img {
        max-width: 20px;
    }

    &__delete {
        cursor: pointer;
        position: absolute;
        border: none;
        background-color: transparent;
        right: 5px;
        top: 5px;
        opacity: 0.7;
        width: 10px;
        height: 10px;

        &:hover {
            opacity: 1;
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            width: 10px;
            height: 1px;
            background: gray;
            left: 0;
        }

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }
    }
}
</style>
