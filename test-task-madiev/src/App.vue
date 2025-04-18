<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import ThingsList from '@/components/ThingsList.vue';
import ThingsUser from '@/components/ThingsUser.vue';
import ThingsCommon from '@/components/ThingsCommon.vue';
import { useChooseUserStore } from '@/stores/chooseUser';
import { useChooseCommonStore } from '@/stores/chooseCommon';
import { useSelectedUserStore } from '@/stores/selectedUser';
import type { Things } from '@/types';

const chooseUser = useChooseUserStore();
const chooseCommon = useChooseCommonStore();
const selectedUser = useSelectedUserStore();

const dataChooseUser = chooseUser.data;
const dataChooseCommon = chooseCommon.data;
const dataSelectedUser = selectedUser.data;
const selectedCommon = ref(null);

const handlerClickChooseUser = (obj: Things): void => {
  selectedUser.addItem(obj);
};
const handlerClickChooseCommon = (obj: Things): void => {
  selectedCommon.value = obj;
};
const handlerClickSelectedUser = (index: number): void => {
  selectedUser.removeItem(index);
}
const handlerClickSelectedCommon = (): void => {
  selectedCommon.value = null;
}

</script>

<template>
  <div class="container">
    <div class="container-selected-user">
      <ThingsUser
        :data="dataSelectedUser"
        @click="handlerClickSelectedUser"
      />
    </div>
    <div class="container-selected-common">
      <ThingsCommon
        :data="selectedCommon"
        @click="handlerClickSelectedCommon"
      />
    </div>
    <div class="container-choose-user">
      <ThingsList
        :data="dataChooseUser"
        @click="handlerClickChooseUser"
        
      />
    </div>
    <div class="container-choose-common">
      <ThingsList
        :data="dataChooseCommon"
        @click="handlerClickChooseCommon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  column-gap: 1em;
  row-gap: 5em;
  padding: 1em;
  justify-content: center;
  
  &-selected-user {
    width: 55%;
    border: 1px solid black;
    display: grid;
  }
  &-selected-common {
    width: 55%;
    justify-self: end;
    border: 1px solid black; 
    padding: 1em;
    &__item {
      border: 1px solid black; 
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  &-choose-user {
    border: 1px solid black; 
    
  }
  &-choose-common {
    border: 1px solid black; 
    
  }
  
}
</style>
