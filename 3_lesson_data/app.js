Vue.createApp({
  data: () => ({
    title: "v-text",
    title2: "title-2",
    myHTML: "<h1> vue 3 app</h1>  ",
    person: {
      firstName: "Yura",
      lastName: "Larsen",
      age: 22,
    },
    items: [1, 2, 3],
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      console.log(this.$refs.myInput.value);
      this.$refs.myInput.value = " ";
    },
  },
  computed: {
    // eventItems() {
    // return this.items.filter((i) => i % 2 === 0);
    // },
  },
}).mount("#app");
