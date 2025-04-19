import Vue from 'vue';
import Vuex from 'vuex';
import { toggleSelection, selectSingle } from '@/utils/selectionUtils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLeft: [],
    selectedRight: null,
  },
  mutations: {
    SET_LEFT(state, items) {
      state.selectedLeft = items;
    },
    SET_RIGHT(state, item) {
      state.selectedRight = item;
    },
  },
  actions: {
    toggleLeft({ commit, state }, item) {
      const updated = toggleSelection(state.selectedLeft, item, 6);
      commit('SET_LEFT', updated);
    },
    selectRight({ commit, state }, item) {
      const updated = selectSingle(state.selectedRight, item);
      commit('SET_RIGHT', updated);
    },
  },
});
