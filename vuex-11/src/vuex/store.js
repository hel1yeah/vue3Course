import { createStore } from 'vuex';
import counterModules from './modules/counter';
const vuex = createStore({
  modules: {
    count: counterModules,
  },
  state() {
    return {
      apptitle: 'on Vuex',
    };
  },
  getters: {
    toUpperCaseTitle(state) {
      return state.apptitle.toUpperCase();
    },
  },
});

export default vuex;
