<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 10px 15px;
  background-color: $color-priority;
  color: $color-white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>