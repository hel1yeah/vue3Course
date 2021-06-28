const App = {
  data() {
    return {
      counter: 0,
      title: "счётчик",
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};

Vue.createApp(App).mount("#app");
