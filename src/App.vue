<script setup lang="ts">
import ItemViewer from '@/components/ItemViewer.vue'
import ItemSelect from '@/components/ItemSelect.vue'
import { ref } from 'vue'
import { items, anotherItems } from '@/consts'
import type { Ref } from 'vue'
import type { Item } from '@/types'

const selectedItems: Ref<Item[]> = ref([])
const selectedItemsLimit = 6

const selectedAnotherItems: Ref<Item[]> = ref([])
</script>

<template>
  <main class="page">
    <ItemViewer v-model="selectedItems" :limit="selectedItemsLimit" />
    <ItemViewer v-model="selectedAnotherItems" />
    <ItemSelect :items="items" v-model="selectedItems" multiple :limit="selectedItemsLimit" />
    <ItemSelect :items="anotherItems" v-model="selectedAnotherItems" />
  </main>
</template>

<style scoped>
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 1rem;
  height: 100%;
  padding: 1rem;
}
</style>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body,
#app {
  height: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

button {
  font-size: inherit;
}
</style>
