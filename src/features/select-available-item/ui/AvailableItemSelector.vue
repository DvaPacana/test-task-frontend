<script setup>
import { computed } from 'vue'
import ItemTile from '../../../entities/item/ui/ItemTile.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedId: {
    type: Number,
    default: null,
  },
})

const emit = defineEmits(['select'])

const handleSelect = (item) => {
  emit('select', item.id)
}

const itemTiles = computed(() =>
  props.items.map((item, index) => ({
    item,
    selected: item.id === props.selectedId,
    style: { '--delay': `${index * 40}ms` },
  }))
)
</script>

<template>
  <div class="item-grid">
    <ItemTile
      v-for="tile in itemTiles"
      :key="tile.item.id"
      :item="tile.item"
      :selected="tile.selected"
      :style="tile.style"
      @select="handleSelect"
    />
  </div>
  <p class="helper-text">Выберите одну вещь, чтобы показать ее справа сверху.</p>
</template>
