<script setup>
    defineProps({
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    })
</script>

<template>
  <div class="good-item">
    <h2>{{ name }}</h2>
  </div>
</template>



<style scoped>
.good-item {
  border: 2px solid #000;
  width: 100px;
  min-height: 50px;
  margin: 10px;
  padding: 8px;
  cursor: pointer;
}
.good-item:hover {
  background: aliceblue;
}
</style>
