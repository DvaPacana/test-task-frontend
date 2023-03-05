import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectUserItems: new Map(),
    userItems: new Map(
      Object.entries([
        {
          id: 1,
          name: "Shoes 1",
        },
        {
          id: 2,
          name: "Shoes 2",
        },
        {
          id: 3,
          name: "Shoes 3",
        },
        {
          id: 4,
          name: "Shoes 4",
        },
        {
          id: 5,
          name: "T-shirt 1",
        },
        {
          id: 6,
          name: "T-shirt 2",
        },
        {
          id: 7,
          name: "T-shirt 3",
        },
        {
          id: 8,
          name: "T-shirt 4",
        },
      ])
    ),
    selectChoiceItem: null,
    choiceItems: new Map(
      Object.entries([
        {
          id: 11,
          name: "Jacket 1",
        },
        {
          id: 12,
          name: "Jacket 2",
        },
        {
          id: 13,
          name: "Jacket 3",
        },
        {
          id: 14,
          name: "Jacket 4",
        },
        {
          id: 15,
          name: "Hoodie 1",
        },
        {
          id: 16,
          name: "Hoodie 2",
        },
        {
          id: 17,
          name: "Hoodie 3",
        },
        {
          id: 18,
          name: "Hoodie 4",
        },
      ])
    ),
  },
  getters: {
    getUserItems: (s) => s.userItems,
    getChoiceItems: (s) => s.choiceItems,
    getSelectChoiceItem: (s) => s.selectChoiceItem,
    getSelectUserItems: (s) => s.selectUserItems,
  },
  mutations: {
    deleteUserItem(state, key) {
      state.userItems.delete(key);
    },
    insertUserItem(state, data) {
      state.userItems.set(data[0], data[1]);
    },
    selectUserItem(state, data) {
      state.selectUserItems.set(data[0], data[1]);
    },
    deleteSelectUserItem(state, key) {
      state.selectUserItems.delete(key);
    },

    deleteChoiceItem(state, key) {
      state.choiceItems.delete(key);
    },
    insertChoiceItem(state, data) {
      state.choiceItems.set(data[0], data[1]);
    },
    selectChoiceItem(state, value) {
      state.selectChoiceItem = value;
    },
  },
  actions: {},
  modules: {},
});
