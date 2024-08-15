<template>
  <div class="container">
    <PrintSelectedItems :limit="limit" :selectedItems="selectedItems" />

    <div class="box">
      <SelectButton
        v-for="(item) in items" :key="item.id"
        :item="item"
        :isDisabled="isDisabled(item.id)"
        @select="updateSelectedItems"
      />
    </div>
    
  </div>
</template>

<script>
// container
import SelectButton from './UiSelectButton.vue'; 
import PrintSelectedItems from './UiPrintSelectedItems.vue'; 

export default {
  components: { SelectButton, PrintSelectedItems },
  props: {
    items: {type: Array, default: () => []},
    limit: {type: Number, default: 1 }
  },
  data() {
    return {
      selectedItems: []
    };
  },
  computed: {
    selectedItemIds() {
      return this.selectedItems.map(item => item.id);
    }
  },
  methods: {
    updateSelectedItems(item) {
      this.selectedItems.push(item);
      if (this.selectedItems.length > this.limit) this.selectedItems.shift();
    },
    isDisabled(itemId) {
      return this.selectedItemIds.includes(itemId)
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}


.box {
  border: 2px solid black;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

}
</style>