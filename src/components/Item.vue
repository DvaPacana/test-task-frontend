<template>
  <button @click="handleClick" class="item">
    {{ name }}
  </button>
</template>

<script>
  export default {
    name: 'item',
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    },
    
  }
</script>

<style scoped>
.item {
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #000;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}

</style>