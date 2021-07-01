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
        this.notes.push(this.inputValue.toUpperCase());
        this.inputValue = "";
    },
    deleteNote(i) {
      this.notes.splice(i, 1);
    },
    doubleCount(){
      return this.notes.length * 2
    }
  },
  computed: {
    doubleCountComputed(){
      return this.notes.length * 2
    }
  },
};

Vue.createApp(App).mount("#app");
