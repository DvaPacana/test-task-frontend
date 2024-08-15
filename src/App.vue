<script setup>
  import { ref } from 'vue'
  import BoxContainer from './components/BoxContainer.vue'

  const stuffList = ref([
    {
      id: 1,
      name: 'Jeans',
      icon: '👖',
    },
    {
      id: 2,
      name: 'Cap',
      icon: '🧢',
    },
    {
      id: 3,
      name: 'Sneakers',
      icon: '👟',
    },
    {
      id: 4,
      name: 'Glasses',
      icon: '🕶',
    },
    {
      id: 5,
      name: 'T-shirt',
      icon: '👕',
    },
    {
      id: 6,
      name: 'Shorts',
      icon: '🩳',
    },
    {
      id: 7,
      name: 'Axe',
      icon: '🪓',
    },
    {
      id: 8,
      name: 'Scarf',
      icon: '🧣',
    },
    {
      id: 9,
      name: 'Umbrella',
      icon: '🌂',
    },
  ])

  const weatherList = ref([
    {
      id: 11,
      name: 'Sun',
      icon: '☀️',
    },
    {
      id: 12,
      name: 'Rain',
      icon: '🌧',
    },
    {
      id: 13,
      name: 'Hurricane',
      icon: '🌪',
    },
    {
      id: 14,
      name: 'Snow',
      icon: '❄️',
    },
    {
      id: 15,
      name: 'Cloudy',
      icon: '☁️',
    },
    {
      id: 16,
      name: 'Zombie',
      icon: '🧟‍♂️',
    },
  ])
</script>

<template>
  <main class="p-12 grid grid-cols-2 gap-12">
    <BoxContainer
      title="Stuff"
      :list="stuffList"
      :max-selected-items="6" />

    <BoxContainer
      title="Weather"
      :list="weatherList" />
  </main>
</template>
