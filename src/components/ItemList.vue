<template>
  <div class="item-list">
    <button
      v-for="item in items"
      :key="item.id"
      class="item"
      :class="{ selected: isSelected(item) }"
      @click="handleClick(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
import selectionMixin from '@/mixins/selectionMixin';

export default {
  name: 'ItemList',
  mixins: [selectionMixin],
  props: {
    items: {
      type: Array,
      required: true,
    },
    selected: {
      type: [Array, Object],
      required: false,
    },
    max: {
      type: Number,
      default: 6,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isSelected(item) {
      if (this.single) {
        return this.selected && this.selected.id === item.id;
      }
      return this.selected.some((i) => i.id === item.id);
    },
    handleClick(item) {
      if (this.single) {
        const updated = this.selectSingle(this.selected, item);
        this.$emit('update:selected', updated);
      } else {
        const updated = this.toggleSelection(this.selected, item, this.max);
        this.$emit('update:selected', updated);
      }
    },
  },
};
</script>

<style scoped>
.item {
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  border: 1px solid #333;
}

.selected {
  background: #e0f7fa;
}
</style>
