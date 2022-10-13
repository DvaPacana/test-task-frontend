<template>
  <div class="select-wrapper">
    <div class="select-wrapper__list">
      <choose-item
        v-for="item in items"
        :key="item.id"
        :choose="item"
        @click="$emit('removed-item', item)"
      />
    </div>
    <div
      v-if="multiple"
      class="select-wrapper__count"
    >
      Selected: {{ items.length }} / {{ maxItemsCount }}
    </div>
  </div>
</template>

<script>
import ChooseItem from '@/components/chooses/ChooseItem';

export default {
  name: 'SelectWrapper',
  components: { ChooseItem },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },

    maxItemsCount: {
      type: Number,
      default: 1
    },

    multiple: Boolean
  },

  emits: ['removed-item'],
};
</script>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 16px;
  border: 2px solid chocolate;
  border-radius: 4px;
  background-color: cyan;
}
.select-wrapper__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.select-wrapper__count {
  text-align: center;
  color: black;
  margin-top: 64px;
}
</style>
