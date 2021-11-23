import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ReusablePage from './views/ReusablePage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/reusable', name: 'reusable', component: ReusablePage },
  ],
  linkActiveClass: 'active',
});
