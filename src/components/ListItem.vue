<template>
  <div class="list-item">
    <slot></slot>
  </div>
</template>
<style scoped>
.list-item {
  background: lightgray;
  padding: 10px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  min-width: 70px;
  width: max-content;
  user-select: none;
  align-items: center;
}
.disable .list-item {
  cursor: no-drop;
}
</style>
