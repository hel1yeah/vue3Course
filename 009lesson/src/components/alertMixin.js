const alertMixin = {
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

export {
  alertMixin,
} 