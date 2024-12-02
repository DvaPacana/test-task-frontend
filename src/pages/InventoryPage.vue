<template>
  <div class="inventory-page">
    <div class="inventory-page__selected-inventory">
      <SelectedItems
        :items="selectedLeftItems"
        :title="this.$t('InventoryPage.SelectedUserItemTitle')"
        :limit="6"
      />
      <SelectedItems
        :items="selectedRightItem ? [selectedRightItem] : []"
        :title="this.$t('InventoryPage.SelectedItemTitle')"
      />
    </div>
    <div class="inventory-page__inventory">
      <ItemList
        :items="leftItems"
        :selected-items="selectedLeftItems"
        @toggle="toggleLeftItem"
        :title="this.$t('InventoryPage.ItemListUserTitle')"
        :multi-select="true"
        :limit="6"
      />
      <ItemList
        :items="rightItems"
        :selected-item="selectedRightItem"
        @select="selectRightItem"
        :title="this.$t('InventoryPage.ItemListForSelectTitle')"
        :multi-select="false"
      />
    </div>
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import SelectedItems from '../components/SelectedItems.vue'

export default {
  components: { SelectedItems, ItemList },
  data() {
    return {
      leftItems: [
        { id: 1, name: 'Shoes 1' },
        { id: 2, name: 'Shoes 2' },
        { id: 3, name: 'Shoes 3' },
        { id: 4, name: 'Shoes 4' },
        { id: 5, name: 'T-shirt 1' },
        { id: 6, name: 'T-shirt 2' },
        { id: 7, name: 'T-shirt 3' },
        { id: 8, name: 'T-shirt 4' }
      ],
      rightItems: [
        { id: 11, name: 'Jacket 1' },
        { id: 12, name: 'Jacket 2' },
        { id: 13, name: 'Jacket 3' },
        { id: 14, name: 'Jacket 4' },
        { id: 15, name: 'Hoodie 1' },
        { id: 16, name: 'Hoodie 2' },
        { id: 17, name: 'Hoodie 3' },
        { id: 18, name: 'Hoodie 4' }
      ],
      selectedLeftItems: [],
      selectedRightItem: null
    }
  },
  methods: {
    toggleLeftItem(item) {
      const index = this.selectedLeftItems.findIndex((i) => i.id === item.id)
      if (index !== -1) {
        this.selectedLeftItems.splice(index, 1)
      } else if (this.selectedLeftItems.length < 6) {
        this.selectedLeftItems.push(item)
      }
    },
    selectRightItem(item) {
      this.selectedRightItem = item
    }
  }
}
</script>

<style scoped>
.inventory-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
}
.inventory-page__inventory,
.inventory-page__selected-inventory {
  display: flex;
  gap: 20px;
}

.inventory-page__selected-inventory {
  height: 200px;
}
</style>
