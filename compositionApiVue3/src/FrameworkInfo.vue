<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}</strong>
    </p>
    <p>
      Версия в квадрате: <strong>{{ dobleVersion }}</strong>
    </p>
    <button class="btn danger" @click="changeBack">Change Back</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  // props: ['name', 'version'],
  emits: ['changeBack'],
  setup(props, context) {
    const dobleVersion = computed(() => version.value * version.value);

    function changeBack() {
      context.emit('changeBack', 3);
    }
    const version = inject('version');

    return {
      name: inject('name'),
      dobleVersion,
      version,
      changeBack,
    };
  },
};
</script>

<style lang="scss" scoped></style>
