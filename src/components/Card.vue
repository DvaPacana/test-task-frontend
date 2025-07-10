<script setup lang="ts">


import Items from '../interfaces/Items';


defineProps<{
  info?: Items[],
  targetedElement?: Items,
  right?: string
}>();



</script>

<template>

<div class="good">
  <div class="card">
        <div class="rectangle" :class="[right === 'right' ? 'rectangle__right' : '']">
            <p>name: {{ targetedElement?.name }}</p>
            <!-- <p>body: {{ targetedElement.body }}</p> -->
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
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #000; /* Добавляем границу черного цвета шириной 1 пиксел */
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  width: 100px;
}
.rectangle__right {
    width: 250px;
    min-height: 120px;
    justify-content: center;
    align-items: center;
}

.rectangle__right p {
    font-size: 32px;
}

.rectangle:hover {
  border-color: #646cff;
}


</style>
