<template>
  <div class="container">
    <app-allert
      v-if="alert"
      text="This very important message"
      title="Alert!!"
      type="danger"
      closable
      @close="alert = false"
    >
    </app-allert>
    <div class="card">
      <button class="btn primary" @click="toggleAlet">
        {{ alert ? "Close" : "Show" }} mesages
      </button>
    </div>
  </div>
</template>

<script>
import AppAllert from "./AppAlert.vue";

export default {
  name: "AppBlock",
  components: {
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
