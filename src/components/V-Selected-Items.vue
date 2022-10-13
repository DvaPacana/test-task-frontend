<template>
    <div class="selected-cards">
        <div class="item" v-for="item in items" :key="item.id" @click="removeSelectedItems(item.id)">
            <span>{{item.id}}</span>
            <h2>{{item.name}}</h2>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'VSelectedItems',
    methods: {
        ...mapMutations(['removeSelectedItems'])
    },
    computed: {
        ...mapState({
            items: state => state.selectedItems
        })
    }
}
</script>

<style scoped>
.selected-cards {
    padding: 5px 15px;
    border: 3px solid rgb(96, 133, 27);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
}
.item {
    padding: 5px 15px;
    border: 3px solid goldenrod;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
}
.item:hover {
    background: rgba(132 118 118 / 7%);
}
</style>