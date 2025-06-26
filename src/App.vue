<script setup lang="ts">
import { ref, computed } from 'vue';
import leftItems from './data/leftItems.json';
import rightItems from './data/rightItems.json';


interface Item {
  id: number;
  name: string;
}

const maxLeftItems = ref(6)
const selectedLeftItems = ref<Item[]>([]);
const selectedRightItem = ref<Item | null>(null);

const leftIds = computed(() => selectedLeftItems.value.map(item => item.id))

function handleToggleLeftItemSelect(item: Item) {
  if (leftIds.value.includes(item.id)) {
    selectedLeftItems.value.splice(leftIds.value.indexOf(item.id), 1)
    return
  }
  if (selectedLeftItems.value.length < maxLeftItems.value) {
    selectedLeftItems.value.push(item)
  }
}

function handleRightItemSelect(item: Item) {
  const selectedItem = selectedRightItem.value
  if (selectedItem === null || selectedItem.id !== item.id)
    selectedRightItem.value = item
  else selectedRightItem.value = null
}
</script>

<template>
  <v-app>
    <v-main class="ma-4">
      <v-row class="justify-space-between">
        <v-col>
          <v-card class="pa-2">
            <v-card-title>Выбранные предметы: {{ selectedLeftItems.length }}/{{ maxLeftItems }}</v-card-title>
            <v-card-text>
              <v-list :items="selectedLeftItems" item-title="name"></v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-2">
            <v-card-title>Выбранный предмет:</v-card-title>
            <v-card-text>
              <v-card class="pa-2"> {{ selectedRightItem?.name || '-' }} </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card class="pa-2 d-flex flex-wrap ga-2 justify-space-between">
            <v-btn v-for="item in leftItems" :key="item.id"
              @click="() => handleToggleLeftItemSelect(item)"
              style="min-width:100px"
              variant="outlined"
              :color="leftIds.includes(item.id) ? 'info' : undefined"
            >
              {{ item.name }}
            </v-btn>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-2 d-flex flex-wrap ga-2 justify-space-between">
            <v-btn v-for="item in rightItems" :key="item.id"
              @click="() => handleRightItemSelect(item)"
              style="min-width:100px"
              variant="outlined"
              :color="selectedRightItem?.id === item.id ? 'info' : undefined"
            >
              {{ item.name }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
