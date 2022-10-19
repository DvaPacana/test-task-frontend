<template>
  <div class="box">
    <div class="d-flex flex-wrap">
      <div v-for="(item, i) in items" :key="i" @click="setItem(item)">
        <b-card bg-variant="info" text-variant="white" class="text-center m-1">
          <h4>{{item.id}}</h4>
          <b-card-text>{{item.name}}</b-card-text>
        </b-card>
      </div>
    </div>
    <b-button variant="danger" @click="clearAll" class="mt-3">Clear</b-button>
  </div>
</template>

<script>
  import items from '../assets/left.json'

  export default {
  name: 'TopLeftBox',
  data() {
    return {
      items: items.data,
      selected: []
    }
  },
  methods: {
    setItem(item) {
      if(this.selected.length < 6) {
        this.selected.push(item)
        this.selected = [...new Set(this.selected)]
        this.$store.commit('setSelectedLeftItems', { selectedLeftItems: this.selected })
      }
    },
    clearAll() {
      this.selected = []
      this.$store.commit('setSelectedLeftItems', { selectedLeftItems: [] })

    }

  }
}
</script>

<style scoped>
</style>
