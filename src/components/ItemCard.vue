<template>
  <div
    class="item-card"
    :class="{ selected: isSelected }"
    @click="$emit('click')"
  >
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'ItemCard',

  props: {
    item: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.item-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border: 2px solid #333;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  background: #fff;
  transition: background 0.15s, border-color 0.15s;
}

.item-card:hover {
  background: #f0f0f0;
}

.item-card.selected {
  background: #d0e8ff;
  border-color: #2a7ae2;
}
</style>
