<template>
  <div class="selected">
    <div class="selected__up">
      <div class="selected__up-left">
        <SelectedItemList
            :selected-items="selectedItemsLeft"
            @remove="removeItem"
        />
        <p>selected: {{ selectedItemsLeft.length }} / 6</p>
      </div>
      <div class="selected__up-right">
        <h3>{{ selectedItemRight ? '' : 'Selected Item' }}</h3>
        <div v-if="selectedItemRight" class="selected__item">
          {{ selectedItemRight.name }}
          <i class="mdi mdi-delete-outline" @click="removeItem(selectedItemRight)"></i>
        </div>
      </div>
    </div>
    <div class="selected__down">
      <ItemList
          :items="itemsLeft"
          :selected-items="selectedItemsLeft"
          @select="selectLeftItem"
      />
      <ItemList
          :items="itemsRight"
          :selected-items="selectedItemRight"
          :single-select="true"
          @select="selectRightItem"
      />
    </div>
    <WarningModal
        v-if="showLeftModal"
        :visible="showLeftModal"
        message="You can only select up to 6 items."
        @close="closeModal('left')"
    />
    <WarningModal
        v-if="showRightModal"
        :visible="showRightModal"
        message="You can only select one item."
        @close="closeModal('right')"
    />
  </div>
</template>

<script>
import ItemList from "./ItemList.vue";
import SelectedItemList from "./SelectedItemList.vue";
import WarningModal from "./WarningModal.vue";

export default {
  components: {
    ItemList,
    SelectedItemList,
    WarningModal,
  },
  data() {
    return {
      selectedItemsLeft: [],
      selectedItemRight: null,
      itemsLeft: [
        { id: 1, name: "Shoes 1" },
        { id: 2, name: "Shoes 2" },
        { id: 3, name: "Shoes 3" },
        { id: 4, name: "Shoes 4" },
        { id: 5, name: "T-shirt 1" },
        { id: 6, name: "T-shirt 2" },
        { id: 7, name: "T-shirt 3" },
        { id: 8, name: "T-shirt 4" },
      ],
      itemsRight: [
        { id: 11, name: "Jacket 1" },
        { id: 12, name: "Jacket 2" },
        { id: 13, name: "Jacket 3" },
        { id: 14, name: "Jacket 4" },
        { id: 15, name: "Hoodie 1" },
        { id: 16, name: "Hoodie 2" },
        { id: 17, name: "Hoodie 3" },
        { id: 18, name: "Hoodie 4" },
      ],
      showLeftModal: false,
      showRightModal: false,
    };
  },
  methods: {
    selectLeftItem(item) {
      if (this.selectedItemsLeft.length >= 6) {
        this.showLeftModal = true;
        return;
      }
      if (!this.selectedItemsLeft.includes(item)) {
        this.selectedItemsLeft.push(item);
      }
    },
    selectRightItem(item) {
      if (this.selectedItemRight) {
        this.showRightModal = true;
        return;
      }
      this.selectedItemRight = item;
    },
    removeItem(item) {
      this.selectedItemsLeft = this.selectedItemsLeft.filter(
          (i) => i.id !== item.id
      );
      if (this.selectedItemRight && this.selectedItemRight.id === item.id) {
        this.selectedItemRight = null;
      }
    },
    closeModal(side) {
      if (side === "left") this.showLeftModal = false;
      if (side === "right") this.showRightModal = false;
    },
  },
};
</script>

<style lang="scss">
.selected{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:100%;
  gap: 20px;
  padding: 20px 30px;
    @media (max-width: 500px) {
      padding: 16px;
    }
  &__up{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    &-left, &-right{
      border: 1px solid;
      padding: 16px;
      h3{
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
  &__down{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 75vh;
    gap: 16px;
    @media (max-width: 500px) {
      height: 80vh;
    }
  }
  &__item{
      padding: 10px;
      border: 1px solid #ccc;
      cursor: pointer;
      margin: 5px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
  }
  .mdi-delete-outline{
    &:hover{
      cursor: pointer;
    }
  }
}

</style>
  