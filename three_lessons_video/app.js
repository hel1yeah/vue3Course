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
      console.log(this);
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
});

app.mount("#app");
