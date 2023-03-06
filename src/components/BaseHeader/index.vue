<template>
  <header class="header"><div class="header__inner">header</div></header>
</template>

<script></script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  &__inner {
    @include container;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
