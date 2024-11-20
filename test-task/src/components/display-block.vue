<template>
  <div>
    <div v-if="displaySolo">
      <ShoeItem 
          :key="items[0].id" 
          :name="items[0].name"
        />
    </div>

    <div v-else class="select-block__border">
      <div class="select-block__items">
        <ShoeItem 
          v-for="item in items" 
          :key="item.id" 
          :name="item.name"
        />
      </div>
      <p>{{ items.length }} / {{ limit }}</p>
    </div>

  </div>
</template>
  
<script setup lang='ts'>
  import { computed } from 'vue';
import ShoeItem from './shoe-item.vue';

  const props = defineProps({
    limit: Number,
    items: Array
  })

  const displaySolo = computed(() => {
    return props.limit < 2;
  })
</script>
