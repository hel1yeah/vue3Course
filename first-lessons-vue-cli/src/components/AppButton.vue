<template>
  <button class="btn" :class="classBtn" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    classBtn: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      },
    },
  },
  emits: ["action"],
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
