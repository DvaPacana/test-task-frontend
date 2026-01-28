<template>
  <div
    :class="['item', { selected: isSelected }]"
    @click="handleClick"
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
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (props.clickable) {
        emit('click', props.item)
      }
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.item {
  border: 2px solid #000;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item:hover {
  background-color: #f0f0f0;
}

.item.selected {
  background-color: #d0d0d0;
}
</style>
