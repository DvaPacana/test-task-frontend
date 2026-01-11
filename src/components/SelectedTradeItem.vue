<template>
  <div class="selected-trade-item">
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
import type {IItem} from '@/types/item.ts';
import {computed} from 'vue';

const { item } = defineProps<{ item: IItem | undefined; }>();

const label = computed(() => item?.name ?? 'Empty');
</script>

<style lang="scss" scoped>
@use '@/styles/mixins.scss';

.selected-trade-item {
  @include mixins.containerBox;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  align-content: center;
}
</style>
