<template>
  <div class="item">{{ name }}</div>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    name: String,
  },
}
</script>

<style>
.item {
  width: max-content;
  height: 40px;
  border: 2px solid black;
  padding: 5px;
  cursor: pointer;
}
</style>
