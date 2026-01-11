<script setup lang="ts">
interface Item {
  id: number,
  name: string
}

interface ListItems {
  arrItems: Item[]
}

const props = defineProps<ListItems>()
const emit = defineEmits<{
  (emit: 'clickItem', value: Item): void
}>()
</script>

<template>
  <section class="list">
    <ul class="list__items">
      <li @click="emit('clickItem', item)" class="list__items-item" v-for="item in arrItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.list {
 cursor: pointer;
  &__items {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 30px;


    &-item {
      box-sizing: border-box;
      border: 4px solid;
      padding: 10px;
      width: fit-content;
    }
  }
}


ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
