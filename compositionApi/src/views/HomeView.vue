<template>
  <div class="home">
    <labe>
      textInput
      <input type="text" ref="textInput" @input="show">
      <button @click="show">show value</button>
    </labe>

    <label >
      test v-model
      <input type="text" v-model="firstName">
    </label>
      {{ firstName }}
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'

const textInput = ref(null)
const firstName = ref(null)

const show = () => {
  console.log('show value', textInput.value.value)
}
</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>