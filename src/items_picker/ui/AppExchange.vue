<script setup lang="ts">
import { computed } from 'vue';
import { useItemPicker } from '../features/useItemPicker';
import { useItems } from '../features/useItems';
import AppArea from './AppArea.vue';
import AppItem from './AppItem.vue';

const USER_LIMIT = 6
const VENDOR_LIMIT = 1
const { userItems, vendorItems } = useItems()
const { picked: userPicked, pick: userPick, unpickById: userUnpickById, isPicked: userIsPicked } = useItemPicker({ limit: USER_LIMIT, source: userItems })
const { picked: vendorPicked, pick: vendorPick, unpickById: vendorUnpickById, isPicked: vendorIsPicked } = useItemPicker({ limit: VENDOR_LIMIT, source: vendorItems })

const userItemsRatio = computed(() => `selected: ${userPicked.value.length} / ${USER_LIMIT}`)
</script>

<template>
  <main :class="$style.AppExchange">
    <!-- User Picked Items -->
    <div :class="$style.UserPickedItems">
      <AppArea :items="userPicked">
        <template v-for="item in userPicked" #[`item(${item.id})`]>
          <AppItem 
            :name="item.name" 
            :id="item.id" 
            @click="userUnpickById(item.id)"
          />
        </template>
      </AppArea>
      <span :class="$style.UserItemsRatio" v-text="userItemsRatio" />
    </div>

    <!-- Vendor Picked Items -->
    <AppArea :class="$style.VendorPickedItems" :items="vendorPicked">
      <template :class="$style.VendorPickedItems" v-for="item in vendorPicked" #[`item(${item.id})`]>
        <AppItem 
          :name="item.name" 
          :id="item.id" 
          @click="vendorUnpickById(item.id)"
        />
      </template>
    </AppArea>

    <!-- User Items -->
    <AppArea :class="$style.UserItems" :items="userItems">
      <template v-for="item in userItems" #[`item(${item.id})`]>
        <AppItem 
          :name="item.name" 
          :id="item.id" 
          :selected="userIsPicked(item.id)"
          @click="userIsPicked(item.id) ? userUnpickById(item.id) : userPick(item)"
        />
      </template>
    </AppArea>

    <!-- Vendor Items -->
    <AppArea :class="$style.VendorItems" :items="vendorItems">
      <template v-for="item in vendorItems" #[`item(${item.id})`]>
        <AppItem 
          :name="item.name" 
          :id="item.id" 
          :selected="vendorIsPicked(item.id)"
          @click="vendorIsPicked(item.id) ? vendorUnpickById(item.id) : vendorPick(item)"
        />
      </template>
    </AppArea>
  </main>
</template>

<style lang="scss" module>
.AppExchange {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.25fr 1fr;
  height: 80dvh;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  gap: 40px 20px;
}
.UserItems {}
.VendorItems {}
</style>