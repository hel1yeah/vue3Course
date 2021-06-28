const App = {
  data() {
    return {
      title: "Список заметок ",
      placeholder: "Введите название заметки",
      inputValue: "",
      notes: ["note 1", "sadsad"],
    };
  },
  methods: {
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    },
    addNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }

    },
  },
};

Vue.createApp(App).mount("#app");
