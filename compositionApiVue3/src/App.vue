<template>
  <header class="navbar card">
    <h1>Vue Composition Api</h1>
    <ul class="navbar-menu">
      <li class="navbar-list">
        <router-link to="/">Главная</router-link>
      </li>
      <li class="navbar-list">
        <router-link to="/reusable">Переиспользование</router-link>
      </li>
      <li class="navbar-list">
        <router-link to="/re">Никуда</router-link>
      </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>
