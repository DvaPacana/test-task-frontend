<template>
  <div class="items-panel">
    <div class="items-panel__selected">
      <div class="items-panel__selected-header">
        <div class="items-panel__selected-count">{{ selected.length }}/{{ maxItems }}</div>
        <button @click="clearAll" class="items-panel__clear-button" :disabled="selected.length === 0">
          Очистить
        </button>
      </div>
      <div class="items-panel__items-container">
        <div
            v-for="item in selected"
            :key="item.id"
            class="items-panel__item items-panel__item--selected"
            @click="toggleItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="items-panel__selectable">
      <div
          v-for="item in items"
          :key="item.id"
          class="items-panel__item"
          :class="{
            'items-panel__item--selected': isItemSelected(item),
            'items-panel__item--disabled': isItemDisabled(item)
          }"
          @click="toggleItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const defineProps = (props) => props
const defineEmits = (emits) => emits

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  selected: {
    type: Array,
    required: true
  },
  maxItems: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['toggle','clear']);

const isItemSelected = (item) => {
  return props.selected.some(selectedItem => selectedItem.id === item.id);
};

const isItemDisabled = (item) => {
  return props.maxItems > 1 &&
      props.selected.length >= props.maxItems &&
      !isItemSelected(item);
};

const toggleItem = (item) => {
  emit('toggle',item)
};

const clearAll = () => {
  emit('clear');
};
</script>

<style lang="scss" scoped>
.items-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid #cccccc;
  padding: 20px;
  user-select: none;

  &__selected {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 20px;
  }

  &__selected-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  &__selected-count {
    font-weight: bold;
  }

  &__clear-button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d32f2f;
    }

    &:disabled {
      background-color: #cccccc;
    }
  }

  &__items-container,
  &__selectable {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    min-height: 40px;
  }

  &__item {
    border: 1px solid #cccccc;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &--selected {
      background-color: #e0e0e0;
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        background-color: initial;
      }
    }
  }
}
</style>