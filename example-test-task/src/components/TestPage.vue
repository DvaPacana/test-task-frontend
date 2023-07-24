<script>
  import List from './List.vue';

  import {leftList, rightList} from '../lib';

  export default {
    name: 'TestPage',
    components: {
      List
    },
    data() {
      return {
        leftList,
        rightList
      }
    }
  }
</script>

<template lang="pug">
  .main
    List(:items="leftList")
    List(:items="rightList" :isSingleChoice="true")
</template>

<style scoped lang="scss">
  .main {
    display: grid;
    grid-template-areas: ". .";
    grid-template-columns: repeat(2, 50%);
    grid-gap: 8px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
