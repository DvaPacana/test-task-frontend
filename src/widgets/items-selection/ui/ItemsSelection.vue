<script setup>
import { computed } from 'vue'
import SelectionPanel from '../../../shared/ui/SelectionPanel/SelectionPanel.vue'
import UserItemsSelector from '../../../features/select-user-items/ui/UserItemsSelector.vue'
import AvailableItemSelector from '../../../features/select-available-item/ui/AvailableItemSelector.vue'

const props = defineProps({
  userItems: {
    type: Array,
    required: true,
  },
  availableItems: {
    type: Array,
    required: true,
  },
  selectedUserIds: {
    type: Array,
    required: true,
  },
  selectedAvailableId: {
    type: Number,
    default: null,
  },
  maxSelected: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['toggle-user', 'select-available'])

const userMeta = computed(() => `Можно выбрать до ${props.maxSelected}`)
const availableMeta = computed(() => 'Только один выбор')
</script>

<template>
  <section class="grid grid--two">
    <SelectionPanel title="Ваши вещи" :meta="userMeta" class="panel--multi">
      <UserItemsSelector
        :items="props.userItems"
        :selected-ids="props.selectedUserIds"
        :max-selected="props.maxSelected"
        @toggle="emit('toggle-user', $event)"
      />
    </SelectionPanel>

    <SelectionPanel title="Доступные вещи" :meta="availableMeta" class="panel--single">
      <AvailableItemSelector
        :items="props.availableItems"
        :selected-id="props.selectedAvailableId"
        @select="emit('select-available', $event)"
      />
    </SelectionPanel>
  </section>
</template>
