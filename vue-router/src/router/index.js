import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Forget from '../views/Forget.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    // name: 'home',
    component: Home,
  },
  {
    path: '/login',
    // name: 'login',
    component: Login,
  },
  {
    path: '/forget',
    // name: 'forget',
    component: Forget,
  },
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  // import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
