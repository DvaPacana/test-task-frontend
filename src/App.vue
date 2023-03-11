<template>
  <div class="container">
    <div class="container__row">
      <div class="container__area container__area_small">
        <Item
          v-for="(item, index) in selectedUserItems"
          @onClicked="deleteSelectedUserItem(index)"
          :name="item.name"
          :key="item.id"
        />
        <p class="item-count">{{ selectedUserItemsCount }}</p>
      </div>
      <div class="container__area container__area_small">
        <Item
          v-if="selectedCommonItem"
          @onClicked="() => selectedCommonItem = null"
          :name="selectedCommonItem.name"
        />
      </div>
    </div>
    <div class="container__row">
      <div class="container__area">
        <Item
          v-for="item in userItems"
          @onClicked="setSelectedUserItems(item)"
          :name="item.name"
          :key="item.id"
        />
      </div>
      <div class="container__area">
        <Item
          v-for="item in userItems"
          @onClicked="() => selectedCommonItem = item"
          :name="item.name"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
import ITEMS from './assets/js/_items.js'
const [USER_ITEMS, COMMON_ITEMS] = ITEMS;

export default {
  name: "app",
  components: {
    Item,
  },
  data() {
    return {
      selectedUserItems: [],
      selectedCommonItem: null,
      userItems: [],
      commonItems: [],
    };
  },
  computed: {
    selectedUserItemsCount () {
      return `Selected ${this.selectedUserItems.length}  / 6`; 
    }
  },
  created () {
    this.userItems = USER_ITEMS;
    this.commonItems = COMMON_ITEMS;
  },
  methods: {
    setSelectedUserItems(item) {
      if (this.selectedUserItems.indexOf(item) == -1 && this.selectedUserItems.length < 6) {
        this.selectedUserItems.push(item);
      }
    },
    deleteSelectedUserItem(index) {
      this.selectedUserItems.splice(index, 1);
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("/src/fonts/Roboto-Regular.ttf") format("font-truetype"),
    url("/src/fonts/roboto-regular.woff2") format("woff2"),
    url("/src/fonts/roboto-regular.woff") format("woff");
}

* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Roboto";
}

.container {
  padding: 40px;
}

.container__row {
  display: flex;
}

.container__row:first-child {
  margin-bottom: 20px;
}

.container__area {
  padding: 8px 8px 0 8px;
  flex: 1;
  border: 4px solid #000;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.container__area_small {
  position: relative;
  min-height: 114px;
  padding-bottom: 20px;
}

.container__area:last-child {
  margin-left: 20px;
}

.container__area .item {
  margin-bottom: 8px;
  margin-left: 8px;
}

.item-count {
  position: absolute;
  bottom: 4px;
  right: 8px;
}

@media screen and (max-width: 585px) {
  .input {
    width: 228px;
  }
}
</style>
