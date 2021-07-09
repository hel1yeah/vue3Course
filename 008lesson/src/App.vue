<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <lable for="name">Введите имя</lable>
        <input class="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primaty" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>
    <app-people-list :people="people" @action="getPeople"></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./components/AppPeopleList.vue";
import axios from "axios";
export default {
  name: "App",
  components: { AppPeopleList },
  data() {
    return {
      name: "",
      people: [],
    };
  },
  methods: {
    async createPerson() {
      // https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users.json

      const response = await fetch(
        "https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        }
      );
      this.name = "";
      const firebaseData = await response.json();
      console.log(firebaseData);
    },
    getPeople() {
      return new Promise(() => {
        axios
          .get(
            "https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users.json"
          )
          .then((response) => {
            let data = response.data;
            this.people = Object.keys(data).map((key) => {
              return {
                id: key,
                ...data[key],
              };
            });
            console.log(this.people);
          });
      });
    },
  },
};
</script>

<style lang="scss"></style>
