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
import { ref } from 'vue';

export default {
  components: { AppAlert },
  setup() {
    const alert = ref(false);

    const router = useRouter();
    const route = useRoute();

    console.log(route.path);

    const navigateTo = () => router.push('/');

    const toggleAlert = () => (alert.value = !alert.value);

    const closeAlert = () => (alert.value = false);
    return {
      alert,
      navigateTo,
      toggleAlert,
      closeAlert,
    };
  },
};
</script>

<style lang="scss" scoped></style>
