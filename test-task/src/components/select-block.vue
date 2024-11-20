<template>
    <div class="select-block">
      <DisplayBlock
        v-if="selected.length"
        :items="selected"
        :limit="limit"
      />

      <div class="select-block__border select-block__items">
        <ShoeItem 
          v-for="item in items" 
          :key="item.id" 
          :name="item.name"
          :select="isActiveItem(item).isActive"
          @click="select(item)"
        />
      </div>
  </div>
</template>
  
<script setup lang='ts'>
  import { ref } from 'vue';

  import ShoeItem from './shoe-item.vue';
  import DisplayBlock from './display-block.vue';

  const props = defineProps({
    limit: Number,
    items: Array
  })

  const selected = ref([]);

  function isActiveItem(item) {
    const index = selected.value.findIndex(s => s.id === item.id);

    return {
      isActive: index !== -1,
      index
    }
  }

  function select(item) {
    const { isActive, index } = isActiveItem(item);

    if (isActive) {
      selected.value.splice(index, 1);
    } else if (selected.value.length < props.limit) {
      selected.value.push(item)
    }
  }
</script>
  
<style>
  .select-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .select-block__border {
    border: 1px solid black;
    padding: 10px;
  }

  .select-block__items {
    display: flex;
    gap: 4px;
  }
</style>