<script setup lang="ts">
import { ref } from 'vue';
import Shop from '../components/Shop.vue';
import Card from '../components/Card.vue';
import Items from '../interfaces/Items';
import itemsLeft from '../../public/assets/dummy/ItemsLeft.json';
import itemsRight from '../../public/assets/dummy/ItemsRight.json';


const addedItems = ref<Items[]>([]);
const tempItems = ref<Map<number, Items>>(new Map());
const targetedElement = ref(<Items>{})


const getItem = (id: number, name: string): void => {
  targetedElement.value = { id, name };
  console.log(targetedElement.value)
}

const addItems = (id: number, name: string) => {
  if (!tempItems.value.has(id)) {
    if (tempItems.value.size >= 6) {
      return;
    }
    const newItem = { id, name };
    tempItems.value.set(id, newItem);
    addedItems.value = Array.from(tempItems.value.values());
    console.log(addedItems.value);
  } 
};



</script>

<template>
      <div>
          <div class="block-1">
        <div class="shop-container-1">
          <Shop 
            :info="addedItems"
          />
        </div>
        <div class="shop-container-1__right">
          <Card
            :right="'right'"
            :targeted-element="targetedElement"
        />
        </div>
      
    </div>
    <div class="block-2">
        <div class="shop-container-2">
          <Shop 
            :info="itemsLeft"
            msg="Vite + Vue"
            @getItem="addItems"
            :cursor="true"
          />
        </div>
        <div class="shop-container-2">
          <Shop 
            :info="itemsRight"
            @getItem="getItem"
            :cursor="true"
        />
        </div>  
    </div>
      </div>
      
  
    
</template>

<style scoped>

.block-1 {
  display: flex;
  gap: 32px;
  min-height: 10vh;
  margin-bottom: 32px;
}


.block-2 {
  display: flex;
  gap: 32px;
  height: 100vh;
}

.shop-container-1 {
  min-width: 100px;
}
.shop-container-1__right {
  margin-left: auto;
}


.shop-container-2 {
  min-width: 500px;
}
.shop-container-1,
.shop-container-2 {
  border: 1px solid grey;
  padding: 20px;
  border-radius: 8px;
}

</style>
