<template>
    <div
            class="item"
            :class="{ selected: isSelected }"
            @click="handleClick"
    >
        {{ item }}
    </div>
</template>

<script>
export default {
    name: 'SomeItem',
    props: {
        item: Object,
        rightItem: Boolean,
        selectedItems: Array,
    },
    computed: {
        isSelected() {
            if (this.rightItem) return false;
            if (this.selectedItems) return this.selectedItems.some(i => i.id === this.item.id);
            return false
        }
    },
    methods: {
        handleClick() {
            this.$emit('select', this.item);
        }
    }
}
</script>

<style scoped>
.item {
    padding: 10px;
    border: 2px solid black;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item.selected {
    background-color: #a0d8f7;
    border-color: #007acc;
}
</style>
