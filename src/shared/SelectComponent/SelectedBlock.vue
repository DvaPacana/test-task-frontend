<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<template>
  <div class="box">
    <h3>{{ title }}</h3>

    <div v-if="!items.length">Ничего не выбрано</div>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
