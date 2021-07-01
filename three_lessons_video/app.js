const app = Vue.createApp({
  data: () => ({
    title: "Property title with data",
  }),
  template: `
    <div class='card center' style="color: red">
      <h1>{{title}}</h1>
      <button class='btn primary' 
      @click=" foo "> 
      Button change
      </button>
    </div>  
  `,
  methods: {
    foo(){
      this.title = 'new title!!!!'
      console.log('bar');
    }
  },
});

app.mount("#app");
