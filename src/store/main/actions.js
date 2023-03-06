export default {
  pushUserCart({ commit }, payload) {
    commit("setUserCart", payload);
  },
  pushItem({ commit }, payload) {
    commit("setItem", payload);
  },
  removeItem({ commit }, payload) {
    commit("setRemoveItem", payload);
  },
  returnItem({ commit }, payload) {
    commit("setReturnItem", payload);
  },
};
