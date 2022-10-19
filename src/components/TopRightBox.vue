<template>
  <div class="box">
      <b-card bg-variant="dark" text-variant="white" class="text-center m-1">
          <h4>{{getSelectedRightItem.id}}</h4>
          <b-card-text>{{getSelectedRightItem.name}}</b-card-text>
      </b-card>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
  name: 'TopLeftBox',
  computed: {
    ...mapGetters([
      'getSelectedRightItem',
    ])
  },
}
</script>

<style scoped>
  .topLeftBox {
    border: 2px solid blue;
  }
</style>
