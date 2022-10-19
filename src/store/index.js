import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedLeftItems: [],
    selectedRightItem: ''
  },
  mutations: {
    setSelectedLeftItems(state, { selectedLeftItems }) {
      state.selectedLeftItems = selectedLeftItems
    },
    setSelectedRightItem(state, { selectedRightItem }) {
      state.selectedRightItem = selectedRightItem
    }
  },
  actions: {
  },
  getters: {
    getSelectedLeftItems(state) {
      return state.selectedLeftItems
    },
    getSelectedRightItem(state) {
      return state.selectedRightItem
    },
  },
  modules: {
  }
})
