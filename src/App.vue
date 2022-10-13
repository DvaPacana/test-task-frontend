<template>
    <main>
      <selected-items></selected-items>
      <selected-item></selected-item>
      <available-items></available-items>
      <available-item></available-item>
    </main>
</template>

<script>
import SelectedItem from './components/V-Selected-Item.vue'
import SelectedItems from './components/V-Selected-Items.vue'
import AvailableItem from './components/V-Available-Item.vue'
import AvailableItems from './components/V-Available-Items.vue'

export default {
  name: 'App',
  components: {
    SelectedItem,
    SelectedItems,
    AvailableItem,
    AvailableItems,
  }
}
</script>
