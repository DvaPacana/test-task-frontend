<template>
  <div class="selection-page">
    <div class="selection-page__top">
      <div class="selection-page__top-left">
        <h3>Выбранные вещи:</h3>
        <div class="selection-page__selected-items">
            <TransitionGroup name="slide-fade" tag="div" class="selection-page__selected-items">
                <ItemCard
            v-for="item in userSelectedItems"
            :key="item.id"
            :item="item"
            :is-selected="true"
            @click="handleMultiSelect(item)"
                />
            </TransitionGroup>
        </div>
        <div class="selection-page__counter">
          Выбрано: {{ userSelectedItems.length }} / {{ multiChooseItems.length }}
        </div>
      </div>
      <div class="selection-page__top-right">
        <h3>Выбранная вещь:</h3>
        <div class="selection-page__selected-item">
          <Transition name="fade">
            <ItemCard
              v-if="offerSelectedItem"
              :key="offerSelectedItem.id"
              :item="offerSelectedItem"
              :is-selected="true"
              @click="handleSingleSelect(offerSelectedItem)"
            />
          </Transition>
          <Transition name="fade" mode="out-in">
            <span v-if="!offerSelectedItem" key="empty">Ничего не выбрано</span>
          </Transition>
        </div>
      </div>
    </div>

    <div class="selection-page__bottom">
      <div class="selection-page__bottom-left">
        <ItemList
          :items="multiChooseItems"
          header="Множественный выбор"
          type="multi"
          :is-selected="isMultiSelected"
          @on-toggle="handleMultiSelect"
        />
      </div>
      <div class="selection-page__bottom-right">
        <ItemList
          :items="singleChooseItems"
          header="Единичный выбор"
          type="single"
          :is-selected="isSingleSelected"
          @on-select="handleSingleSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMultiSelection, useSingleSelection } from '@/features/item_selection';
import { singleChooseItems, multiChooseItems } from '../model';
import { ItemList } from '@/features/item_selection';
import { ItemCard } from '@/entities/item';

const {
  selectedItems: userSelectedItems,
  toggleItem: handleMultiSelect,
  isSelected: isMultiSelected,
} = useMultiSelection(6);

const {
  selectedItem: offerSelectedItem,
  selectItem: handleSingleSelect,
  isSelected: isSingleSelected,
} = useSingleSelection();
</script>
