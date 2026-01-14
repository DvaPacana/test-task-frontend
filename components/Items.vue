<template>
  <main class="main">
    <h3 class="main__title">
      <slot name="header"></slot>
    </h3>

    <section class="main__content">
      <ul class="simple-list">
        <li v-for="item in items" 
          :key="item.id"
          class="simple-list__item"
          :class="itemStyle(item)"
          @click="onItemClick(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>

    <footer class="main__footer">
      <div class="main__footer-message" :class="emphMessage">You can select up to {{ maxSel }} items</div>
      <div class="main__footer-message">You have selected {{ selItems.length }} / {{ items.length }}</div>
    </footer>
  </main>
</template>

<script setup>
import { computed } from 'vue'

// data
const { items, selItems, maxSel } = defineProps(['items', 'selItems', 'maxSel'])
const emits = defineEmits(['selectEvent'])

// computed
const maxReached = computed(() => {
  return (selItems.length == maxSel);
})

const emphMessage = computed(() => {
  return { 'main__footer-message--emph': maxReached.value }
})

// methods
function itemStyle(item) {
  return { 
    'simple-list__item--selected': selItems.includes(item.id),
    'simple-list__item--pointer': !maxReached.value
  }
}

function onItemClick(item) {
  emits('selectEvent', { id: item.id })
}

</script>