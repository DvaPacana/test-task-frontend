<template>
    <div class="item-selector">
      <div class="item-selector__selected">
        <h3>{{ titleSelected }}</h3>

        <div class="item-selector__selected-items">
          <UiCard
            v-for="item in selected"
            :key="item.id"
            :data="item"
            @click="toggleItem(item)"
          />

          <div v-if="selected.length === 0" class="item-selector__empty-state">
            {{ placeholderText }}
          </div>
        </div>
      </div>

      <div class="item-selector__select">
        <h3>{{ titleSelect }}</h3>

        <div class="item-selector__items-grid">
          <UiCard
            v-for="item in items"
            :key="item.id"
            :data="item"
            :selected="isItemSelected(item.id)"
            @click="toggleItem(item)"
          />
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue'
  import type { Product } from '@api/products'
  import UiCard from '@components/ui/card.vue'

  interface Props {
    items: Product[]
    max: number
    titleSelected: string
    titleSelect: string
  }

  const dictionary = { placeholder: 'Выберите вещи' }

  const props = defineProps<Props>()

  const selected = defineModel<Product[]>('selected', { default: () => [] })
  const selectedItemIds = computed(() => selected.value.map(item => item.id))
  const placeholderText = computed(() => {
    if (props.max > 1) {
      return `${dictionary.placeholder} (1-${props.max})`
    }

    return `${dictionary.placeholder} (1)`
  })

  const isItemSelected = (id: number) => selectedItemIds.value.includes(id)

  const toggleItem = (item: Product) => {
    const index = selected.value.findIndex(selectedItem => selectedItem.id === item.id)

    if (!~index) {
      if (props.max === 1) {
        selected.value = [item]
        return
      }

      if (selected.value.length < props.max) {
        selected.value.push(item)
      }
    } else {
      selected.value.splice(index, 1)
    }
  }
  </script>

  <style lang="scss">
  .item-selector {
    display: flex;
    flex-direction: column;
    gap: $spacing;

    &__selected,
    &__select {
      border: 2px solid $border-color;
      padding: $spacing-small;
      border-radius: $border-radius;
      background-color: $bg-color;

      h3 {
        margin: 0 0 $spacing-small 0;
        font-size: 18px;
        color: $text-color;
      }
    }

    &__selected-items {
      min-height: 150px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: flex-start;
    }

    &__items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
    }

    &__item-card {
      border: 2px solid $border-color-light;
      padding: $spacing-small;
      border-radius: $border-radius-small;
      background-color: #fff;
      text-align: center;
    }

    &__item-name {
      font-size: 14px;
      font-weight: 500;
      color: $text-color;
    }

    &__empty-state {
      color: $text-color-muted;
      font-style: italic;
      padding: $spacing;
      text-align: center;
      width: 100%;
    }
  }


  </style>
