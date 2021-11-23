import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ReusablePage from './views/ReusablePage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/reusable', component: ReusablePage },
  ],
  linkActiveClass: 'active',
});
