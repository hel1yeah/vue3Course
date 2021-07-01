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
    addNote() {
      this.notes.push(this.inputValue.toUpperCase());
      this.inputValue = "";
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = " ";
      }
    },
  },
};

Vue.createApp(App).mount("#app");
