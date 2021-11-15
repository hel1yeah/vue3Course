<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>on Vuex</h1>
      <h2>Counter {{ $store.state.counter }}</h2>
      <button class="btn primary" @click="incrementAsync">
        increment
      </button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar';
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {};
  },
  methods: {
    incrementAsync() {
      this.$store.dispatch('incrementAsync');
    },
  },
};
</script>
