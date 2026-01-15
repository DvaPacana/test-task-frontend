<script setup>
import { computed } from 'vue'
import ItemTile from '../../../entities/item/ui/ItemTile.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedIds: {
    type: Array,
    required: true,
  },
  maxSelected: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['toggle'])

const limitReached = computed(() => props.selectedIds.length >= props.maxSelected)

const helperText = computed(() =>
  limitReached.value
    ? 'Достигнут лимит выбора. Уберите одну вещь, чтобы добавить другую.'
    : `Выберите до ${props.maxSelected} вещей, чтобы показать их слева сверху.`
)

const itemTiles = computed(() =>
  props.items.map((item, index) => {
    const selected = props.selectedIds.includes(item.id)
    return {
      item,
      selected,
      disabled: !selected && limitReached.value,
      style: { '--delay': `${index * 40}ms` },
    }
  })
)

const handleSelect = (item) => {
  emit('toggle', item.id)
}
</script>

<template>
  <div class="item-grid">
    <ItemTile
      v-for="tile in itemTiles"
      :key="tile.item.id"
      :item="tile.item"
      :selected="tile.selected"
      :disabled="tile.disabled"
      :style="tile.style"
      @select="handleSelect"
    />
  </div>
  <p class="helper-text">{{ helperText }}</p>
</template>
