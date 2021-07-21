const h = Vue.h;

const app = Vue.createApp({
  data: () => ({
    title: "Property title with data",
  }),
  // template: `
  //   <div class='card center' style="color: red">
  //     <h1>{{title}}</h1>
  //     <button class='btn primary'
  //     @click=" this.title = 'new title!!!!'">
  //     Button change
  //     </button>
  //   </div>
  // `,
  methods: {
    changeTitle() {
      this.title = "изменили";
    },
  },
  render() {
    return h(
      "div",
      {
        class: "card center",
      },
      [
        h("h1", {}, this.title),
        h("button", { class: "btn", onclick: this.changeTitle }, "изменить "),
      ]
    );
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
});

// setTimeout(() => {
//   app.unmount()
// }, 2000);

app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      title: 'test title app2 '
    }
  },
})

app2.mount("#app2");

