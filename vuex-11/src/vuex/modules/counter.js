export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    decrement(state) {
      state.counter = state.counter - 1;
    },
    increment(state) {
      state.counter = state.counter + 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
        console.log(commit);
      }, 1000);
    },
  },
  getters: {
    getCounter: (state) => {
      return state.counter;
    },
  },
};
