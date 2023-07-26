<script>
  import ListItem from './ListItem.vue';

  export default {
    name: 'List',
    components: {
      ListItem
    },
    data() {
      return {
        itemList: [],
        selectedCounter: 0,
        lastSelectedId: null
      }
    },
    props: {
      items: Array,
      maxSelectCount: Number
    },
    computed: {
      selectedItems() {
        return this.itemList.filter(el => el.selected);
      }
    },
    mounted() {
      this.itemList = this.items.map(el => {
        return {...el, selected: false};
      });
    },
    methods: {
      itemSelect(id) {
        const selectedElement = this.itemList.find(el => el.id === id);

        if(selectedElement.selected) {
          this.toggleSelectedMark(id);
          return;
        }

        if(this.maxSelectCount === 1) {
          const lastSelectedInd = this.itemList.findIndex(el => el.selected);
          if (lastSelectedInd !== -1) {
            this.toggleSelectedMark(this.itemList[lastSelectedInd].id);
          }
        }

        if(this.selectedCounter >= this.maxSelectCount) return;

        this.toggleSelectedMark(id, true);
      },
      toggleSelectedMark(id, isSelected = false) {
        const selectedIndex = this.itemList.findIndex(el => el.id === id);
        this.itemList[selectedIndex].selected = isSelected;
        !isSelected ? this.selectedCounter-- : this.selectedCounter++;
      }
    }
  }
</script>

<template lang="pug">
  .list
    .list__selected
      span(v-for="{id, name} in selectedItems" :key="id") {{ name }}
    .list__items
      ListItem(
        v-for="{id, name, selected} in itemList"
        :key="id"
        :item="{id, name, selected}"
        @click="itemSelect"
        ) {{ name }}
</template>

<style scoped lang="scss">
  .list {
    display: grid;
    grid-template:
        "a ."
        "b b";
    grid-template-columns: repeat(2, 50%);
    width: 100%;

    &:nth-child(2n) {
      grid-template-areas:
        ". a"
        "b b";
    }

    &__selected {
      grid-area: a;
      width: 100%;
      height: 118px;
      padding: 8px;
      box-sizing: border-box;
      border: 2px solid #666;
      border-radius: 4px;
      margin-bottom: 16px;
      display: grid;
      grid-template-areas: ". . .";
      grid-template-columns: repeat(3, calc(33.33333333% - 2px));
      grid-gap: 4px;

      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        line-height: 1;
      }
    }

    &__items {
      width: 100%;
      display: grid;
      grid-area: b;
      grid-template-areas: ". . . .";
      grid-template-columns: repeat(4, calc(25% - 6px));
      grid-column-gap: 8px;
      grid-row-gap: 8px;
      padding: 8px;
      box-sizing: border-box;
      border: 2px solid #666;
      border-radius: 4px;
    }
  }
</style>