<template>
  <content>
    <div class="box-selected">
      <div class="user-items">
        <div class="user-items--selected">
          <v-item
            v-for="item in selectedUserItems.entries()"
            :key="'select-' + item[0]"
            @click.native="deleteSelectUserItem(item)"
            >{{ item[1].name }}</v-item
          >
        </div>
        <div class="user-items__counter">{{ "" + countSelected }} / 6</div>
      </div>
      <div class="choice-items--selected" @click="deleteChoiceItem">
        {{ selectedChoiceItem?.length ? selectedChoiceItem[1].name : "" }}
      </div>
    </div>
    <div class="space-20"></div>
    <div class="box-items">
      <div class="items">
        <v-item
          v-for="item in userItems.entries()"
          :key="'user-' + item[0]"
          :class="{ 'not-selected': notUserSelect }"
          @click.native="selectUserItem(item)"
          >{{ item[1].name }}</v-item
        >
      </div>
      <div class="items">
        <v-item
          v-for="item in choiceItems.entries()"
          :key="'choice-' + item[0]"
          @click.native="selectChoiceItem(item)"
          >{{ item[1]["name"] }}</v-item
        >
      </div>
    </div>
  </content>
</template>

<script>
import VItem from "@/components/VItem.vue";

export default {
  name: "ThePage",
  components: { VItem },
  computed: {
    userItems() {
      return this.$store.getters.getUserItems;
    },
    choiceItems() {
      return this.$store.getters.getChoiceItems;
    },
    selectedChoiceItem() {
      return this.$store.getters.getSelectChoiceItem;
    },
    selectedUserItems() {
      return this.$store.getters.getSelectUserItems;
    },
  },
  data() {
    return {
      countSelected: 0,
      notUserSelect: false,
    };
  },
  methods: {
    selectUserItem(data) {
      if (this.countSelected < 6) {
        this.$store.commit("deleteUserItem", data[0]);
        this.$store.commit("selectUserItem", data);
        this.countSelected += 1;
        this.notUserSelect = this.countSelected === 6 ? true : false;
      }
    },
    deleteSelectUserItem(data) {
      this.$store.commit("deleteSelectUserItem", data[0]);
      this.$store.commit("insertUserItem", data);
      this.countSelected -= 1;
      this.notUserSelect = false;
    },

    deleteChoiceItem() {
      if (this.selectedChoiceItem) {
        this.$store.commit("insertChoiceItem", this.selectedChoiceItem);
        this.$store.commit("selectChoiceItem", null);
      }
    },
    selectChoiceItem(data) {
      if (this.selectedChoiceItem) {
        this.$store.commit("insertChoiceItem", this.selectedChoiceItem);
      }
      this.$store.commit("deleteChoiceItem", data[0]);
      this.$store.commit("selectChoiceItem", data);
    },
  },
};
</script>

<style lang="scss" scoped>
%box {
  border: 2px dashed #eeeeee;
  border-radius: 5px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}

content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.user-items {
  @extend %box;
  padding: 0 0 25px 0;
  height: 150px;
  margin: 0 14px;
  position: relative;
  width: 100%;
  overflow: hidden;
  &__counter {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    color: gray;
  }
  &--selected {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: 100%;
  }
}

.choice-items--selected {
  @extend %box;
  margin: 0 10px;
  width: 100%;
  height: 150px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.items {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100%;
  margin: 0 10px;
  padding: 10px;
  align-content: flex-start;
  overflow: auto;
  @extend %box;
}

.box-selected {
  display: flex;
  justify-content: space-between;
}

.box-items {
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
}

.not-selected {
  cursor: no-drop;
}

.space-20 {
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
}
</style>
