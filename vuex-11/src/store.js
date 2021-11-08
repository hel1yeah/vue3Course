import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    addFive(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});
