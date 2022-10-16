<template>
  <Item
    v-for="item in items"
    :key="item.id"
    :name="item.name"
    @click="add(item)"
  />
</template>

<script>
import { ItemComponent } from '../../entities/item'
export default {
  name: 'ListComponent',
  props: {
    items: Array,
  },
  components: {
    Item: ItemComponent,
  },

  emits: ['on-item-click'],

  methods: {
    add(item) {
      this.$emit('on-item-click', item)
    },
  },
}
</script>

<style scoped>
.item {
  border: 2px solid black;
  padding: 5px;
  width: max-content;
  height: 40px;

  cursor: pointer;
}
</style>
