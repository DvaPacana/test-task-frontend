<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <h2>Выбранные вещи пользователя</h2>
        <ul class="top__left__list">
          <li v-for="item in selectedItems" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <div class="right">
        <h2>Выбранная вещь на выбор</h2>
        <div v-if="selectedItem.name" class="top__right__item">{{ selectedItem.name }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <h2>Вещи у пользователя</h2>
        <ul>
          <li v-for="item in userItems" :key="item.id" @click="selectItem(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <h2>Вещи на выбор</h2>
        <ul>
          <li v-for="item in choiceItems" :key="item.id" @click="selectChoice(item)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userItems = [
  {
    id: 1,
    name: 'Shoes 1'
  },
  {
    id: 2,
    name: 'Shoes 2'
  },
  {
    id: 3,
    name: 'Shoes 3'
  },
  {
    id: 4,
    name: 'Shoes 4'
  },
  {
    id: 5,
    name: 'T-shirt 1'
  },
  {
    id: 6,
    name: 'T-shirt 2'
  },
  {
    id: 7,
    name: 'T-shirt 3'
  },
  {
    id: 8,
    name: 'T-shirt 4'
  }
];

const choiceItems = [
  {
    id: 11,
    name: 'Jacket 1'
  },
  {
    id: 12,
    name: 'Jacket 2'
  },
  {
    id: 13,
    name: 'Jacket 3'
  },
  {
    id: 14,
    name: 'Jacket 4'
  },
  {
    id: 15,
    name: 'Hoodie1'
  },
  {
    id: 16,
    name: 'Hoodie2'
  },
  {
    id: 17,
    name: 'Hoodie3'
  },
  {
    id: 18,
    name: 'Hoodie4'
  }
];

const selectedItems = ref([]);
const selectedItem = ref({});

const selectItem = (item) => {
  if (selectedItems.value.length >= 6) return;
  selectedItems.value.push(item);
};

const selectChoice = (item) => {
  selectedItem.value = item;
};
</script>

<style scoped>
.container {
  margin: 0 30px;
  display: grid;
}

.top,
.bottom {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.top .left,
.top .right {
  width: 40%;
}

.bottom {
  gap: 30px;
}

.left,
.right {
  width: 50%;
  text-align: center;
  border: 2px solid black;
}

ul {
  list-style: none;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.top__left__list {
  grid-template-columns: repeat(3, 1fr);
}

.top__right__item,
li {
  margin: 0 auto;
  padding: 10px 15px;
  cursor: pointer;
  border: 1px solid black;
}

.top__right__item {
margin-left: 20%;
margin-right: 20%;
}
</style>

