<script>
  export default {
    name: 'ListItem',
    props: {
      item: {
        id: [Number, String],
        name: String,
        selected: Boolean
      }
    }
  }
</script>

<template lang="pug">
  .list-item(@click="$emit('click', item.id)" :class="item.selected && 'selected'")
    .list-item__content
      slot
</template>

<style scoped lang="scss">
  .list-item {
    position: relative;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    &.selected {
      border-color: orange;
    }

    &__content {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
</style>