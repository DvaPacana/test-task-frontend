<script setup>
defineProps({
  item: Object,
  isSelected: Boolean
});
</script>

<template>
    <div class="item" :id="item.id" @click="$emit('chooseItem', item.id)">
        <span class="item__name">{{ item.name }}</span>
    </div>
</template>


<style lang="scss" scoped>
.item {
    margin-left: auto;
    display: flex;
    width: 80px;
    height: 60px;
    place-items: center;
    place-content: center;
    border: 5px solid #453838;
    cursor: pointer;
}
</style>