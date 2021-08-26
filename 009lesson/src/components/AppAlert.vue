<template>
  <div class="alert" :class="type" >
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" v-if="closable" @click="$emit('close')" :class="type">Close</button>
  </div>
</template>

<script>
export default {
  name: "AppAllert",
  emits: ["close"],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "danger", "warning"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
