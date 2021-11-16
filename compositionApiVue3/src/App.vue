<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr />
      <p>
        Название: <strong>{{ name }}</strong>
      </p>
      <p>
        Версия: <strong>{{ version }}</strong>
      </p>

      <p>
        Версия в квадрате: <strong>{{ dobleVersion }}</strong>
      </p>

      <button class="btn" @click="changeInfo">Изменить</button>

      <div class="form-control">
        <input class="input" type="text" ref="textInput" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, isRef, computed, watch } from 'vue';

export default {
  setup() {
    const name = ref('VueJS!');
    const version = ref(3);
    const textInput = ref(null);

    function changeInfo() {
      name.value = 'Vue.js!!!';
      version.value = 42;

      console.log(textInput.value.value);
    }

    const dobleVersion = computed(() => version.value * version.value);

    watch(dobleVersion, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });

    return {
      name,
      version,
      changeInfo,
      // framework,
      dobleVersion,
      textInput,
    };
  },
};
</script>
