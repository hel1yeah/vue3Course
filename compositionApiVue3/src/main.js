import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';

import { router } from './router.js';
import store from './store/store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
