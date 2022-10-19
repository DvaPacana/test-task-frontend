<template>
  <div class="box">
    <div class="d-flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" @click="setItem(item)">
        <b-card bg-variant="light" text-variant="white" class="text-center m-1 text-dark">
          <h4>{{item.id}}</h4>
          <b-card-text>{{item.name}}</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import items from '../assets/right.json'

  export default {
    name: 'TopLeftBox',
    data() {
      return {
        items: items.data,
        selected: ''
      }
    },
    methods: {
      setItem(item) {
        this.$store.commit('setSelectedRightItem', { selectedRightItem: item })
      }
    }
  }
</script>

<style scoped>

</style>
