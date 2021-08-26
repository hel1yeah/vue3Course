import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import { alertMixin } from "@/components/alertMixin";



const app = createApp(App);
app.mixin(alertMixin);
app.mount("#app");
