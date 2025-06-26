<template>
  <div class="home">
    <n-flex align="center">
      <h1>{{ $t('home.title') }}</h1>
      <n-icon size="40">
        <HomeOutline />
      </n-icon>
    </n-flex>
  </div>
</template>

<script setup lang="ts">
import { HomeOutline, DocumentLock } from '@vicons/ionicons5';

import { AppRoutes } from '@/app/enums/Common';
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
}
</style>
