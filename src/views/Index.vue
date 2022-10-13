<template>
  <div class="inventory">
    <div class="inventory-head">
      <select-wrapper
        multiple
        :items="selectedItems"
        :max-items-count="userClothes.length"
        @removed-user-item="userItemRemove"
      />
      <select-wrapper
        :items="selectedItem"
        @removed-item="itemRemove"
      />
    </div>
    <div class="inventory-body">
      <choose-list
        :items="userClothes"
        @selected-item="userItemSelect"
      />
      <choose-list
        :items="selectedClothes"
        @selected-item="itemSelect"
      />
    </div>
  </div>
</template>
<script>
import ChooseList from '@/components/chooses/ChooseList';
import SelectWrapper from '@/components/selects/SelectWrapper';

export default {
  name: 'Index',

  components: {
    ChooseList,
    SelectWrapper
  },

  data() {
    return {
      MAX_SELECTED_USER_ITEMS_COUNT: 6,
      MAX_SELECTED_ITEM_COUNT: 1,
      MAX_REMOVES_ITEM_COUNT: 1,
      selectedItems: [],
      selectedItem: [],
      userClothes: [
        {
          "id": 1,
          "name": "Shoes 1"
        },
        {
          "id": 2,
          "name": "Shoes 2"
        },
        {
          "id": 3,
          "name": "Shoes 3"
        },
        {
          "id": 4,
          "name": "Shoes 4"
        },
        {
          "id": 5,
          "name": "T-shirt 1"
        },
        {
          "id": 6,
          "name": "T-shirt 2"
        },
        {
          "id": 7,
          "name": "T-shirt 3"
        },
        {
          "id": 8,
          "name": "T-shirt 4"
        }
      ],
      selectedClothes: [
        {
          "id": 11,
          "name": "Jacket 1"
        },
        {
          "id": 12,
          "name": "Jacket 2"
        },
        {
          "id": 13,
          "name": "Jacket 3"
        },
        {
          "id": 14,
          "name": "Jacket 4"
        },
        {
          "id": 15,
          "name": "Hoodie 1"
        },
        {
          "id": 16,
          "name": "Hoodie 2"
        },
        {
          "id": 17,
          "name": "Hoodie 3"
        },
        {
          "id": 18,
          "name": "Hoodie 4"
        }
      ]
    };
  },

  methods: {
    userItemSelect(evt) {
      if(this.selectedItems.length < this.MAX_SELECTED_USER_ITEMS_COUNT) {
        this.selectedItems.push(evt);
        this.userClothes.splice(this.userClothes.indexOf(evt), this.MAX_REMOVES_ITEM_COUNT);
      }
    },

    userItemRemove(evt) {
      this.selectedItems.splice(this.selectedItems.indexOf(evt), this.MAX_REMOVES_ITEM_COUNT);
      this.userClothes.push(evt);
    },

    itemSelect(evt) {
      if(this.selectedItem.length < this.MAX_SELECTED_ITEM_COUNT) {
        this.selectedItem.push(evt);
        this.selectedClothes.splice(this.selectedClothes.indexOf(evt), this.MAX_REMOVES_ITEM_COUNT);
      }
    },

    itemRemove(evt) {
      this.selectedItem.splice(this.selectedItem.indexOf(evt), this.MAX_REMOVES_ITEM_COUNT);
      this.selectedClothes.push(evt);
    }
  },
};
</script>
<style scoped>
.inventory {
  display: flex;
  flex-direction: column;
  padding: 32px;
  min-height: calc(100vh - 64px);
}
.inventory-head {
  display: flex;
  justify-content: space-between;
}
.inventory-body {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 32px;
}
</style>
