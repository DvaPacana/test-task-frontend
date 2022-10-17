<template>
  <div class="choose-list">
    <choose-item
      v-for="item in items"
      :key="item.id"
      :choose="item"
      @click="$emit('selected-item', item)"
    />
  </div>
</template>

<script>
import ChooseItem from '@/components/chooses/ChooseItem';

export default {
  name: 'ChooseList',
  components: { ChooseItem },

  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  emits: ['selected-item'],
};
</script>

<style scoped>
.choose-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  gap: 24px;
  width: 47%;
  padding: 16px;
  border: 2px solid chocolate;
  border-radius: 4px;
  background-color: cyan;
}
</style>
