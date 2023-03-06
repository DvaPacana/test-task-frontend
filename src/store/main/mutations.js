export default {
  setUserCart(state, payload) {
    state.userCart.push(payload);
    state.leftItems = state.leftItems.filter((el) => el.id !== payload.id);
  },
  setRemoveItem(state, payload) {
    state.leftItems.push(payload);
    state.userCart = state.userCart.filter((el) => el.id !== payload.id);
  },
  setItem(state, payload) {
    state.item = payload;
    state.rightItems = state.rightItems.filter((el) => el.id !== payload.id);
  },
  setReturnItem(state, payload) {
    state.rightItems.push(payload);
  },
};
