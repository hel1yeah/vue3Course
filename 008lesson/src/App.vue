<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null" v-if="alert"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>
      <div class="form-control">
        <label for="name">Введите имя</label>
        <input class="text" id="name" v-model.trim="name" />
      </div>
      <button class="btn primaty" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>
    <app-people-list
      :people="people"
      @action="getPeople"
      @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from '@/components/AppPeopleList.vue'
import AppAlert from '@/components/AppAlert.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: { AppPeopleList, AppAlert },
  data() {
    return {
      name: '',
      people: [],
      alert: null,
    }
  },
  methods: {
    async createPerson() {
      const response = await fetch(
        'https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        },
      )
      const firebaseData = await response.json()
      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      })
      this.name = ''
    },
    getPeople() {
      return new Promise(() => {
        axios
          .get(
            'https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users.json',
          )
          .then((response) => {
            let data = response.data
            this.people = Object.keys(data).map((key) => {
              return {
                id: key,
                ...data[key],
              }
            })
          })
          .catch((err) => {
            console.log(err)
            this.alert = {
              type: 'danger',
              title: 'erorrs!!!',
              text: err,
            }
          })
      })
    },
    removePerson(id) {
      return new Promise((resolve) => {
        axios
          .delete(
            `https://vuehttplesson-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
          )
          .then((response) => {
            const name = this.people.find(
              (person) => person.id === id,
            ).firstName
            this.people = this.people.filter((person) => person.id !== id)
            this.alert = {
              type: 'primary',
              title: 'Success',
              text: `Succses deleted user ${name}`,
            }
          })
          .catch((err) => {})
      })
    },
  },
  mounted() {
    this.getPeople()
  },
}

// Firebase, fetch, Async Await, AXIOS, POST, GET, DELETE,
</script>

<style lang="scss"></style>
