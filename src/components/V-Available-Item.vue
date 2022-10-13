<template>
    <div class="available-card">
        <div v-for="item in items" class="item" :key="item.id" @click="setSelectedItem(item.id)">
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'VAvailableItem',
    methods: {
        ...mapMutations(['setSelectedItem'])
    },
    computed: {
        ...mapState({
            items: state => state.availableItem
        })
    }
}
</script>

<style scoped>
.available-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-rows: repeat(auto-fit, minmax(100px, 100px)); */
    grid-gap: 15px;
}

.item {
    padding: 5px 15px;
    border: 3px solid rgb(34, 153, 34);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
}

.item:hover {
    background: rgba(132 118 118 / 7%);
}
</style>