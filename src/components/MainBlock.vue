<script setup>
import RightSide from "@/components/RightSide.vue";
import LeftSide from "@/components/LeftSide.vue";


</script>

<template>
  <div class="wrapper">
    <LeftSide class="left-side"/>
    <RightSide />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.left-side {
  margin-right: 20px;
}
</style>
