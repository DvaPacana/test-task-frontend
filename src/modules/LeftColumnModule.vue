<script setup>
import { ref } from 'vue'
import ItemsList from '@/shared/SelectComponent/ItemsList.vue'
import SelectedBlock from '@/shared/SelectComponent/SelectedBlock.vue'

const props = defineProps({
  items: Array
})

const selected = ref([])
</script>

<template>
  <div class="column">
    <SelectedBlock
        title="Множественный выбор"
        :items="selected"
        :is-show-count="true"
    />

    <ItemsList
        :items="items"
        :selected="selected"
        mode="multiple"
        :max="6"
        @update:selected="selected = $event"
    />
  </div>
</template>
