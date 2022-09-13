<template>
  <header>
    {{ name }}
    <br>
    {{ num }}
    <br>
    <button @click="chengeInfo"> chenge info </button>
    <hr>
    {{ obj2.color }}
    <br>
    {{ obj2.width }}
    ({{ doubleV }})
    <br>
    <router-view></router-view>
  </header>
</template>

<script setup>
import {RouterView} from 'vue-router'

import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
}
  from 'vue'
const name = ref('Vue2')
const num = ref(2)
const boll = ref(true)

const obj2 = reactive({
  color: 'red',
  width: 200
})

const chengeInfo = () => {
  num.value = 42
  obj2.color = 'blue'
  obj2.width = 200 * 2
}

const doubleV = computed(() => {
  return  obj2.width * 2
})

watch(doubleV, (newv, oldv) => {
  console.log('watch', oldv)
  console.log('watch', newv)
})

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
