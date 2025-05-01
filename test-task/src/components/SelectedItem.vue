<template>
   <div class="selecte__container">
       <div class="selecte__container-items">
          <TheItems
            
             :item="items.selectedItem"
             @click.stop=""
             v-if="!(items.selectedItem == {})"
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
    .selecte__container{
       border: 2px solid black;
       width: 350px;
       height: 200px;
       position: relative;
       &-items{
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
         
          &-selected{
             position: absolute;
             bottom: 0;
             
             display: flex;
             align-items: end;
             padding-left: 20px;
          }
       }
    }
 
 </style>