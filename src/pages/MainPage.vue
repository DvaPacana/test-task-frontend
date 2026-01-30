<script setup lang="ts">
import { ref, computed } from "vue";
import { availableItems, userItems } from "@/data/items.ts";
import UserItemsSummary from "@/components/user-items/UserItemsSummary.vue";
import AvailableSelectedItem from "@/components/available-items/AvailableSelectedItem.vue";
import UserItemsList from "@/components/user-items/UserItemsList.vue";
import AvailableItemsList from "@/components/available-items/AvailableItemsList.vue";
import BaseButton from "@/components/ui/BaseButton.vue"

const selectedUserItemIds = ref<number[]>([]);
const selectedAvailableItemId = ref<number | null>(null);

const selectedAvailableItem = computed(() => availableItems.find(i => i.id === selectedAvailableItemId.value) ?? null);
const selectedUserItems = computed(() => userItems.filter(item => selectedUserItemIds.value.includes(item.id)));

const userItemActions = {
  toggle(id: number) {
    const index = selectedUserItemIds.value.indexOf(id);

    if (index !== -1) {
      selectedUserItemIds.value.splice(index, 1);
      return;
    }

    if (selectedUserItemIds.value.length < 6) {
      selectedUserItemIds.value.push(id);
    }
  },
  reset() {
    selectedUserItemIds.value = [];
  },
};

const availableItemActions = {
  toggle(id: number) {
    selectedAvailableItemId.value = id;
  },
  reset() {
    selectedAvailableItemId.value = null;
  },
};

const resetAllSelections = () => {
  selectedUserItemIds.value = [];
  selectedAvailableItemId.value = null;
}
</script>

<template>
  <div class="main-page">

    <div class="main-page__row main-page__row--top">
      <div class="main-page__col">
        <UserItemsSummary
          :items="selectedUserItems"
          :selected-count="selectedUserItemIds.length" 
          :limit="6"
        />
      </div>
      <div class="main-page__col">
        <AvailableSelectedItem
          :item="selectedAvailableItem"
        />
      </div>
    </div>

    <div class="main-page__row main-page__row--bottom">
      <div class="main-page__col">
        <UserItemsList 
          :items="userItems" 
          :selected-ids="selectedUserItemIds" 
          @select="userItemActions.toggle"
        />
      </div>
      <div class="main-page__col">
        <AvailableItemsList 
          :items="availableItems" 
          :selected-id="selectedAvailableItemId" 
          @select="availableItemActions.toggle"
        />
      </div>
    </div>

    <div class="main-page__row">
      <div class="main-page__col main-page__col--no-border">
        <BaseButton @click="userItemActions.reset">Reset user item list</BaseButton>
      </div>
      <div class="main-page__col main-page__col--no-border">
        <BaseButton @click="availableItemActions.reset">Reset available item list</BaseButton>
      </div>
    </div>

    <div class="main-page__row">
      <div class="main-page__col main-page__col--no-border">
        <BaseButton @click="resetAllSelections">Reset all lists</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  gap: 16px;

  &__row {
    display: flex;
    gap: 16px;

    &--top {
      flex: 0 0 auto;
    }

    &--bottom {
      flex: 0 0 auto;
    }
  }

  &__col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    border: 2px solid $border-black;

    &--no-border {
      border: none;
    }
  }
}
</style>