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
});

export default vuex;
