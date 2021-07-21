<template>
  <div class="card">
    <slot name="header"></slot>
    <slot>no text </slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "AppBlock",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
