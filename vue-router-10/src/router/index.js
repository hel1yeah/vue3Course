import { createRouter, createWebHistory } from 'vue-router';

import Login from './../views/Login.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },
  // { path: '/about', component: About },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
