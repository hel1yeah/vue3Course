import { createStore } from 'vuex';

const vuex = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    decrement(state) {
      state.counter = state.counter - 1;
      console.log('decrement store');
    },
    increment(state) {
      state.counter = state.counter + 1;
      console.log('increment store');
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
        console.log(commit);
      }, 1000);
    },
  },
});

export default vuex;
