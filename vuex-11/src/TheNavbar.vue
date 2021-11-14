<template>
  <header class="navbar">
    <strong>Counter {{ counter }}</strong>
    <button class="btn danger" @click="decrement">
      decrement
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>
