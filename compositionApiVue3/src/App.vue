<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr />

      <button class="btn" @click="changeInfo">Изменить</button>

      <div class="form-control">
        <input class="input" type="text" v-model="textInput" />
      </div>
    </div>
    <framework-info
      :name="name"
      :version="version"
      @changeBack="changeBack"
    ></framework-info>
  </div>
</template>

<script>
import { ref, reactive, toRefs, isRef, computed, watch } from 'vue';

import FrameworkInfo from './FrameworkInfo.vue';

export default {
  components: {
    FrameworkInfo,
  },
  setup() {
    const name = ref('VueJS!');
    const version = ref(3);
    const textInput = ref('');

    function changeInfo() {
      name.value = 'Vue.js!!!';
      version.value = 42;
    }

    function changeBack() {
      version.value = 3;
    }

    // const dobleVersion = computed(() => version.value * version.value);

    // watch([dobleVersion, textInput], (newValue, oldValue) => {
    //   console.log(newValue[0]);
    //   console.log(oldValue[1]);
    //   console.log(newValue[1]);
    // });

    return {
      name,
      version,
      changeInfo,
      changeBack,
      // framework,
      // dobleVersion,
      textInput,
    };
  },
};
</script>
