<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ toUpperCaseTitle }}</h1>
      <h2>Counter {{ getCounter }}</h2>
      <button class="btn primary" @click="increment">
        increment
      </button>
      <button class="btn primary" @click="incrementAsync">
        incrementAsync
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import TheNavbar from './TheNavbar';
export default {
  components: {
    TheNavbar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('count', ['getCounter']),
    ...mapGetters(['toUpperCaseTitle']),
  },
  methods: {
    ...mapMutations('count', ['increment']),
    ...mapActions('count', ['incrementAsync']),
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync');
    // },
  },
};
</script>
