<template>
  <div class="card">
    <h1>ReusablePage</h1>
    <button class="btn primary">Показ сообщений</button>
    <button class="btn" @click="navigateTo">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    console.log(route.path);

    const navigateTo = () => {
      console.log(route);
      router.push('/');
    };

    return {
      navigateTo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
