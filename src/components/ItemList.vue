<template>
  <div class="items">
    <h3>{{ title }}</h3>
    <ul class="items__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="item"
        :class="{ item_selected: isSelected(item.id) }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    selectedItem: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    }
  },
  methods: {
    isSelected(id) {
      if (this.multiSelect) {
        return this.selectedItems.some((item) => item.id === id)
      } else {
        return this.selectedItem?.id === id
      }
    },
    handleClick(item) {
      if (this.multiSelect) {
        this.$emit('toggle', item)
      } else {
        // Если текущая вещь уже выбрана, снимаем выбор
        if (this.selectedItem?.id === item.id) {
          this.$emit('select', null)
        } else {
          this.$emit('select', item)
        }
      }
    }
  }
}
</script>

<style scoped>
.items {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.items__list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
