<script setup lang="ts"></script>

<template>
  <el-header class="header"> <h1>Тестовое задание VueJS</h1></el-header>
  <main>
    <el-container class="container">
      <RouterView />
    </el-container>
  </main>
</template>

<style>
body {
  margin: 0;
}

.header {
  background-color: rgb(166, 169, 173);
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1260px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 24px;
}

@media (max-width: 1024px) {
  .container {
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 600px;
  }
}

@media (max-width: 480px) {
  .container {
    max-width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
