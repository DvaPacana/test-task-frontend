<script setup lang="ts">
import Items from '../interfaces/Items';


defineProps<{
  info?: Items[],
  cursor?: boolean
}>();

const emit = defineEmits(['getItem']);

function getProduct(id: number, name: string): void {
    emit('getItem', id, name);
}


</script>




<template>
<div class="good">
  <div v-for="item in info" :key="item.id" class="card">

      <div class="rectangle" :class="[cursor ? 'rectangle__cursor' : '']" @click="getProduct(item.id, item.name)">
        <p>name: {{ item.name }}</p>
      </div>

  </div>
  </div>
   
</template>

<style scoped>

.good{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.rectangle {
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  border: 1px solid #000; /* Добавляем границу черного цвета шириной 1 пиксел */
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
}

.rectangle__cursor {
  cursor: pointer;
}

.rectangle:hover {
  border-color: #646cff;
}


</style>
