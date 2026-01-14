<template>
  <main class="main">
    <h3 class="main__title">
      <slot></slot>
    </h3>

    <section class="main__content">
      <div class="main__content-message" v-if="!selNum">Items not selected</div>

      <ul v-if="!!selNum" class="simple-list simple-list--inline">
        <li 
          v-for="id in selItems" 
          :key="id"
          class="simple-list__item"
        >
          {{ itemName(id) }}
        </li>
      </ul>
    </section>

    <footer class="main__footer">
      <div class="main__footer-message">Selected {{ selNum }} / {{ items.length }}</div>
    </footer>
  </main>
</template>

<script setup>
import { computed } from 'vue'

// data
const { items, selItems } = defineProps(['items', 'selItems'])

// computed
const selNum = computed(() => {
  return selItems.length
})

// methods
function itemName(id) {
  let item = items.find(item => item.id == id)
  return !!item ? item.name : 'item not found';
}

</script>