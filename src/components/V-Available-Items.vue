<template>
    <div class="available-cards">
        <div class="item" v-for="item in items" :key="item.id" @click="setSelectedItems(item.id)">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'VAvailableItems',
    methods: {
        ...mapMutations(['setSelectedItems'])
    },
    computed: {
        ...mapState({
            items: state => state.availableItems
        })
    }
}
</script>

<style scoped>
.available-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-rows: repeat(auto-fit, minmax(100px, 100px)); */
    grid-gap: 15px;
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