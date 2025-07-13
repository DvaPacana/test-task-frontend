<template>
  <div :class="$style.root" v-if="props.item">
    <div :class="$style.title">SELECTED ITEM</div>
    <div :class="$style.item">
      {{ props.item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '../types'

const props = defineProps<{
  item: Item | null
}>()
</script>

<style module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 10px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--accent-color);
  border-radius: 2px;
}

.item {
  border: 1px solid var(--accent-color);
  padding: 15px 25px;
  min-width: 150px;
  text-align: center;
  border-radius: var(--border-radius);
  background-color: rgba(72, 149, 239, 0.1);
  box-shadow: 0 4px 8px rgba(72, 149, 239, 0.2);
  font-weight: 600;
  font-size: 18px;
  color: var(--accent-color);
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
