import { createStore } from "vuex";
import main from "./main/index.js";

const store = createStore({
  modules: {
    main,
  },
});

export default store;
