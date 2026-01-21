<script setup>
    import {ref, onMounted} from 'vue';
    import dataLeft from './assets/data-left.json';
    import dataRight from './assets/data-right.json';
    import GoodItem from './components/GoodItem.vue';

    const LIMIT_SELECT = 6;
    const selectedItems = ref([]);
    const selectedItemOrder = ref({});

    const addForUser = (item)=> {
        const exists = selectedItems.value.find(selected => selected.id === item.id)

        if (!exists) {
            selectedItems.value.push({...item});
            if (selectedItems.value.length > LIMIT_SELECT) {
                selectedItems.value.splice(0,1);
            }
        }
    };

    const addForOrder = (item)=> {
        selectedItemOrder.value = {...item}
    };

</script>
<template>
  <h1>Test from Ivanishko Alex</h1>
  <header>
    <div class="selected-items-container">
      <template v-if="selectedItems.length === 0" class="empty-message">
        Товары не выбраны
      </template>
      <template v-else >
        <GoodItem
          v-for="item in selectedItems"
          :key="item.id"
          :id="item.id"
          :name="item.name"
        />
        <div class="selected-item-count">Selected {{ selectedItems.length }} / {{ LIMIT_SELECT }}</div>
      </template>
    </div>
    <div class="selected-item">
      <h2>{{ selectedItemOrder.name }}</h2>
    </div>
  </header>
  <div class="content">
    <div class="left-sidebar">
      <GoodItem v-for="item in dataLeft" :key="item.id" :id="item.id" :name="item.name" @click="addForUser(item)"/>
    </div>
    <div class="right-sidebar">
      <GoodItem v-for="item in dataRight" :key="item.id" :id="item.id" :name="item.name" @click="addForOrder(item)" />
    </div>
  </div>
</template>

<style scoped>
  header {

  }
  header, .content, .selected-items-container {
    display: flex;

  }
  header {
    justify-content: space-between;
    align-items: center;
  }
  .selected-items-container {
    border: 2px solid #000;
    padding: 20px;
    margin: 20px;
    flex-wrap: wrap;
    width: 50%;
    min-height: 198px
  }
  .selected-item-count {
    width: 100%;
  }
  .selected-item {
    height: 200px;
    width: 150px;
    padding: 20px;
    border: 2px solid #000;
  }
  .left-sidebar, .right-sidebar {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #000;
    padding: 20px;
    margin: 20px;
    flex-grow: 1;
  }
</style>
