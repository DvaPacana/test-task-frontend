import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment');
        },
        decrement({ commit }) {
            commit('decrement');
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    }
});

export default store;
