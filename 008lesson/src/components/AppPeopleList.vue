<template>
  <div v-if="people.length !== 0">
    <div class="card" v-for="person in people" :key="person">
      <h3>{{ person.firstName }}</h3>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Нету людей</h4>
    <button class="btn" @click="$emit('action')">Загрузить список</button>
  </div>
</template>

<script>
export default {
  emits: ["action"], 
  props: ["people"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
