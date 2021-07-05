<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>
      <app-button :classBtn="classOne" @action="active = 'one'">
        One
      </app-button>
      <app-button :classBtn="classTwo" @action="active = 'two'">
        Two
      </app-button>
    </div>
    <keep-alive>
      <component :is="componentName" />
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./components/AppButton.vue";
import AppTextOne from "./components/AppTextOne.vue";
import AppTextTwo from "./components/AppTextTwo.vue";
export default {
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo,
  },
  data() {
    return {
      active: "one",
    };
  },
  computed: {
    componentName() {
      return "app-text-" + this.active;
    },
    classOne() {
      return this.active === "one" ? "primary" : "";
    },
    classTwo() {
      return this.active === "two" ? "primary" : "";
    },
  },
};
</script>

<style>
h2 {
  color: red;
}
</style>
