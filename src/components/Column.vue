<script setup lang="ts"></script>

<template>
    <div class="column">
        <div class="column__head">
            <slot name="head" />
        </div>

        <div class="column__main">
            <slot name="main" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.column {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    max-width: 600px;
    width: 100%;

    &__head,
    &__main {
        display: flex;
        flex-flow: row wrap;
        align-items: start;
        align-content: space-between;
        justify-content: start;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
    }

    &__head {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 325px;
        width: 100%;
        margin-bottom: 25px;
        min-height: 200px;
    }

    &__main {
        flex: 1;
    }
}
</style>
