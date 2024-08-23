<template>
  <div class="selected" v-if="!item">
    No item selected yet
  </div>
  <div class="selected" v-else>
    {{ item.name }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../composables/useDataStore';

const { selected } = useDataStore('chosen')
const item = computed(() => selected.value[0] ?? null);

</script>

<style scoped>
.selected  {
  border: 3px solid black;
  padding: 10px;
  font-size: 2rem;
}
</style>