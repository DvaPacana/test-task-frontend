<script setup>
  import { ref, computed } from 'vue'
  import BoxList from './BoxList.vue'

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    maxSelectedItems: {
      type: Number,
      default: 1,
    },
  })

  const selectedIdList = ref([])

  const listComputed = computed(() => {
    return props.list
      .filter(el => !selectedIdList.value.includes(el.id))
  })

  const selectListComputed = computed(() => {
    return props.list
      .filter(el => selectedIdList.value.includes(el.id))
      .sort((a, b) => selectedIdList.value.indexOf(a.id) - selectedIdList.value.indexOf(b.id))
  })

  const isMaxSelectedItems = computed(() => {
    return selectedIdList.value.length >= props.maxSelectedItems
  })

  const toggleSelect = (id) => {
    const index = selectedIdList.value.indexOf(id)

    if (index === -1) {
      selectedIdList.value.push(id)
    } else {
      selectedIdList.value.splice(index, 1)
    }
  }
</script>

<template>
  <div class="flex flex-col gap-6">
    <BoxList
      title="Selected"
      :list="selectListComputed"
      @on-select="toggleSelect" />

    <BoxList
      :title="title"
      :list="listComputed"
      :is-disabled="isMaxSelectedItems"
      @on-select="toggleSelect" />
  </div>
</template>
