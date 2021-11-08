import { createRouter, createWebHistory } from 'vue-router';

import Login from './../views/Login.vue';
import Forget from './../views/Forget.vue';
import Mail from './../views/Mail.vue';
import Dashboard from './../views/Dashboard.vue';

import AppEmailBody from './../components/AppEmailBody.vue';
import TheNotFaund from './../components/TheNotFaund.vue';

const routes = [
  { path: '/login', name: 'login', component: Login, alias: '/' },
  {
    path: '/forget',
    name: 'forget',
    component: Forget,
    meta: { cantEnter: true },
  },
  {
    path: '/mail',
    name: 'mail',
    children: [{ path: ':mailId?', component: AppEmailBody, props: true }],
    component: Mail,
  },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  {
    path: '/:found(.*)',
    component: TheNotFaund,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    next(false);
  } else {
    next();
  }
});

export default router;
