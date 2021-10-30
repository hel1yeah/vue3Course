import { createApp } from 'vue';
import App from './App.vue';
import translatePlugin from './components/translatePlugin';
import './theme.css';

const app = createApp(App);

app.use(translatePlugin);

app.mount('#app');
