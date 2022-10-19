<template>
  <div class="box">
    <div class="d-flex flex-wrap">
      <div v-for="(item, i) in getSelectedLeftItems" :key="i">
        <b-card bg-variant="info" text-variant="white" class="text-center m-1">
          <h4>{{item.id}}</h4>
          <b-card-text>{{item.name}}</b-card-text>
        </b-card>
      </div>

    </div>
    <h4>Selected: {{getSelectedLeftItems.length}}/6</h4>
  </div>


</template>

<script>
  import {mapGetters} from "vuex";

  export default {
  name: 'TopLeftBox',
  computed: {
    ...mapGetters([
      'getSelectedLeftItems',
    ])
  },
}
</script>

<style scoped>

</style>
