<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view>
      <!-- <login></login> -->
      <!-- <forget></forget> -->
    </router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar';
import Login from './views/Login';
import Forget from './views/Forget';

export default {
  components: { TheNavbar, Login, Forget },
  provide() {
    return {
      emails: [
        { id: 1, theme: 'Купил себе PlayStation 5' },
        { id: 2, theme: 'Выучил Vue Router' },
        { id: 3, theme: 'Хочу изучить весь Vue' },
        { id: 4, theme: 'А следующий блок про Vuex!' },
        { id: 5, theme: 'А что там на счет Vue Hooks?' },
      ],
    };
  },
};
</script>

<style></style>
