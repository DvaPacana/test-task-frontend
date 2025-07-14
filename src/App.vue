<script setup lang="ts">
import MultipleSelection from "./components/multipleSelection.vue";
import SingleSelection from "./components/singleSelection.vue";
</script>

<template>
  <div class="wrapper">
    <multiple-selection></multiple-selection>
    <single-selection></single-selection>
  </div>
</template>

<style>

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.border {
  padding: 10px;
  border: 5px solid black;
  margin-bottom: 20px;
}

.staff {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  cursor: pointer;
}

</style>
