<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <hr />
      <p>
        Название: <strong>{{ framework.name }}</strong>
      </p>
      <p>
        Версия: <strong>{{ framework.version }}</strong>
      </p>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, isRef } from 'vue';

export default {
  setup() {
    const name = ref('VueJS!');
    const version = ref(3);

    const framework = reactive({
      name: 'VueJS!',
      version: 3,
    });

    function changeInfo() {
      name.value = 'Vue.js!!!';
      version.value = 42;
    }

    return {
      name,
      version,
      changeInfo,
      framework,
    };
  },
};
</script>
