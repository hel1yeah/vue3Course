<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <app-input
        :placeholder="'Введи имя'"
        :error="errors.name"
        :lable="'Как тебя зовут?'"
        v-model:value="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" v-model.number="age" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="no" />
            Нет</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skillsVue"
              name="test"
              value="Vuex"
            />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skillsVue"
              name="test"
              value="Vue CLI"
            />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skillsVue"
              name="test"
              value="Vue Router"
            />
            Vue Router</label
          >
        </div>
      </div>
      <div class="form-checkbox">
        <div class="lable">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="agree" /> С правилами ознакомился
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";
export default {
  components: {
    AppInput,
  },
  data() {
    return {
      name: "",
      age: "24",
      city: "nsk",
      relocate: null,
      skillsVue: [],
      agree: false,
      errors: {
        name: null,
      },
    };
  },
  methods: {
    formIsValid() {
      let isValid = true;
      if (this.name.length !== 3) {
        this.errors.name = "Имя должно иметь буквы";
        isValid = false;
      } else {
        this.errors.name = null;
      }
      return isValid;
    },
    submitHandler(e) {
      if (this.formIsValid()) {
        console.group("Form data");
        console.log("name", this.name);
        console.log("age", this.age);
        console.log("city", this.city);
        console.log("relocate", this.relocate);
        console.log("skillsVue", this.skillsVue);
        console.log("agree", this.agree);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control.invalid input {
  border-color: firebrick;
}
</style>
