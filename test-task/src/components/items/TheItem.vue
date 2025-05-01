<template>
  <div class="item" 
      :class="{'selected': selected}"
  >
      <p>{{item.name}}</p>
  </div>

 
</template>

<script setup>

   const props = defineProps(['item','selected'])

</script>

<style lang="scss" scoped>
   .item{
      min-width: 70px;
      height: 30px;
      border: 2px solid black;
      margin: 5px;
      padding: 0 3px;
      &:hover{
         cursor: pointer;
         background-color: rgb(161, 160, 159);
      }
   }
   .selected{
      background-color: rgb(230, 173, 117);
   }

</style>