<template>
  <div class="products">
    <p>{{ product.name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.products {
  margin: 10px 0 0 10px;
  max-width: 60px;
  max-height: 60px;
  border: 2px solid black;
  cursor: pointer;
  user-select: none;
}
</style>