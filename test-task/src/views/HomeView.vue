<template>
  <div class="wrap">
    <div class="section">
      <div class="panel__items">
        <UserSelectedItems/>
        <SelectedItems/>
      </div>
      <div class="panel__items">
        <UsersItems/>
        <ThingsToChooseFrom/>
      </div>
    </div>
  </div>
</template>

<script setup>

import UsersItems from '../components/UsersItems.vue'
import ThingsToChooseFrom from '../components/ThingsToChooseFrom.vue'
import SelectedItems from '../components/SelectedItem.vue'
import UserSelectedItems from '../components/UserSelectedItems.vue'
</script>

<style lang="scss" scoped>
  .wrap{
    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
  }
  .section{
    
    width: 100%;
    
  }
  .panel__items{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    min-height: 100px;
  }


</style>