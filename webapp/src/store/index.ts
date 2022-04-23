import { createStore, Store } from "vuex";

export const store: Store<any> = createStore({
  state() {
    return {
      isNewUser: true,
    };
  },
  actions: {
    changeUserStatus({ commit }, { newStatus }) {
      commit("changeUserStatus", newStatus);
    },
  },
  mutations: {
    changeUserStatus(state, newStatus: boolean) {
      state.isNewUser = newStatus;
    },
  },
  getters: {
    isNewUser(state) {
      return state.isNewUser;
    },
  },
});
