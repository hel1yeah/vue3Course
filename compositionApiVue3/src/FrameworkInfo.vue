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
import { computed, version } from 'vue';

export default {
  props: ['name', 'version'],
  emits: ['changeBack'],
  setup(props, context) {
    const dobleVersion = computed(() => props.version * props.version);

    function changeBack() {
      context.emit('changeBack', 3);
    }

    return {
      dobleVersion,
      changeBack,
    };
  },
};
</script>

<style lang="scss" scoped></style>
