<template>
  <div class="container">
    <app-allert
      v-if="alert"
      text="This very important message"
      title="Alert!!"
      type="warning"
      closable
      @close="alert = false"
    >
    </app-allert>
    <div class="card">
      <button class="btn primary" @click="toggleAlet">
        {{ alert ? "Close" : "Show" }} mesages
      </button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAllert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";

export default {
  components: {
    AppBlock,
    AppAllert,
  },
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toggleAlet() {
      this.alert = !this.alert;
    },
  },
};
</script>
