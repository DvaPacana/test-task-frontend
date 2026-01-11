<script setup>
import { ref, computed } from 'vue'
import ItemBlock from './components/ItemBlock.vue'
import { userItems, choiceItems } from './data/items.js'

const selectedUserItems = ref([])

const selectedChoiceItem = ref(null)

const selectedChoiceItems = computed(() => {
  return selectedChoiceItem.value ? [selectedChoiceItem.value] : []
})

const handleUserItemClick = (item) => {
  console.log(item);

  const index = selectedUserItems.value.findIndex((i) => i.id === item.id)

  if (index !== -1) {
    selectedUserItems.value.splice(index, 1)
  } else {
    if (selectedUserItems.value.length < 6) {
      selectedUserItems.value.push(item)
    }
  }
}

const handleChoiceItemClick = (item) => {
  if (selectedChoiceItem.value?.id === item.id) {
    selectedChoiceItem.value = null
  } else {
    selectedChoiceItem.value = item
  }
}
</script>

<template>
  <div class="app">
    <h1>Тестовое задание VueJS</h1>

    <div class="top-blocks">
      <ItemBlock
        title="Выбранные вещи пользователя"
        :items="selectedUserItems"
        :selected-items="[]"
        empty-message="Выберите от 1 до 6 вещей снизу"
        @item-click="handleUserItemClick"
      />

      <ItemBlock
        title="Выбранная вещь на выбор"
        :items="selectedChoiceItems"
        :selected-items="[]"
        empty-message="Выберите 1 вещь снизу"
        @item-click="handleChoiceItemClick"
      />
    </div>

    <div class="bottom-blocks">
      <ItemBlock
        title="Вещи пользователя"
        hint="Можно выбрать от 1 до 6 вещей"
        :items="userItems"
        :selected-items="selectedUserItems"
        @item-click="handleUserItemClick"
      />

      <ItemBlock
        title="Вещи на выбор"
        hint="Можно выбрать только 1 вещь"
        :items="choiceItems"
        :selected-items="selectedChoiceItems"
        @item-click="handleChoiceItemClick"
      />
    </div>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
}

.top-blocks,
.bottom-blocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
