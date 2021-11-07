import { createRouter, createWebHistory } from 'vue-router';

import Login from './../views/Login.vue';
import Forget from './../views/Forget.vue';
import Mail from './../views/Mail.vue';
import Dashboard from './../views/Dashboard.vue';

const routes = [
  { path: '/login', name: 'login', component: Login, alias: '/' },
  { path: '/forget', name: 'forget', component: Forget },
  { path: '/mail/:mailId?', name: 'mail', component: Mail },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
