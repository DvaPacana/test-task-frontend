import { getCatalogData, getUserCatalogData } from '@/api';
import { MAX_LENGTH } from '@/constants';

const state = {
  userCatalogItems: [],
  catalogItems: [],

  selectedUserCatalogItems: [],
  selectedCatalogItems: [],

  isLoading: false,
};

const mutations = {
  SET_USER_CATALOG_ITEMS(state, items) {
    state.userCatalogItems = items;
  },
  SET_CATALOG_ITEMS(state, items) {
    state.catalogItems = items;
  },

  ADD_SELECTED_USER_ITEM(state, item) {
    if (!state.selectedUserCatalogItems.find((i) => i.id === item.id)) {
      state.selectedUserCatalogItems.push(item);
    }
  },
  REMOVE_SELECTED_USER_ITEM(state, itemId) {
    const idx = state.selectedUserCatalogItems.findIndex((i) => i.id === itemId);
    if (idx > -1) {
      state.selectedUserCatalogItems.splice(idx, 1);
    }
  },

  ADD_SELECTED_CATALOG_ITEM(state, item) {
    if (!state.selectedCatalogItems.find((i) => i.id === item.id)) {
      state.selectedCatalogItems.push(item);
    }
  },
  REMOVE_SELECTED_CATALOG_ITEM(state, itemId) {
    const idx = state.selectedCatalogItems.findIndex((i) => i.id === itemId);
    if (idx > -1) {
      state.selectedCatalogItems.splice(idx, 1);
    }
  },

  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async fetchAllData({ commit }) {
    commit('SET_LOADING', true);
    try {
      const [userCatalogData, catalogData] = await Promise.all([
        getUserCatalogData(),
        getCatalogData(),
      ]);
      commit('SET_USER_CATALOG_ITEMS', userCatalogData);
      commit('SET_CATALOG_ITEMS', catalogData);
    } catch (error) {
      console.error('Failed to load catalog data:', error);
      throw error;
    } finally {
      commit('SET_LOADING', false);
    }
  },

  selectUserItem({ commit, getters }, item) {
    if (!getters.isUserSelectionFull) {
      commit('ADD_SELECTED_USER_ITEM', item);
    }
  },

  removeUserItem({ commit }, itemId) {
    commit('REMOVE_SELECTED_USER_ITEM', itemId);
  },

  selectCatalogItem({ commit, getters }, item) {
    if (!getters.isCatalogSelectionFull) {
      commit('ADD_SELECTED_CATALOG_ITEM', item);
    }
  },

  removeCatalogItem({ commit }, itemId) {
    commit('REMOVE_SELECTED_CATALOG_ITEM', itemId);
  },
};

const getters = {
  isUserSelectionFull(state) {
    return state.selectedUserCatalogItems.length >= MAX_LENGTH.USER_CATALOG;
  },

  isCatalogSelectionFull(state) {
    return state.selectedCatalogItems.length >= MAX_LENGTH.CATALOG;
  },

  userSelectionCount(state) {
    return state.selectedUserCatalogItems.length;
  },

  catalogSelectionCount(state) {
    return state.selectedCatalogItems.length;
  },

  isUserItemSelected: (state) => (itemId) => {
    return state.selectedUserCatalogItems.some((item) => item.id === itemId);
  },

  isCatalogItemSelected: (state) => (itemId) => {
    return state.selectedCatalogItems.some((item) => item.id === itemId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
