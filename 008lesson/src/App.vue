<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson" >
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <lable for="name">Введите имя</lable>
        <input class="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primaty" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "",
    };
  },
  methods: {
    createPerson(){
      // https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/

    }
  },
};
</script>

<style lang="scss"></style>
