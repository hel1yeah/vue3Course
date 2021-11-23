<template>
  <app-alert
    v-if="alert"
    alertTitle="work"
    type="primary"
    @closeAlert="closeAlert"
  ></app-alert>
  <div class="card">
    <small>data, methods, computed, watch</small>
    <hr />

    <button class="btn" @click="changeInfo">Изменить</button>
    <button class="btn danger" @click="toggleAlert">
      {{ !alert ? 'Показать' : 'Скрыть' }} сообщение
    </button>

    <div class="form-control">
      <input class="input" type="text" v-model="textInput" />
    </div>
  </div>
  <framework-info @changeBack="changeBack"></framework-info>
</template>

<script>
import FrameworkInfo from './../FrameworkInfo.vue';
import AppAlert from './../AppAlert.vue';
import { ref, reactive, toRefs, isRef, computed, watch, provide } from 'vue';
export default {
  components: {
    FrameworkInfo,
    AppAlert,
  },

  setup() {
    const name = ref('VueJS!');
    const version = ref(3);
    const textInput = ref('');
    const alert = ref(false);

    function changeInfo() {
      name.value = 'Vue.js!!!';
      version.value = 42;
    }

    function changeBack() {
      version.value = 3;
    }

    const toggleAlert = () => (alert.value = !alert.value);

    const closeAlert = () => (alert.value = false);

    provide('name', name);
    provide('version', version);

    return {
      changeInfo,
      changeBack,

      textInput,
      alert,
      toggleAlert,
      closeAlert,
    };
  },
};
</script>

<style lang="scss" scoped></style>
