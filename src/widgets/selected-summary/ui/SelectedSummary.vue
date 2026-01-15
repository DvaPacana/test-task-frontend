<script setup>
import { computed } from 'vue'
import ItemTile from '../../../entities/item/ui/ItemTile.vue'
import Panel from '../../../shared/ui/Panel/Panel.vue'

const props = defineProps({
  selectedUserItems: {
    type: Array,
    default: () => [],
  },
  maxSelected: {
    type: Number,
    required: true,
  },
  selectedAvailableItem: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['toggle-user', 'select-available'])

const selectedCount = computed(() => props.selectedUserItems.length)

const handleUserToggle = (item) => {
  emit('toggle-user', item.id)
}

const handleAvailableToggle = (item) => {
  emit('select-available', item.id)
}
</script>

<template>
  <section class="grid grid--two">
    <Panel title="Выбранные вещи" class="panel--multi">
      <template #meta>Выбрано: {{ selectedCount }} / {{ maxSelected }}</template>
      <div class="selected-items">
        <ItemTile
          v-for="item in selectedUserItems"
          :key="item.id"
          :item="item"
          size="sm"
          selected
          @select="handleUserToggle"
        />
        <div v-if="selectedUserItems.length === 0" class="empty-state">
          Выберите до {{ maxSelected }} вещей из своего списка.
        </div>
      </div>
    </Panel>

    <Panel title="Выбранная вещь" class="panel--single">
      <div class="selected-item">
        <ItemTile
          v-if="selectedAvailableItem"
          :item="selectedAvailableItem"
          size="lg"
          selected
          @select="handleAvailableToggle"
        />
        <div v-else class="empty-state">Выберите одну вещь справа.</div>
      </div>
    </Panel>
  </section>
</template>
