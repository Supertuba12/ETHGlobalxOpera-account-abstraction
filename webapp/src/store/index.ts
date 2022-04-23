import { createStore, Store } from "vuex";

export const store: Store<any> = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
