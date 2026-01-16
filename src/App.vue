<template>
  <div class="app">
    <h1 class="app__title">Тестовое задание VueJS</h1>

    <div class="section section--top">
      <SectionContainer>
        <SectionTitle>Выбранные вещи пользователя</SectionTitle>
        <ItemList :items="selectedUserItems" emptyText="Выберите вещи (от 1 до 6)" />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Выбранная вещь на выбор</SectionTitle>
        <ItemList :items="[selectedChoiceItem].filter(Boolean)" emptyText="Выберите вещь" />
      </SectionContainer>
    </div>

    <div class="section section--bottom">
      <SectionContainer>
        <SectionTitle>Вещи у пользователя</SectionTitle>
        <ItemGrid
          :items="userItems"
          :isSelected="isUserItemSelected"
          @itemClick="toggleUserItem"
        />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Вещи на выбор</SectionTitle>
        <ItemGrid
          :items="choiceItems"
          :isSelected="isChoiceItemSelected"
          @itemClick="selectChoiceItem"
        />
      </SectionContainer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionContainer from './components/SectionContainer.vue'
import SectionTitle from './components/SectionTitle.vue'
import ItemList from './components/ItemList.vue'
import ItemGrid from './components/ItemGrid.vue'

const userItems = ref([
  { id: 1, name: "Shoes 1" },
  { id: 2, name: "Shoes 2" },
  { id: 3, name: "Shoes 3" },
  { id: 4, name: "Shoes 4" },
  { id: 5, name: "T-shirt 1" },
  { id: 6, name: "T-shirt 2" },
  { id: 7, name: "T-shirt 3" },
  { id: 8, name: "T-shirt 4" }
])

const choiceItems = ref([
  { id: 11, name: "Jacket 1" },
  { id: 12, name: "Jacket 2" },
  { id: 13, name: "Jacket 3" },
  { id: 14, name: "Jacket 4" },
  { id: 15, name: "Hoodie 1" },
  { id: 16, name: "Hoodie 2" },
  { id: 17, name: "Hoodie 3" },
  { id: 18, name: "Hoodie 4" }
])

const selectedUserItemIds = ref([])
const selectedChoiceItemId = ref(null)

const selectedUserItems = computed(() => {
  return userItems.value.filter(item => selectedUserItemIds.value.includes(item.id))
})

const selectedChoiceItem = computed(() => {
  return choiceItems.value.find(item => item.id === selectedChoiceItemId.value) || null
})

const isUserItemSelected = (id) => {
  return selectedUserItemIds.value.includes(id)
}

const isChoiceItemSelected = (id) => {
  return selectedChoiceItemId.value === id
}

const toggleUserItem = (item) => {
  const index = selectedUserItemIds.value.indexOf(item.id)

  if (index > -1) {
    selectedUserItemIds.value.splice(index, 1)
  } else {
    if (selectedUserItemIds.value.length < 6) {
      selectedUserItemIds.value.push(item.id)
    }
  }
}

const selectChoiceItem = (item) => {
  if (selectedChoiceItemId.value === item.id) {
    selectedChoiceItemId.value = null
  } else {
    selectedChoiceItemId.value = item.id
  }
}
</script>

<style scoped>
.app {
  padding: 20px;
}

.app__title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section--top {
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .section {
    grid-template-columns: 1fr;
  }
}
</style>
