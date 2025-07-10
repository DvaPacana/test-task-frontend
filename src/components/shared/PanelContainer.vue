<template>
  <div class="PanelContainer">
    <div class="PanelContainer__top">
      <slot name="top"/>
    </div>
    <div class="PanelContainer__bottom">
      <slot name="bottom"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.PanelContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
