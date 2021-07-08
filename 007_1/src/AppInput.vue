<template>
  <div class="form-control" :class="{ invalid: error }">
    <label for="name">{{ label }}</label>
    <input
      type="text"
      id="name"
      :placeholder="placeholder"
      :value="value"
      @input="change"
    />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  emits: ["update:value"],
  props: {
    value: String,
    placeholder: String,
    error: String,
    label: String,
  },
  data() {
    return {
      id: "input" + Math.random(),
    };
  },
  methods: {
    change(e) {
      this.$emit("update:value", e.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
