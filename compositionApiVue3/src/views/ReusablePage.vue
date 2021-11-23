<template>
  <app-alert
    v-if="alert"
    alertTitle="work"
    type="primary"
    @closeAlert="closeAlert"
  ></app-alert>
  <div class="card">
    <h1>ReusablePage</h1>
    <button class="btn primary" @click="toggleAlert">
      {{ alert ? 'Закрыть' : 'Показать' }} сообщений
    </button>
    <button class="btn" @click="navigateTo">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import AppAlert from '../AppAlert.vue';
import { useAlert } from '../use/alert';

export default {
  components: { AppAlert },
  setup() {
    const { alert, toggleAlert, closeAlert } = useAlert();
    const router = useRouter();
    const route = useRoute();

    const navigateTo = () => router.push('/');

    return {
      navigateTo,
      alert,
      toggleAlert,
      closeAlert,
    };
  },
};
</script>

<style lang="scss" scoped></style>
