<script setup lang="ts">
import { Things } from '@/stores/chooseUser';
interface Props {
  data: Things | null
}
interface Emits {
  click: () => void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <div
    v-if="props.data"
    class="container-selected-common__item"
    @click="$emit('click')"
  >
    {{props.data?.name}}
  </div>
</template>

<style scoped lang="scss">
</style>
