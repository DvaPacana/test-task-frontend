<template>
  <div class="selected-items">
    <div class="selected-section">
      <h3>Выбранные вещи пользователя</h3>
      <div class="selected-list">
        <div v-for="item in userSelected" :key="item.id" class="selected-item">
          {{ item.name }}
        </div>
        <div v-if="userSelected.length === 0" class="empty-message">
          Нет выбранных вещей
        </div>
      </div>
    </div>
    <div class="selected-section">
      <h3>Выбранная вещь из доступных</h3>
      <div class="selected-list">
        <div v-if="singleSelected" class="selected-item">
          {{ singleSelected.name }}
        </div>
        <div v-else class="empty-message">
          Вещь не выбрана
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userSelected: {
      type: Array,
      required: true
    },
    singleSelected: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>
.selected-items {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.selected-section {
  flex: 1;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
}

.selected-section h3 {
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
}

.selected-list {
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.selected-item {
  padding: 8px 12px;
  background-color: #f0f0f0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.empty-message {
  color: #999;
  font-style: italic;
  width: 100%;
  text-align: center;
  padding: 10px;
}
</style>
