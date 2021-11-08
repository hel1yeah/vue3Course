<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.getters.counter }}</h2>
      <button class="btn primary" @click="increment">+1</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
export default {
  components: {
    TheNavbar,
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
  },
};
</script>
