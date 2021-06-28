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
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
  },
};

Vue.createApp(App).mount("#app");
