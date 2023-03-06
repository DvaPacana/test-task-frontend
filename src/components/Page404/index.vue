<template>
  <div class="not-found">
    <span>404 страница не найдена</span>
    <router-link :to="'/'">
      <span>На главную</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
