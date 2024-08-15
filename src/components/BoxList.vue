<script setup>
  import BoxButton from './BoxButton.vue'

  defineProps({
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  })

  const emit = defineEmits(['onSelect'])

  const handleClick = (id) => {
    emit('onSelect', id)
  }
</script>

<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-xl font-bold">
      {{ title }}
    </h3>

    <ul class="grid grid-cols-3 gap-2">
      <li
        v-for="el in list"
        :key="el.id">
        <BoxButton
          :icon="el.icon"
          :label="el.name"
          :disabled="isDisabled"
          @click="handleClick(el.id)" />
      </li>
    </ul>
  </div>
</template>
