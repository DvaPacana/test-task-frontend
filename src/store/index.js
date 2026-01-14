import { createStore } from 'vuex';
import catalogManager from './catalogManager';

export default createStore({
  modules: {
    catalogManager,
  },
});
