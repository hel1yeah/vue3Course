<template>
  <header class="navbar">
    <strong>Counter {{ getCounter }}</strong>
    <button class="btn danger" @click="decrement">
      decrement
    </button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('count', ['getCounter']),
  },
  methods: {
    ...mapMutations('count', ['decrement']),
  },
};
</script>
