<template>
  <div class="v-item"><slot></slot></div>
</template>

<script>
export default {
  name: "VItem",
};
</script>

<style lang="scss" scoped>
.v-item {
  border: 2px solid #eeeeee;
  border-radius: 5px;
  height: max-content;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
