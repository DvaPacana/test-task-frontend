<template>
  <div class="container">
      <div class="container-items">
         <TheItems
            v-for="(item, index ) in items.thingsToChooseFrom" 
            :key="+item.id"
            :item="item"
            @click.stop="items.toggleSelectedItem(item)"
            :selected="item.select"
         />
      </div>
      
  </div>

 
</template>

<script setup>
   import TheItems from './items/TheItem.vue'
   
   import { useItemsStore } from '../stores/items.js'
  
   const items = useItemsStore()



</script>

<style lang="scss" scoped>
 .container{
   border: 2px solid black;
   width: 350px;
   height: 60vh;
 }
 .container-items{
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
 }

</style>