<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
  </div>
</template>

<script>
export default {
  name: 'Forget',
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
