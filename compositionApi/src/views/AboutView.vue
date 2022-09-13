<template>
  <div class="about">
    <h1 :style="{color: color}">{{ color }}</h1>
    {{ props.name }} ({{ doubleVersion }})
    <button @click="changeVersion">chenge verssion</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  version: {
    type: Number,
    required: true
  },
})

const emit = defineEmits([
  'changeVersion'
])

const changeVersion = () => emit('changeVersion', 10);


const doubleVersion = computed(() => {
  return props.version * 2
})

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
