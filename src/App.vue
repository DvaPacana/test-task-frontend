<template>
  <main>
    <div class="col-2">
      <array-component :items="selectedLeft">
        <div>Selected {{ selectedLeft.length }} / {{ maxSelected }}</div>
      </array-component>
      <array-component :items="selectedRight" class="container-single"></array-component>
    </div>
    <div class="col-2">
      <array-component
        :items="leftItems"
        :selected="selectedLeft"
        :max-value="maxSelected"
        @on-add="(item) => addItem(item, 'selectedLeft')"
        @on-remove="(item) => removeItem(item, 'selectedLeft')"
      ></array-component>
      <array-component
        :items="rightItems"
        :selected="selectedRight"
        @on-add="(item) => addItem(item, 'selectedRight')"
        @on-remove="(item) => removeItem(item, 'selectedRight')"
      ></array-component>
    </div>
  </main>
</template>

<script>
  import ArrayComponent from './components/ArrayComponent'
  import { leftItems, rightItems } from './data'

  export default {
    name: 'App',
    components: { ArrayComponent },
    data: function () {
      return {
        leftItems,
        rightItems,
        selectedLeft: [],
        selectedRight: [],
        maxSelected: 6,
      }
    },
    methods: {
      addItem: function (inner, parent) {
        this[parent].push(inner)
      },
      removeItem: function (inner, parent) {
        this[parent] = this[parent].filter(item => item.id !== inner.id)
      },
    }
  }
</script>
