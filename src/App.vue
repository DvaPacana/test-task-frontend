<script setup lang="ts">
import SelectedItem from './pages/TestTask/ui/SelectedItem/SelectedItem.vue';
import SelectedUserItems from './pages/TestTask/ui/SelectedUserItem/SelectedUserItems.vue';
import Containers from './pages/TestTask/ui/Containers/Containers.vue';
</script>

<template>
    <div class="selected-items">
        <div class="item">
            <SelectedUserItems />
        </div>
        <div class="item">
            <SelectedItem />
        </div>
    </div>
    <Containers />
</template>

<style scoped>
.selected-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.item {
    margin-right: 25px;
}

.item:last-child {
    margin-right: 0;
}
</style>
