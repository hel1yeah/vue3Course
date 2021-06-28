const App = {
  data() {
    return {
      title: "Список заметок ",
      placeholder: "Введите название заметки",
      inputValue: '',
    };
  },
  methods: {
    inputChangeHandler(e){
      console.log(e.target.value);
      this.inputValue = e.target.value
    }
  },
};

Vue.createApp(App).mount("#app");
