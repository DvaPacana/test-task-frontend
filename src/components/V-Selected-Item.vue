<template>
    <div class="selected-card">
        <div v-if="'id' in item" class="item" @click="removeSelectedItem">
            <span>{{item.id}}</span>
            <h2>{{item.name}}</h2>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'VSelectedItem',
    methods: {
        ...mapMutations([
            'removeSelectedItem'
        ])
    },
    computed: {
        ...mapState({
            item: state => state.selectedItem
        })
    }
}
</script>

<style scoped>
.selected-card {
    padding: 5px 15px;
    border: 3px solid rgb(22, 34, 97);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 15px;
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