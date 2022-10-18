<template>
  <div class="products">
    <p>{{ items }}</p>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: String,
    }
  }
};
</script>
<style lang="">
</style>