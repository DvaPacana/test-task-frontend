<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="c-main">        
      
        <div class="c-block-multiple-items">   
          <h3>Выбранные вещи</h3>       
          <div>
            <div class="c-list-items c-width-50 c-flex-col">
              <div class="c-d-flex c-flex-row c-selected-items-user">
                <div v-for="item in selectedItemsUser" class="c-item" v-bind:key="item.id">
                  <span>{{ item.name }}</span>
                </div>
              </div>              
              <div class="c-footer">Выбрано: {{ selectedItemsUser.length }}/{{ maxCountSelected }}</div>
            </div>
            
          </div>
          <h3>Вещи у пользователя</h3>
          <div class="c-list-items-for-select">
            <div v-for="item in itemsUser" v-on:click="clickMultipleItems(item)" v-bind:key="item.id" class="c-item no-select" 
              :class="{'c-selected-item': isSelectedItemsUser(item)}">{{ item.name }}</div>
          </div>
        </div>

        <div class="c-block-single-items">
          <h3>Выбранная вещь</h3>
          <div class="c-d-flex c-flex-row c-flex-end">
            <div class="c-item c-width-50 c-single-select">
              <span class="с-current-selected">{{ selectedSingleItem?selectedSingleItem.name: 'Выберите вещь' }}</span>
            </div>
          </div>
          <h3>Вещи на выбор</h3>
          <div class="c-list-items-for-select">
            <div v-for="item in itemsForSingleSelect" v-on:click="clickSingleItems(item)" v-bind:key="item.id" class="c-item no-select"
              :class="{'c-selected-item': selectedSingleItem?.id == item.id}">{{ item.name }}</div>
          </div>
        </div>        
      
    </div>
  </div>  
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    msg: {
        type: String,
        required: false,
        default: () => { return 'Тестовое задание' }
    }
  });

  const maxCountSelected = 6;
  let selectedItemsUser = ref([]);
  const itemsUser = [
    {"id": 1, "name": "Shoes 1"},
    {"id": 2, "name": "Shoes 2"},
    {"id": 3, "name": "Shoes 3"},
    {"id": 4, "name": "Shoes 4"},
    {"id": 5, "name": "T-shirt 1"},
    {"id": 6, "name": "T-shirt 2"},
    {"id": 7, "name": "T-shirt 3"},
    {"id": 8, "name": "T-shirt 4"}
  ];
  let selectedSingleItem = ref(null);
  let itemsForSingleSelect = ref([
    {"id": 11, "name": "Jacket 1"},
    {"id": 12, "name": "Jacket 2"},
    {"id": 13, "name": "Jacket 3"},
    {"id": 14, "name": "Jacket 4"},
    {"id": 15, "name": "Hoodie 1"},
    {"id": 16, "name": "Hoodie 2"},
    {"id": 17, "name": "Hoodie 3"},
    {"id": 18, "name": "Hoodie 4"}
  ]);
  function isSelectedItemsUser(item) {
    return selectedItemsUser.value.find(el => el.id === item.id);
  }
  function clickMultipleItems(item) {
    if(isSelectedItemsUser(item)) {
      selectedItemsUser.value.splice(selectedItemsUser.value.findIndex(el => { return el.id == item.id}), 1);
    } else if(selectedItemsUser.value.length < maxCountSelected) {
      selectedItemsUser.value.push(item);
    } else if(selectedItemsUser.value.length == maxCountSelected) {
      alert('Выбрано максимальное кол-во вещей.')
    }
  }
  function clickSingleItems(event) {
    if(selectedSingleItem.value?.id == event.id) {
      selectedSingleItem.value = null;
    } else {
      selectedSingleItem.value = event;
    }    
  }
  
</script>

<style scoped>
  .c-main {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
  }
  .c-block-multiple-items,
  .c-block-single-items {
    display: flex;
    flex-direction: column;    
  }
  .c-width-50 {
    width: 50%;
    flex-basis: 50%;
  }
  .c-list-items,
  .c-list-items-for-select {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    margin: 10px;
    flex-wrap: wrap;
    align-content: flex-start;
  }  
  .c-list-items-for-select {
    height: 30vh;
  }  
  .c-d-flex {
    display: flex;
  }  
  .c-flex-row {    
    flex-direction: row;    
  }
  .c-flex-col {
    flex-direction: column;
  }
  .c-flex-end {
    justify-content: flex-end;
  }    
  .c-selected-items-user {
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 104px;;
  }
  .c-selected-items-user .c-item {
    flex-basis: calc(33% - 21px);
  }
  .c-footer {
    width: 100%;
    text-align: center;
  }  
  .c-item {
    border: 1px solid black;
    margin: 10px;
    flex-basis: calc(25% - 22px);
    height: 30px;
  }  
  .c-selected-item {
    background-color: lightgray;
  }
  .c-block-single-items .c-single-select {
    height: 128px;
    align-items: center;
    display: flex;
    justify-content: space-around;    
  }
  .no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
</style>
