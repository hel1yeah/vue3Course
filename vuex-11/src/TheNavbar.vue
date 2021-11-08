<template>
  <header class="navbar">
    <strong>Counter {{ counter }} </strong>
    <button class="btn primary" @click="addFive">Added</button>
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
    addFive() {
      return this.$store.commit('addFive', { value: 5 });
    },
  },
};
</script>
