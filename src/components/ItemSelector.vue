<template>
  <div class="item-selector">
    <div class="items-section">
      <h3>Вещи пользователя</h3>
      <div class="items-list">
        <div
          v-for="item in userItems"
          :key="item.id"
          class="item"
          :class="{ selected: isUserItemSelected(item) }"
          @click="selectUserItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="items-section">
      <h3>Доступные вещи</h3>
      <div class="items-list">
        <div
          v-for="item in availableItems"
          :key="item.id"
          class="item"
          :class="{ selected: isAvailableItemSelected(item) }"
          @click="selectAvailableItem(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userItems: {
      type: Array,
      required: true
    },
    availableItems: {
      type: Array,
      required: true
    }
  },
  emits: ['select-user-item', 'select-available-item'],
  setup(props, { emit }) {
    const isUserItemSelected = (item) => {
      return props.userSelected?.some(i => i.id === item.id)
    }

    const isAvailableItemSelected = (item) => {
      return props.singleSelected?.id === item.id
    }

    const selectUserItem = (item) => {
      emit('select-user-item', item)
    }

    const selectAvailableItem = (item) => {
      emit('select-available-item', item)
    }

    return {
      isUserItemSelected,
      isAvailableItemSelected,
      selectUserItem,
      selectAvailableItem
    }
  }
}
</script>

<style>
.item-selector {
  display: flex;
  gap: 20px;
}

.items-section {
  flex: 1;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
}

.items-section h3 {
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
}

.items-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s;
}

.item:hover {
  background-color: #f5f5f5;
}

.item.selected {
  background-color: #e0f7fa;
  border-color: #4dd0e1;
  font-weight: bold;
}
</style>
