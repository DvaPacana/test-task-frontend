<template>
  <div class="choose-item">
    <span>{{ choose.id }}</span>
    <span>{{ choose.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChooseItem',
  components: {
  },

  props: {
    choose: {
      type: Object,
      default: () => {
      },
    },
  },

};
</script>

<style scoped>
.choose-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid crimson;
  font-weight: 500;
  color: black;
  border-radius: 4px;
  height: 50px;
  cursor: pointer;
  padding: 8px;
  text-align: center;
  transition: 0.2s ease-in box-shadow;
}
.choose-item:hover {
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>
