<script setup>
import ThingItem from './ThingItem.vue';
import { computed } from 'vue';
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
})

defineEmits(['toggle-select']);
</script>

<template>
    <div class="holder">
        <ThingItem v-for="item in items" :key="item.id"
            :item="item" @choose-item="$emit('toggle-select', item.id)"/>
    </div>
</template>


<style lang="scss" scoped>
.holder {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border: 5px solid #453838;
  padding: 2rem;
}
</style>