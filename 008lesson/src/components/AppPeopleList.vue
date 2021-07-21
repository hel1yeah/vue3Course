<template>
  <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">
        Yдалить
      </button>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Нету людей</h4>
    <button class="btn" @click="$emit('action')">Загрузить список</button>
  </div>
</template>

<script>
export default {
  emits: ['action', 'remove'],
  props: ['people'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.inline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
