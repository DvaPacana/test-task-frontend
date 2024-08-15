<template>
    <div class="selected-items box">
        <div class="list">
            <div class="item" v-for="(item) in selectedItems" :key="item.id" v-text="item.name" />
        </div>
        
        <p v-if="counterTextPrint" v-text="counterTextPrint" />
    </div>
</template>

<script>
// ui
export default {
    props: {
        selectedItems: { type: Array, default: () => [] },
        limit: { type: Number, default: 1}
    },
    computed: {
        items() {
            return this.selectedItems.length ? this.selectedItems : [];
        },
        counterTextPrint() {
            return this.limit > 1 ? `selected: ${this.items.length} / ${this.limit}` : ''
        }
    }
};
</script>

<style scoped>
.selected-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.box, .item {
    border: 2px solid black;
    padding: 10px;
    white-space: nowrap;
}
</style>