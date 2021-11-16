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

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('VueJS!');
    const version = ref(3);

    return {
      name,
      version,
    };
  },

  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3,
  //   };
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!';
  //     this.version = 4;
  //   },
  // },
};
</script>
