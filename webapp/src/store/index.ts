import { createStore, Store } from "vuex";

export const store: Store<any> = createStore({
  state() {
    return {
      isNewUser: true,
      currentUser: "",
      guardians: [],
    };
  },
  actions: {
    changeUserStatus({ commit }, { newStatus }) {
      commit("changeUserStatus", newStatus);
    },
    setCurrentUser({ commit }, { user }) {
      commit("setCurrentUser", user);
    },
    updateGuardians({ commit }, { guardians }) {
      commit("updateGuardians", guardians);
    },
  },
  mutations: {
    changeUserStatus(state, newStatus: boolean) {
      state.isNewUser = newStatus;
    },
    setCurrentUser(state, user: string) {
      state.user = user;
    },
    updateGuardians(state, guardians: string[]) {
      state.guardians = guardians;
    },
  },
  getters: {
    isNewUser(state) {
      return state.isNewUser;
    },
    currentUser(state) {
      return state.currentUser;
    },
    guardians(state) {
      return state.guardians;
    },
  },
});
